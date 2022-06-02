﻿using System;
using System.Collections.Generic;
using System.Text;

namespace EnterpriseDemo.Application.DTOs.Common
{
   public class QueryParams
    {
        public string? SearchText { get; set; }
        public int PageSize { get; set; }
        public int PageNumber { get; set; }
    }
}
