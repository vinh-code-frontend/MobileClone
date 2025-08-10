using Server.Models;

namespace Server.Interfaces
{
    public interface IJwtService
    {
        string GenerateAdminUserToken(AdminUser user, string origin);
    }
}
