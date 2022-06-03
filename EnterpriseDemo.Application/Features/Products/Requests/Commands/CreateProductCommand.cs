using EnterpriseDemo.Application.DTOs.Product;
using EnterpriseDemo.Application.Responses;
using MediatR;

namespace EnterpriseDemo.Application.Features.Products.Requests.Commands
{
    public class CreateProductCommand : IRequest<BaseCommandResponse>
    {
        public CreateProductDto ProductDto { get; set; }

    }
}
