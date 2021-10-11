using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace moviebooking.Data.Entities
{
    public class Screening : BaseEntity
    {
       // public int Id { get; set; }
        public Theater Theater { get; set; }
        public Movie Movie { get; set; }
        public DateTime Time { get; set; }

        public ICollection<Booking> Bookings { get; set; }

        public Screening()
        {
            Bookings = new List<Booking>();
        }
    }
}
