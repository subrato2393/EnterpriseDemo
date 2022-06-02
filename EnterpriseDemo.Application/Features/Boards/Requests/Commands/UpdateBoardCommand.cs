using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using EnterpriseDemo.Application.DTOs.Board;

namespace EnterpriseDemo.Application.Features.Boards.Requests.Commands
{
    public class UpdateBoardCommand : IRequest<Unit>
    {
        public BoardDto BoardDto { get; set; } 

    }
}
