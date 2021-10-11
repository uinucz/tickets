using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace moviebooking.Data.Entities
{
    public class Movie : BaseEntity
    {
        //public int Id { get; set; }
        public string Name { get; set; }
        public string Body { get; set; }
        public string Dir { get; set; }
        public string Pic { get; set; }

        public ICollection<Screening> Screenings { get; set; }

        public Movie()
        {
            Screenings = new List<Screening>();
        }
    }
}
