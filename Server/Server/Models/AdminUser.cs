using Server.Constants;

namespace Server.Models
{
    public class AdminUser
    {
        public Guid Id { get; set; }
        public required string Username { get; set; }
        public string? HashedPassword { get; set; }
        public string? Name { get; set; }
        public string Status { get; set; } = AdminStatus.Pending;
        public string? LoginProvider { get; set; } = AdminLoginProvider.Local;
        public string? ProviderUserId { get; set; }
        public bool IsConfirmedByGlobalAdmin { get; set; }
        public string Role { get; set; } = AdminRoles.Admin;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? ConfirmedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
