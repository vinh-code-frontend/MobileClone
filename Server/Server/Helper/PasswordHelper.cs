using Microsoft.AspNetCore.Identity;

namespace Server.Helper
{
    public class PasswordHelper
    {
        public static string HashAdminPassword(string plainPassword, string username)
        {
            var hasher = new PasswordHasher<string>();

            return hasher.HashPassword(username, plainPassword);
        }
        public static bool VerifyHashedPassword(string inputPassword, string storedHashedPassword, string username)
        {
            var hasher = new PasswordHasher<string>();

            var result = hasher.VerifyHashedPassword(username, storedHashedPassword, inputPassword);

            if (result == PasswordVerificationResult.Success)
            {
                return true;
            }
            return false;
        }
    }
}
