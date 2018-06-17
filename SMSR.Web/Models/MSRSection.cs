using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SMSR.Web.Models
{
    public class MSRSection
    {
        public string Name { get; set; }
        public List<string> Entries { get; set; }

        public MSRSection()
        {
            this.Entries = new List<string>();
        }
    }
}