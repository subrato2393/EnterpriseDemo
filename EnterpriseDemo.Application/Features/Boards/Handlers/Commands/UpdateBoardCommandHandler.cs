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

namespace EnterpriseDemo.Application.Features.Boards.Handlers.Commands
{
    public class UpdateBoardCommandHandler : IRequestHandler<UpdateBoardCommand, Unit>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public UpdateBoardCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<Unit> Handle(UpdateBoardCommand request, CancellationToken cancellationToken)
        {
            var validator = new UpdateBoardDtoValidator();
            var validationResult = await validator.ValidateAsync(request.BoardDto);

            if (validationResult.IsValid == false)
                throw new ValidationException(validationResult);

            var Board = await _unitOfWork.Repository<Board>().Get(request.BoardDto.BoardId);

            if (Board is null)
                throw new NotFoundException(nameof(Board), request.BoardDto.BoardId);

            _mapper.Map(request.BoardDto, Board);

            await _unitOfWork.Repository<Board>().Update(Board);
            await _unitOfWork.Save();

            return Unit.Value;
        }
    }
}
