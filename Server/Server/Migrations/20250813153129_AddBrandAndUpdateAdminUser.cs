using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Server.Migrations
{
    /// <inheritdoc />
    public partial class AddBrandAndUpdateAdminUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PhotoUrl",
                table: "AdminUsers",
                newName: "PhotoData");

            migrationBuilder.AddColumn<string>(
                name: "PhotoFileName",
                table: "AdminUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhotoMimeType",
                table: "AdminUsers",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PhotoFileName",
                table: "AdminUsers");

            migrationBuilder.DropColumn(
                name: "PhotoMimeType",
                table: "AdminUsers");

            migrationBuilder.RenameColumn(
                name: "PhotoData",
                table: "AdminUsers",
                newName: "PhotoUrl");
        }
    }
}
