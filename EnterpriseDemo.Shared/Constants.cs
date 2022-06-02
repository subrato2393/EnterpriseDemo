﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EnterpriseDemo.Shared
{
    public static class Constants
    {
        public static class ApiRoutePrefix
        {
            public const string RoutePrefixBase = "api/";
            public const string Images = RoutePrefixBase + "image";
        }

        public static class DataCashe
        {
            public const string RoleFeaturs = "district-get-district-select-model";
        }
    }
}
