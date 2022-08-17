namespace EnterpriseDemo.Application.DTOs.Acceptance
{
    public class CreateAcceptanceListDto : IAcceptanceDto
    {
        public int AcceptanceId { get; set; }
        public int? CategoryId { get; set; }
        public string? AcceptanceName { get; set; }
        public string? Name { get; set; }
        public string? Code { get; set; }
        public int? Qty { get; set; }
        public string? Price { get; set; }
        public bool? IsActive { get; set; }
    }
}
