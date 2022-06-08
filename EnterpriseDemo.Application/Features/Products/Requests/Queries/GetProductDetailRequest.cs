using EnterpriseDemo.Application.DTOs.Product;
using MediatR;

namespace EnterpriseDemo.Application.Features.Products.Requests.Queries
{
    public class GetProductDetailRequest : IRequest<ProductDto>
    {
        public int ProductId { get; set; }
    }
}
