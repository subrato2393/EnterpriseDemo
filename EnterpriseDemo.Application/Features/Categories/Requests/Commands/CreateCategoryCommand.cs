using EnterpriseDemo.Application.DTOs.Category;
using EnterpriseDemo.Application.Responses;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text; 

namespace EnterpriseDemo.Application.Features.Categories.Requests.Commands
{
    public class CreateCategoryCommand : IRequest<BaseCommandResponse>
    {
        public CreateCategoryDto CategoryDto { get; set; }

    }
}
