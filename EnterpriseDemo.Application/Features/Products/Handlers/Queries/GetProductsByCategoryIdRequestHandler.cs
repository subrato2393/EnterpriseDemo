using MediatR;
using EnterpriseDemo.Application.Contracts.Persistence;
using EnterpriseDemo.Application.Features.Products.Requests.Queries;
using EnterpriseDemo.Domain;
using EnterpriseDemo.Shared.Models;
using EnterpriseDemo.Application.DTOs.Product;
using AutoMapper;

namespace EnterpriseDemo.Application.Features.Products.Handlers.Queries
{
    public class GetProductsByCategoryIdRequestHandler : IRequestHandler<GetProductsByCategoryIdRequest, List<ProductDto>>
    {
        private readonly IEnterpriseDemoRepository<Product> _productRepository;
        private readonly IMapper _mapper;

        public GetProductsByCategoryIdRequestHandler(
            IEnterpriseDemoRepository<Product> productRepository,
            IMapper mapper)
        {
            _productRepository = productRepository;
            _mapper = mapper;
        } 

        public async Task<List<ProductDto>> Handle(GetProductsByCategoryIdRequest request, CancellationToken cancellationToken)
        { 
            var products = _productRepository.FilterWithInclude(x => x.CategoryId == request.CategoryId && x.Status == 0, "Category").ToList();
            var productDtos = _mapper.Map<List<ProductDto>>(products);

            return productDtos;
        }
    }
}
