using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace moviebooking.Data.Entities
{
    public class MovieDTO1
    {
        public string Name { get; set; }
        public string Body { get; set; }
        public string Dir { get; set; }
        public string Pic { get; set; }
        public List<ScreeningDTO1> Screenings { get; set; }
    }

    public class ScreeningDTO1
    {
        public TheaterDTO1 Theater { get; set; }
        public String Time { get; set; }
        public Guid Id { get; set; }
    }

    public class TheaterDTO1
    {
        public string Address { get; set; }
        public string Name { get; set; }
    }
}
