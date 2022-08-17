using AutoMapper;
using EnterpriseDemo.Application.Exceptions;
using EnterpriseDemo.Application.Contracts.Persistence;
using MediatR;
using EnterpriseDemo.Application.Features.Acceptances.Requests.Commands;

namespace EnterpriseDemo.Application.Features.Acceptances.Handlers.Commands
{
    public class DeleteAcceptanceCommandHandler : IRequestHandler<DeleteAcceptanceCommand>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public DeleteAcceptanceCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<Unit> Handle(DeleteAcceptanceCommand request, CancellationToken cancellationToken)
        {
            var Acceptance = await _unitOfWork.Repository<EnterpriseDemo.Domain.Acceptance>().Get(request.AcceptanceId);

            if (Acceptance == null)
                throw new NotFoundException(nameof(Acceptance), request.AcceptanceId);

            await _unitOfWork.Repository<EnterpriseDemo.Domain.Acceptance>().Delete(Acceptance);
            await _unitOfWork.Save();

            return Unit.Value;
        }
    }
}
