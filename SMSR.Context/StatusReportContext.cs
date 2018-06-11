using SMSR.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SMSR.Context
{
    public class StatusReportContext : DbContext
    {
        public DbSet<StatusReport> StatusReports { get; set; }
        public DbSet<StatusReportEntry> StatusReportEntries { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<EntryType> EntryTypes { get; set; }
        public DbSet<Project> Projects { get; set; }

        public StatusReportContext(): base("name=SMSRDatabase")
        {
        }
    }
}
