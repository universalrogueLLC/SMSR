namespace SMSR.Entities
{
    public class StatusReportEntry
    {
        public int Id { get; set; }
        public string Value { get; set; }
        public string Notes { get; set; }

        public int EntryTypeId { get; set; }
        public virtual EntryType EntryType { get; set; }

        public int StatusReportId { get; set; }
        public virtual StatusReport StatusReport { get; set; }
    }
}
