using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace moviebooking.Data.Entities
{
    public class User : IdentityUser 
    {
        public override string Id { get; set; }

        public ICollection<Booking> Bookings { get; set; }

        public User()
        {
            Bookings = new List<Booking>();

        }
    }
}
