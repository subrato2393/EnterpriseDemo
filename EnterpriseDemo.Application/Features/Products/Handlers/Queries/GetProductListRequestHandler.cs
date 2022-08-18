using AutoMapper;
using EnterpriseDemo.Application.DTOs.Product;
using EnterpriseDemo.Application.Features.Products.Requests.Queries;
using EnterpriseDemo.Application.Contracts.Persistence;
using MediatR;
using EnterpriseDemo.Application.Models;
using EnterpriseDemo.Application.DTOs.Common.Validators;
using EnterpriseDemo.Application.Exceptions;
using EnterpriseDemo.Domain;

namespace EnterpriseDemo.Application.Features.Products.Handlers.Queries
{
    public class GetProductListRequestHandler : IRequestHandler<GetProductListRequest, PagedResult<ProductDto>>
    {

        private readonly IEnterpriseDemoRepository<Product> _productRepository;

        private readonly IMapper _mapper;

        public GetProductListRequestHandler(IEnterpriseDemoRepository<Product> productRepository, IMapper mapper)
        {
            _productRepository = productRepository;
            _mapper = mapper;
        }

        public async Task<PagedResult<ProductDto>> Handle(GetProductListRequest request, CancellationToken cancellationToken)
        {
            var validator = new QueryParamsValidator();
            var validationResult = await validator.ValidateAsync(request.QueryParams);

            if (validationResult.IsValid == false)
                throw new ValidationException(validationResult); 

            IQueryable<Product> products = _productRepository.FilterWithInclude(x => (x.Name.Contains(request.QueryParams.SearchText) || String.IsNullOrEmpty(request.QueryParams.SearchText)), "Category");
            var totalCount = products.Count();
            products = products.OrderByDescending(x => x.ProductId).Skip((request.QueryParams.PageNumber - 1) * request.QueryParams.PageSize).Take(request.QueryParams.PageSize);

            var productDtos = _mapper.Map<List<ProductDto>>(products);
            var result = new PagedResult<ProductDto>(productDtos, totalCount, request.QueryParams.PageNumber, request.QueryParams.PageSize);

            return result;


        }
    }
}
