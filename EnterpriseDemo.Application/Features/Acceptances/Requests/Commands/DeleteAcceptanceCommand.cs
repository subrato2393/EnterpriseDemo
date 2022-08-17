using MediatR;

namespace EnterpriseDemo.Application.Features.Acceptances.Requests.Commands
{
    public class DeleteAcceptanceCommand : IRequest
    {
        public int AcceptanceId { get; set; }
    }
}
