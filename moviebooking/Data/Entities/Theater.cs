﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace moviebooking.Data.Entities
{
    public class Theater : BaseEntity
    {
       // public int Id { get; set; }
        public string Address { get; set; }
        public string Name { get; set; }

        public ICollection<Screening> Screenings { get; set; }

        public Theater()
        {
            Screenings = new List<Screening>();
        }
    }
}
