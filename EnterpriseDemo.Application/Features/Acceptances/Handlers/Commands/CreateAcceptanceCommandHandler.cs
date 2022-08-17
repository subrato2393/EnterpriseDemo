using AutoMapper;
using EnterpriseDemo.Application.DTOs.Acceptance.Validators;
using EnterpriseDemo.Application.Contracts.Persistence;
using EnterpriseDemo.Domain;
using MediatR;
using EnterpriseDemo.Application.Responses;
using EnterpriseDemo.Application.Features.Acceptances.Requests.Commands;

namespace EnterpriseDemo.Application.Features.Acceptances.Handlers.Commands
{
    public class CreateAcceptanceCommandHandler : IRequestHandler<CreateAcceptanceCommand, BaseCommandResponse>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public CreateAcceptanceCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<BaseCommandResponse> Handle(CreateAcceptanceCommand request, CancellationToken cancellationToken)
        {
            var response = new BaseCommandResponse();
            var AcceptanceList = request.AcceptanceListDto;

            //var Acceptances = AcceptanceList.Acceptance.Select(x => new Acceptance()
            //{
            //    CategoryId=AcceptanceList.CategoryId,
            //    AcceptanceId = AcceptanceList.AcceptanceId.Value,
            //    Code = x.Code,
            //    Name=x.Name,
            //    Price=x.Price,
            //    Qty=x.Qty,
            //    Status=0
            //});

            //await _unitOfWork.Repository<Acceptance>().AddRangeAsync(Acceptances);
            //await _unitOfWork.Save();

            return response;
        }
    }
}
