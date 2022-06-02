using EnterpriseDemo.Application.DTOs;
using EnterpriseDemo.Application.DTOs.Category;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using EnterpriseDemo.Application.DTOs.Common;
using EnterpriseDemo.Application.Models;

namespace EnterpriseDemo.Application.Features.Categories.Requests.Queries
{
    public class GetCategoryListRequest : IRequest<PagedResult<CategoryDto>>
    {
        public QueryParams QueryParams { get; set; }
    }
}
