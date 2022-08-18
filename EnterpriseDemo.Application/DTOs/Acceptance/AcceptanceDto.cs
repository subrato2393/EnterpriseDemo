namespace EnterpriseDemo.Application.DTOs.Acceptance
{
    public class AcceptanceDto
    {
        public int AcceptanceId { get; set; }
        public string? Name { get; set; }
        public string? Code { get; set; }
        public int? Qty { get; set; }
        public double? Price { get; set; } 
        public int? Status { get; set; } 
        public int? CategoryId { get; set; }
        public string? CategoryName { get; set; }
    }
}
