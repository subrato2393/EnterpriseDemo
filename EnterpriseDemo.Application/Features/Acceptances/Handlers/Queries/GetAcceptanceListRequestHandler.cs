using AutoMapper;
using EnterpriseDemo.Application.DTOs.Acceptance;
using EnterpriseDemo.Application.Contracts.Persistence;
using MediatR;
using EnterpriseDemo.Application.Models;
using EnterpriseDemo.Application.DTOs.Common.Validators;
using EnterpriseDemo.Application.Exceptions;
using EnterpriseDemo.Domain;
using EnterpriseDemo.Application.Features.Acceptances.Requests.Queries;

namespace EnterpriseDemo.Application.Features.Acceptances.Handlers.Queries
{
    public class GetAcceptanceListRequestHandler : IRequestHandler<GetAcceptanceListRequest, PagedResult<AcceptanceDto>>
    {

        private readonly IEnterpriseDemoRepository<EnterpriseDemo.Domain.Acceptance> _AcceptanceRepository;

        private readonly IMapper _mapper;

        public GetAcceptanceListRequestHandler(IEnterpriseDemoRepository<EnterpriseDemo.Domain.Acceptance> AcceptanceRepository, IMapper mapper)
        {
            _AcceptanceRepository = AcceptanceRepository;
            _mapper = mapper;
        }

        public async Task<PagedResult<AcceptanceDto>> Handle(GetAcceptanceListRequest request, CancellationToken cancellationToken)
        {
            var validator = new QueryParamsValidator();
            var validationResult = await validator.ValidateAsync(request.QueryParams);

            if (validationResult.IsValid == false)
                throw new ValidationException(validationResult);

            IQueryable<EnterpriseDemo.Domain.Acceptance> Acceptances = _AcceptanceRepository.FilterWithInclude(x => (x.Name.Contains(request.QueryParams.SearchText) || String.IsNullOrEmpty(request.QueryParams.SearchText)), "Category");
            var totalCount = Acceptances.Count();
            Acceptances = Acceptances.OrderByDescending(x => x.AcceptanceId).Skip((request.QueryParams.PageNumber - 1) * request.QueryParams.PageSize).Take(request.QueryParams.PageSize);

            var AcceptanceDtos = _mapper.Map<List<AcceptanceDto>>(Acceptances);
            var result = new PagedResult<AcceptanceDto>(AcceptanceDtos, totalCount, request.QueryParams.PageNumber, request.QueryParams.PageSize);

            return result;


        }
    }
}
