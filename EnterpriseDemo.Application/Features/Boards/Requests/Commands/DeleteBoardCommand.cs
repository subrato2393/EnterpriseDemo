using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace EnterpriseDemo.Application.Features.Boards.Requests.Commands
{
    public class DeleteBoardCommand : IRequest
    {
        public int BoardId { get; set; }
    }
}
