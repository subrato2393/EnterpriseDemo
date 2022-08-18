namespace EnterpriseDemo.Application.DTOs.Acceptance
{
    public class AcceptanceListDto
    {
       public int AcceptanceId { get; set; }
        public string? Name { get; set; }
        public string? Code { get; set; }
        public string? Qty { get; set; }
        public string? Price { get; set; } 
        public string? CategoryName { get; set; }
        public string? AcceptanceName { get; set; }
        public object? IsActive { get; set; }
    }
}
