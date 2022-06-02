using EnterpriseDemo.Domain.Common;

namespace EnterpriseDemo.Domain
{
    public class Board : BaseDomainEntity
    {
        public Board()
        {

        }

        public int BoardId { get; set; }
        public string BoardName { get; set; } = null!;
        public int? MenuPosition { get; set; }
        public bool IsActive { get; set; }
    }
}
