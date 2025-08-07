namespace Server.Constants
{
    public static class AdminStatus
    {
        public const string Pending = "Pending";
        public const string Active = "Active";
        public const string Inactive = "Inactive"; //temp: timer job every week to change the status from active to inactive
        public const string Banned = "Banned";
        public const string Deleted = "Deleted";

        public static readonly string[] AllStatuses = { Pending, Active, Inactive, Banned, Deleted };
    }
}