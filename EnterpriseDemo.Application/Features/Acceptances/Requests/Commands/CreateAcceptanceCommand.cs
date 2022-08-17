using EnterpriseDemo.Application.DTOs.Acceptance;
using EnterpriseDemo.Application.Responses;
using MediatR;

namespace EnterpriseDemo.Application.Features.Acceptances.Requests.Commands
{
    public class CreateAcceptanceCommand : IRequest<BaseCommandResponse>
    {
        public CreateAcceptanceListDto? AcceptanceListDto { get; set; }

    }
}
