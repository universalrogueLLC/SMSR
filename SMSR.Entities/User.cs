namespace SMSR.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string DN { get; set; }
        public bool IsAuthor { get; set; }
        public bool IsAdmin { get; set; }
        public bool IsActive { get; set; }

        public void CopyPropertiesFrom(User user)
        {
            this.DN = user.DN;
            this.Id = user.Id;
            this.IsActive = user.IsActive;
            this.IsAdmin = user.IsAdmin;
            this.IsAuthor = user.IsAuthor;
            this.Name = user.Name;
        }
    }
}
