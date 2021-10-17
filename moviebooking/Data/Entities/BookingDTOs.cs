using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace moviebooking.Data.Entities
{
    public class BookingDTOs
    {
        public class BookingDTOforScreening
        {
            public Guid ScreeningId { get; set; }
            public string UserId { get; set; }
            public int Seat { get; set; }

        }

        public class BookingDTOforUser { 
        
            public int Seat { get; set; }
            public Guid BookingId { get; set; }
            public Guid ScreeningId { get; set; }
            public string TheaterName { get; set; }
            public string TheaterAddress { get; set; }
            public string MovieName { get; set; }
            public string Image { get; set; }
            public DateTime Time { get; set; }
            
        }
    }
}
