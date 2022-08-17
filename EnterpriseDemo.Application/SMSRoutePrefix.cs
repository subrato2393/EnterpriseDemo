using static EnterpriseDemo.Shared.Constants;

namespace EnterpriseDemo.Application
{
    public static class SMSRoutePrefix  
    {
        private const string SMSRoutePrefixBase = ApiRoutePrefix.RoutePrefixBase + "sms/";
        public const string Board = SMSRoutePrefixBase + "board"; 
        public const string Category = SMSRoutePrefixBase + "category";
        public const string Product = SMSRoutePrefixBase + "product";
        public const string Acceptance = SMSRoutePrefixBase + "acceptance";
    }
}
  
 