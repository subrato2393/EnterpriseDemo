namespace EnterpriseDemo.Application.DTOs.Acceptance
{
    public class AcceptanceListDto
    {
        public int AcceptanceId { get; set; }
        public string? Name { get; set; }
        public string? Code { get; set; }
        public int? Qty { get; set; }
        public double? Price { get; set; } 
        public string? CategoryName { get; set; }
        public string? AcceptanceName { get; set; }
        public bool? IsActive { get; set; }
    }
}
