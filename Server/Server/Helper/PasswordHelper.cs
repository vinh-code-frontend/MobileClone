using Microsoft.AspNetCore.Identity;
using Server.Models;

namespace Server.Helper
{
    public class PasswordHelper
    {
        public static string HashAdminPassword(string plainPassword, AdminUser adminUser)
        {
            var hasher = new PasswordHasher<AdminUser>();
            var user = new AdminUser()
            {
                Username = adminUser.Username,
                Id = adminUser.Id,
            };
            return hasher.HashPassword(user, plainPassword);
        }
    }
}
