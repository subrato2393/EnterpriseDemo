using MediatR;
using EnterpriseDemo.Shared.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace EnterpriseDemo.Application.Features.Boards.Requests.Queries
{
    public class GetSelectedBoardRequest : IRequest<List<SelectedModel>>
    {
    }
}
