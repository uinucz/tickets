using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace moviebooking.Data.Entities
{
    public class Booking : BaseEntity
    {
        //public int Id { get; set; }
        public User User { get; set; }
        public Screening Screening { get; set; }
        public int Seat { get; set; }


    }
}
