using AutoMapper;
using EnterpriseDemo.Application.Contracts.Persistence;
using MediatR;
using EnterpriseDemo.Application.Responses;
using EnterpriseDemo.Application.Features.Acceptances.Requests.Commands;
using EnterpriseDemo.Domain;

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

            var Acceptances = AcceptanceList.ProductList.Select(x => new Acceptance()
            {
                CategoryId =2 ,
                AcceptanceId = x.AcceptanceId,
                Code = x.Code,
                Name = x.Name,
                Price = x.Price,
                AcceptanceName =x.AcceptanceName,
                
                //Qty = x.Qty,
                //IsActive = x.IsActive,

            });

            await _unitOfWork.Repository<Acceptance>().AddRangeAsync(Acceptances);
            try
            {
                await _unitOfWork.Save();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }

            return response;
        }
    }
}
