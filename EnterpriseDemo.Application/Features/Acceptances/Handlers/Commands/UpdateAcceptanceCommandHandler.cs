using AutoMapper;
using EnterpriseDemo.Application.DTOs.Acceptance.Validators;
using EnterpriseDemo.Application.Exceptions;
using EnterpriseDemo.Application.Contracts.Persistence;
using EnterpriseDemo.Domain;
using MediatR;
using EnterpriseDemo.Application.Features.Acceptances.Requests.Commands;

namespace EnterpriseDemo.Application.Features.Acceptances.Handlers.Commands
{
    public class UpdateAcceptanceCommandHandler : IRequestHandler<UpdateAcceptanceCommand, Unit>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public UpdateAcceptanceCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<Unit> Handle(UpdateAcceptanceCommand request, CancellationToken cancellationToken)
        {
            var validator = new UpdateAcceptanceDtoValidator();
            var validationResult = await validator.ValidateAsync(request.AcceptanceDto);

            if (validationResult.IsValid == false)
                throw new ValidationException(validationResult);

            var Acceptance = await _unitOfWork.Repository<EnterpriseDemo.Domain.Acceptance>().Get(request.AcceptanceDto.AcceptanceId);

            if (Acceptance is null)
                throw new NotFoundException(nameof(Acceptance), request.AcceptanceDto.AcceptanceId);

            _mapper.Map(request.AcceptanceDto, Acceptance);

            await _unitOfWork.Repository<EnterpriseDemo.Domain.Acceptance>().Update(Acceptance);
            await _unitOfWork.Save();

            return Unit.Value;
        }
    }
}
