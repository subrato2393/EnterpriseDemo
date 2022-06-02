using EnterpriseDemo.Application.DTOs;
using EnterpriseDemo.Application.DTOs.Board;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using EnterpriseDemo.Application.DTOs.Common;
using EnterpriseDemo.Application.Models;

namespace EnterpriseDemo.Application.Features.Boards.Requests.Queries
{
    public class GetBoardListRequest : IRequest<PagedResult<BoardDto>>
    {
        public QueryParams QueryParams { get; set; }
    }
}
