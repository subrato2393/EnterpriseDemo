using AutoMapper;
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
    public class DeleteBoardCommandHandler : IRequestHandler<DeleteBoardCommand>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public DeleteBoardCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<Unit> Handle(DeleteBoardCommand request, CancellationToken cancellationToken)
        {
            var Board = await _unitOfWork.Repository<Board>().Get(request.BoardId);

            if (Board == null)
                throw new NotFoundException(nameof(Board), request.BoardId);

            await _unitOfWork.Repository<Board>().Delete(Board);
            await _unitOfWork.Save();

            return Unit.Value;
        }
    }
}
