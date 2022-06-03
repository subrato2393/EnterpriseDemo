using MediatR;
using EnterpriseDemo.Shared.Models;

namespace EnterpriseDemo.Application.Features.Products.Requests.Queries
{
    public class GetSelectedProductRequest : IRequest<List<SelectedModel>>
    {
    }
}
 