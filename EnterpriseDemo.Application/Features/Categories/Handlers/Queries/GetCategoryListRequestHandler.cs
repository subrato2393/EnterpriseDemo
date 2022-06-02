using AutoMapper;
using EnterpriseDemo.Application.DTOs.Category;
using EnterpriseDemo.Application.Contracts.Persistence;
using MediatR;
using EnterpriseDemo.Application.Models;
using EnterpriseDemo.Application.DTOs.Common.Validators;
using EnterpriseDemo.Application.Exceptions;
using EnterpriseDemo.Application.Features.Categories.Requests.Queries;

namespace EnterpriseDemo.Application.Features.Categories.Handlers.Queries
{
    public class GetCategoryListRequestHandler : IRequestHandler<GetCategoryListRequest, PagedResult<CategoryDto>>
    {

        private readonly IEnterpriseDemoRepository<EnterpriseDemo.Domain.Category> _CategoryRepository;

        private readonly IMapper _mapper;

        public GetCategoryListRequestHandler(IEnterpriseDemoRepository<EnterpriseDemo.Domain.Category> CategoryRepository, IMapper mapper)
        {
            _CategoryRepository = CategoryRepository;
            _mapper = mapper;
        }

        public async Task<PagedResult<CategoryDto>> Handle(GetCategoryListRequest request, CancellationToken cancellationToken)
        {
            var validator = new QueryParamsValidator();
            var validationResult = await validator.ValidateAsync(request.QueryParams);

            if (validationResult.IsValid == false)
                throw new ValidationException(validationResult);

            IQueryable<EnterpriseDemo.Domain.Category> Categorys = _CategoryRepository.FilterWithInclude(x => (x.Name.Contains(request.QueryParams.SearchText) || String.IsNullOrEmpty(request.QueryParams.SearchText)));
            var totalCount = Categorys.Count();
            Categorys = Categorys.OrderByDescending(x => x.CategoryId).Skip((request.QueryParams.PageNumber - 1) * request.QueryParams.PageSize).Take(request.QueryParams.PageSize);

            var CategoryDtos = _mapper.Map<List<CategoryDto>>(Categorys);
            var result = new PagedResult<CategoryDto>(CategoryDtos, totalCount, request.QueryParams.PageNumber, request.QueryParams.PageSize);

            return result;


        }
    }
}
