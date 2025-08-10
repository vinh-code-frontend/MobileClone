using Microsoft.EntityFrameworkCore;
using Server.Constants;
using Server.Data;
using Server.DTOs;
using Server.Helper;
using Server.Interfaces;
using Server.Models;
using Server.Utilities;
using System.Net;

namespace Server.Services
{
    public class AdminService : IAdminService
    {
        private readonly AppDbContext _context;
        private readonly IJwtService _jwtService;
        private readonly IConfiguration _configuration;
        public AdminService(AppDbContext context, IJwtService jwtService, IConfiguration configuration)
        {
            _context = context;
            _jwtService = jwtService;
            _configuration = configuration;
        }
        public async Task<ServiceResult<AdminUser>> CreateAdminAsync(AdminCreateRequestDTO dto)
        {
            if (string.IsNullOrWhiteSpace(dto.Username))
            {
                return ServiceResult<AdminUser>.Fail("User name is required", HttpStatusCode.BadRequest);
            }

            string normalizedUsername = dto.Username.ToLower().Trim();

            bool isAdminExisted = await _context.AdminUsers.AnyAsync(temp => temp.Username == dto.Username);
            if (isAdminExisted)
            {
                return ServiceResult<AdminUser>.Fail("Username already exists", HttpStatusCode.Conflict);
            }
            var newAdmin = new AdminUser
            {
                Id = Guid.NewGuid(),
                Username = normalizedUsername,
                Name = dto.Name?.Trim(),
                Status = dto.Status ?? AdminStatus.Pending,
                LoginProvider = dto.LoginProvider ?? AdminLoginProvider.Local,
                Role = dto.Role ?? AdminRoles.Admin,
                AcceptedBy = dto.AcceptedBy,
                IsAcceptedByGlobalAdmin = dto.AcceptedBy != null,
                AcceptedAt = dto.AcceptedBy != null ? DateTime.UtcNow : null,
                CreatedAt = DateTime.UtcNow
            };
            string hashedPassword = PasswordHelper.HashAdminPassword(normalizedUsername, normalizedUsername);

            newAdmin.HashedPassword = hashedPassword;
            await _context.AdminUsers.AddAsync(newAdmin);
            await _context.SaveChangesAsync();

            return ServiceResult<AdminUser>.Success(newAdmin, "Admin created successfully");
        }

        public async Task<ServiceResult<AdminLoginResponseDTO>> LoginAsync(AdminLoginRequestDTO dto)
        {
            if (string.IsNullOrWhiteSpace(dto.Password) || string.IsNullOrWhiteSpace(dto.Username))
            {
                return ServiceResult<AdminLoginResponseDTO>.Fail("Username and Password are required", HttpStatusCode.BadRequest);
            }
            if (string.IsNullOrWhiteSpace(dto.Origin))
            {
                return ServiceResult<AdminLoginResponseDTO>.Fail("Can't recognize", HttpStatusCode.BadRequest);
            }

            string normalizedUsername = dto.Username.ToLower().Trim();

            var admin = await _context.AdminUsers.FirstOrDefaultAsync(temp => temp.Username == dto.Username);
            if (admin == null)
            {
                return ServiceResult<AdminLoginResponseDTO>.Fail("Incorrect Username or Password", HttpStatusCode.BadRequest);
            }

            if (!PasswordHelper.VerifyHashedPassword(dto.Password, admin.HashedPassword!, normalizedUsername))
            {
                return ServiceResult<AdminLoginResponseDTO>.Fail("Incorrect Username or Password", HttpStatusCode.BadRequest);
            }

            if (admin.Status != AdminStatus.Inactive && admin.Status != AdminStatus.Active)
            {
                return ServiceResult<AdminLoginResponseDTO>.Fail("Your account is out of permission", HttpStatusCode.Forbidden);
            }

            var response = new AdminLoginResponseDTO
            {
                Id = admin.Id,
                Username = admin.Username,
                Name = admin.Name,
                Role = admin.Role,
                Status = admin.Status,
                LoginProvider = admin.LoginProvider,
                AccessToken = _jwtService.GenerateAdminUserToken(admin, dto.Origin),
                ExpiresInHours = double.Parse(_configuration["Jwt:ExpiresInHours"]!)
            };

            return ServiceResult<AdminLoginResponseDTO>.Success(response, "Login successfully");
        }
    }
}
