using EnterpriseDemo.Application.DTOs.Board;
using EnterpriseDemo.Application.Responses;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace EnterpriseDemo.Application.Features.Boards.Requests.Commands
{
    public class CreateBoardCommand : IRequest<BaseCommandResponse>
    {
        public CreateBoardDto BoardDto { get; set; }

    }
}
