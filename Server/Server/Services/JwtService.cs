using Microsoft.IdentityModel.Tokens;
using Server.Interfaces;
using Server.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Server.Services
{
    public class JwtService : IJwtService
    {
        private readonly IConfiguration _configuration;
        public JwtService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string GenerateAdminUserToken(AdminUser user, string origin)
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim("username", user.Username),
                new Claim(ClaimTypes.Role, user.Role)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]!));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            double expiresInHours = double.Parse(_configuration["Jwt:ExpiresInHours"]!);

            var audiences = _configuration.GetSection("Jwt:Audiences").Get<string[]>();
            var audience = audiences != null && audiences.Length > 0 ? audiences[0] : throw new InvalidOperationException("No audiences configured");

            JwtSecurityToken token = new JwtSecurityToken(
                issuer: origin,
                audience: audience,
                claims: claims,
                expires: DateTime.UtcNow.AddHours(expiresInHours),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
