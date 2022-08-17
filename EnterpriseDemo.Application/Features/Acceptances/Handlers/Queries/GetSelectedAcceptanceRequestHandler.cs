using MediatR;
using EnterpriseDemo.Application.Contracts.Persistence;
using EnterpriseDemo.Domain;
using EnterpriseDemo.Shared.Models;
using EnterpriseDemo.Application.Features.Acceptances.Requests.Queries;

namespace EnterpriseDemo.Application.Features.Acceptances.Handlers.Queries
{
    public class GetSelectedAcceptanceRequestHandler : IRequestHandler<GetSelectedAcceptanceRequest, List<SelectedModel>>
    {
        private readonly IEnterpriseDemoRepository<EnterpriseDemo.Domain.Acceptance> _AcceptanceRepository;


        public GetSelectedAcceptanceRequestHandler(IEnterpriseDemoRepository<EnterpriseDemo.Domain.Acceptance> AcceptanceRepository)
        {
            _AcceptanceRepository = AcceptanceRepository;
        } 

        public async Task<List<SelectedModel>> Handle(GetSelectedAcceptanceRequest request, CancellationToken cancellationToken)
        {
            ICollection<EnterpriseDemo.Domain.Acceptance> Acceptances = await _AcceptanceRepository.FilterAsync(x => x.AcceptanceId>0);
            List<SelectedModel> selectModels = Acceptances.Select(x => new SelectedModel
            {
                Text = x.Name, 
                Value = x.AcceptanceId
            }).ToList();
            return selectModels;
        }
    }
}
