using MediatR;
using EnterpriseDemo.Shared.Models;
using System;
using System.Collections.Generic;
using System.Text; 

namespace EnterpriseDemo.Application.Features.Categories.Requests.Queries
{
    public class GetSelectedCategoryRequest : IRequest<List<SelectedModel>>
    {
    }
}
