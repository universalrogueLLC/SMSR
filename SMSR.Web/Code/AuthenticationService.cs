using System.Configuration;

namespace SMSR.Web.Code
{
    public class AuthenticationService
    {
        public static string GetDN()
        {
            var environment = ConfigurationManager.AppSettings["Environment"];
            if (environment == "DEV")
            {
                return "CN=Test User";
            }
            else
            {
                // TODO: implement
                return string.Empty;
            }
        }
    }
}