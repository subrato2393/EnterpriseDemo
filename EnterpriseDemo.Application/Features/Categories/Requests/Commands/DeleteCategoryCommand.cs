using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace EnterpriseDemo.Application.Features.Categories.Requests.Commands
{
    public class DeleteCategoryCommand : IRequest 
    {
        public int CategoryId { get; set; }
    }
}
