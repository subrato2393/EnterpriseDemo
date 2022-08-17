using EnterpriseDemo.Application.DTOs.Acceptance;
using MediatR;
using EnterpriseDemo.Application.DTOs.Common;
using EnterpriseDemo.Application.Models;

namespace EnterpriseDemo.Application.Features.Acceptances.Requests.Queries
{
    public class GetAcceptanceListRequest : IRequest<PagedResult<AcceptanceDto>>
    {
        public QueryParams QueryParams { get; set; }
    }
}
