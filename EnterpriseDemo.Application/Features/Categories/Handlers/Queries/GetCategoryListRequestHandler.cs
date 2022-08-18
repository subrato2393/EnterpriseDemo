using AutoMapper;
using EnterpriseDemo.Application.DTOs.Category;
using EnterpriseDemo.Application.Contracts.Persistence;
using MediatR;
using EnterpriseDemo.Application.Models;
using EnterpriseDemo.Application.DTOs.Common.Validators;
using EnterpriseDemo.Application.Exceptions;
using EnterpriseDemo.Application.Features.Categories.Requests.Queries;
using EnterpriseDemo.Domain;

namespace EnterpriseDemo.Application.Features.Categories.Handlers.Queries
{
    public class GetCategoryListRequestHandler : IRequestHandler<GetCategoryListRequest, PagedResult<CategoryDto>>
    {

        private readonly IEnterpriseDemoRepository<Category> _categoryRepository;

        private readonly IMapper _mapper; 

        public GetCategoryListRequestHandler(IEnterpriseDemoRepository<Category> categoryRepository, IMapper mapper)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;
        }

        public async Task<PagedResult<CategoryDto>> Handle(GetCategoryListRequest request, CancellationToken cancellationToken)
        {
            var validator = new QueryParamsValidator();
            var validationResult = await validator.ValidateAsync(request.QueryParams);

            if (validationResult.IsValid == false)
                throw new ValidationException(validationResult);

            IQueryable<Category> catogories = _categoryRepository.FilterWithInclude(x => (x.Name.Contains(request.QueryParams.SearchText) || String.IsNullOrEmpty(request.QueryParams.SearchText)));
            var totalCount = catogories.Count();
            catogories = catogories.OrderByDescending(x => x.CategoryId).Skip((request.QueryParams.PageNumber - 1) * request.QueryParams.PageSize).Take(request.QueryParams.PageSize);

            var categoryDtos = _mapper.Map<List<CategoryDto>>(catogories);
            var result = new PagedResult<CategoryDto>(categoryDtos, totalCount, request.QueryParams.PageNumber, request.QueryParams.PageSize);

            return result;


        }
    }
}
