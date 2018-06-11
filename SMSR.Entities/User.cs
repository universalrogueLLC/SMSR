namespace SMSR.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string DN { get; set; }
        public bool IsAuthor { get; set; }
        public bool IsAdmin { get; set; }
    }
}
