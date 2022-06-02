using EnterpriseDemo.Application.DTOs;
using EnterpriseDemo.Application.DTOs.Category;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace EnterpriseDemo.Application.Features.Categories.Requests.Queries
{ 
    public class GetCategoryDetailRequest : IRequest<CategoryDto>
    {
        public int CategoryId { get; set; }
    }
}
