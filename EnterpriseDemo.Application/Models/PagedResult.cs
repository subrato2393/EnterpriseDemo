﻿using System;
using System.Collections.Generic;
using System.Text;

namespace EnterpriseDemo.Application.Models
{
  public class PagedResult<T>
    {
        public List<T> Items { get; set; }
        public int TotalPages { get; set; }
        public int ItemsFrom { get; set; }
        public int ItemsTo { get; set; }
        public int TotalItemsCount { get; set; }

        public PagedResult(List<T> items,int totalCount,int pageNumber,int pageSize)
        {
            Items = items;
            TotalItemsCount = totalCount;
            ItemsFrom = pageSize * (pageNumber - 1) + 1;
            ItemsTo = ItemsFrom + pageSize - 1;
            TotalPages =(int) Math.Ceiling(totalCount / (double)pageSize);
        }
    }
}
