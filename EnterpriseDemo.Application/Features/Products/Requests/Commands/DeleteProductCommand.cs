using MediatR;

namespace EnterpriseDemo.Application.Features.Products.Requests.Commands
{
    public class DeleteProductCommand : IRequest
    {
        public int ProductId { get; set; }
    }
}
