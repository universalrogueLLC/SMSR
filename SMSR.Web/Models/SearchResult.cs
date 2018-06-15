using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SMSR.Web.Models
{
    public class SearchResult
    {
        public int Id { get; set; }
        public string Author { get; set; }
        public string Project { get; set; }
        public DateTime ReportDate { get; set; }
    }
}