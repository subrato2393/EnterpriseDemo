using AutoMapper;
using EnterpriseDemo.Application.DTOs;
using EnterpriseDemo.Application.DTOs.Board;
using EnterpriseDemo.Application.Features.Boards.Requests;
using EnterpriseDemo.Application.Features.Boards.Requests.Queries;
using EnterpriseDemo.Application.Contracts.Persistence;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Linq;
using EnterpriseDemo.Application.Models;
using EnterpriseDemo.Application.DTOs.Common.Validators;
using EnterpriseDemo.Application.Exceptions;

namespace EnterpriseDemo.Application.Features.Boards.Handlers.Queries
{
    public class GetBoardListRequestHandler : IRequestHandler<GetBoardListRequest, PagedResult<BoardDto>>
    {

        private readonly IEnterpriseDemoRepository<EnterpriseDemo.Domain.Board> _BoardRepository;

        private readonly IMapper _mapper;

        public GetBoardListRequestHandler(IEnterpriseDemoRepository<EnterpriseDemo.Domain.Board> BoardRepository, IMapper mapper)
        {
            _BoardRepository = BoardRepository;
            _mapper = mapper;
        }

        public async Task<PagedResult<BoardDto>> Handle(GetBoardListRequest request, CancellationToken cancellationToken)
        {
            var validator = new QueryParamsValidator();
            var validationResult = await validator.ValidateAsync(request.QueryParams);

            if (validationResult.IsValid == false)
                throw new ValidationException(validationResult);

            IQueryable<EnterpriseDemo.Domain.Board> Boards = _BoardRepository.FilterWithInclude(x => (x.BoardName.Contains(request.QueryParams.SearchText) || String.IsNullOrEmpty(request.QueryParams.SearchText)));
            var totalCount = Boards.Count();
            Boards = Boards.OrderByDescending(x => x.BoardId).Skip((request.QueryParams.PageNumber - 1) * request.QueryParams.PageSize).Take(request.QueryParams.PageSize);

            var BoardDtos = _mapper.Map<List<BoardDto>>(Boards);
            var result = new PagedResult<BoardDto>(BoardDtos, totalCount, request.QueryParams.PageNumber, request.QueryParams.PageSize);

            return result;


        }
    }
}
