using EnterpriseDemo.Application.DTOs.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace EnterpriseDemo.Application.DTOs.Board
{
    public class BoardDto : IBoardDto
    {
        public int BoardId { get; set; }
        public string BoardName { get; set; } = null!;
        public int? MenuPosition { get; set; }
        public bool IsActive { get; set; }
    }
}
