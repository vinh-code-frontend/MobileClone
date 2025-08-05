using Server.DTOs;
using Server.Models;
using Server.Utilities;

namespace Server.Interfaces
{
    public interface IAdminService
    {
        Task<ServiceResult<AdminUser>> CreateAdminAsync(AdminCreateRequestDTO dto);
    }
}
