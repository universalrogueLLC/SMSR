using System;
using System.Collections.Generic;

namespace SMSR.Entities
{
    public class StatusReport
    {
        public int Id { get; set; }
        public DateTime ReportDate { get; set; }

        public int ProjectId { get; set; }
        public virtual Project Project { get; set; }

        public int UserId { get; set; }
        public virtual User User { get; set; }

        public virtual List<StatusReportEntry> Entries { get; set; }

        public StatusReport()
        {
            this.Entries = new List<StatusReportEntry>();
        }
    }
}
