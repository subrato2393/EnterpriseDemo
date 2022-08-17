using MediatR;
using EnterpriseDemo.Shared.Models;

namespace EnterpriseDemo.Application.Features.Acceptances.Requests.Queries
{
    public class GetSelectedAcceptanceRequest : IRequest<List<SelectedModel>>
    {
    }
}
 