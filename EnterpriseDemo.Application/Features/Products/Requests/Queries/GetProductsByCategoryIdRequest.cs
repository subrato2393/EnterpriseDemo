using MediatR;
using EnterpriseDemo.Application.DTOs.Product;

namespace EnterpriseDemo.Application.Features.Products.Requests.Queries
{
    public class GetProductsByCategoryIdRequest : IRequest<List<ProductDto>>
    {
        public int? CategoryId { get; set; } 
    }
}
  