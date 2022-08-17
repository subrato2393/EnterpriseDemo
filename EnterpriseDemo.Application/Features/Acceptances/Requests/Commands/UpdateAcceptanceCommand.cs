using MediatR;
using EnterpriseDemo.Application.DTOs.Acceptance;

namespace EnterpriseDemo.Application.Features.Acceptances.Requests.Commands
{
    public class UpdateAcceptanceCommand : IRequest<Unit>
    {
        public AcceptanceDto AcceptanceDto { get; set; } 

    }
}
