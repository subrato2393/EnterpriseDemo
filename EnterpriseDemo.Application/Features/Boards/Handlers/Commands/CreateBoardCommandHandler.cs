using AutoMapper;
using EnterpriseDemo.Application.DTOs.Board.Validators;
using EnterpriseDemo.Application.Exceptions;
using EnterpriseDemo.Application.Features.Boards.Requests.Commands;
using EnterpriseDemo.Application.Contracts.Persistence;
using EnterpriseDemo.Domain;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using EnterpriseDemo.Application.Responses; 
using System.Linq;

namespace EnterpriseDemo.Application.Features.Boards.Handlers.Commands
{
    public class CreateBoardCommandHandler : IRequestHandler<CreateBoardCommand, BaseCommandResponse>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public CreateBoardCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<BaseCommandResponse> Handle(CreateBoardCommand request, CancellationToken cancellationToken)
        {
            var response = new BaseCommandResponse();
            var validator = new CreateBoardDtoValidator();
            var validationResult = await validator.ValidateAsync(request.BoardDto);

            if (validationResult.IsValid == false)
            {
                response.Success = false;
                response.Message = "Creation Failed";
                response.Errors = validationResult.Errors.Select(q => q.ErrorMessage).ToList();
            }
            else
            {
                var Board = _mapper.Map<Board>(request.BoardDto);

                Board = await _unitOfWork.Repository<Board>().Add(Board);
                await _unitOfWork.Save();

                response.Success = true;
                response.Message = "Creation Successful";
                response.Id = Board.BoardId;
            }

            return response;
        }
    }
}
