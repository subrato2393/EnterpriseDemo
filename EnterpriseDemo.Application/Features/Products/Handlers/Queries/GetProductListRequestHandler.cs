using AutoMapper;
using EnterpriseDemo.Application.DTOs.Product;
using EnterpriseDemo.Application.Features.Products.Requests.Queries;
using EnterpriseDemo.Application.Contracts.Persistence;
using MediatR;
using EnterpriseDemo.Application.Models;
using EnterpriseDemo.Application.DTOs.Common.Validators;
using EnterpriseDemo.Application.Exceptions;

namespace EnterpriseDemo.Application.Features.Products.Handlers.Queries
{
    public class GetProductListRequestHandler : IRequestHandler<GetProductListRequest, PagedResult<ProductDto>>
    {

        private readonly IEnterpriseDemoRepository<EnterpriseDemo.Domain.Product> _ProductRepository;

        private readonly IMapper _mapper;

        public GetProductListRequestHandler(IEnterpriseDemoRepository<EnterpriseDemo.Domain.Product> ProductRepository, IMapper mapper)
        {
            _ProductRepository = ProductRepository;
            _mapper = mapper;
        }

        public async Task<PagedResult<ProductDto>> Handle(GetProductListRequest request, CancellationToken cancellationToken)
        {
            var validator = new QueryParamsValidator();
            var validationResult = await validator.ValidateAsync(request.QueryParams);

            if (validationResult.IsValid == false)
                throw new ValidationException(validationResult);

            IQueryable<EnterpriseDemo.Domain.Product> Products = _ProductRepository.FilterWithInclude(x => (x.Name.Contains(request.QueryParams.SearchText) || String.IsNullOrEmpty(request.QueryParams.SearchText)));
            var totalCount = Products.Count();
            Products = Products.OrderByDescending(x => x.ProductId).Skip((request.QueryParams.PageNumber - 1) * request.QueryParams.PageSize).Take(request.QueryParams.PageSize);

            var ProductDtos = _mapper.Map<List<ProductDto>>(Products);
            var result = new PagedResult<ProductDto>(ProductDtos, totalCount, request.QueryParams.PageNumber, request.QueryParams.PageSize);

            return result;


        }
    }
}
