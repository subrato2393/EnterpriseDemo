namespace EnterpriseDemo.Application.DTOs.Acceptance
{ 
    public class CreateAcceptanceListDto 
    { 
        public int? CategoryId { get; set; }
        public List<AcceptanceListDto> ProductList { get; set; }
    }
}
