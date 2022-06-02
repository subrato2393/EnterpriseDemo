using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using EnterpriseDemo.Application.DTOs.Category;

namespace EnterpriseDemo.Application.Features.Categories.Requests.Commands
{ 
    public class UpdateCategoryCommand : IRequest<Unit>
    {
        public CategoryDto CategoryDto { get; set; } 

    }
}
