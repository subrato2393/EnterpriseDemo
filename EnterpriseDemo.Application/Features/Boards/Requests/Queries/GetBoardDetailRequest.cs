using EnterpriseDemo.Application.DTOs;
using EnterpriseDemo.Application.DTOs.Board;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace EnterpriseDemo.Application.Features.Boards.Requests.Queries
{
    public class GetBoardDetailRequest : IRequest<BoardDto>
    {
        public int BoardId { get; set; }
    }
}
