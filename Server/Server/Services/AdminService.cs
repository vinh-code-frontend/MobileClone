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
        public AdminService(AppDbContext context)
        {
            _context = context;
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
            string hashedPassword = PasswordHelper.HashAdminPassword(newAdmin.Username, newAdmin);

            newAdmin.HashedPassword = hashedPassword;
            await _context.AdminUsers.AddAsync(newAdmin);
            await _context.SaveChangesAsync();

            return ServiceResult<AdminUser>.Success(newAdmin, "Admin created successfully");
        }
    }
}
