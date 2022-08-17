using EnterpriseDemo.Application.DTOs.Acceptance;
using MediatR;

namespace EnterpriseDemo.Application.Features.Acceptances.Requests.Queries
{
    public class GetAcceptanceDetailRequest : IRequest<AcceptanceDto>
    {
        public int AcceptanceId { get; set; }
    }
}
