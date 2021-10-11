using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace moviebooking.Data.Entities
{
    public class MovieDTO2
    {
        public string Name { get; set; }
        public string Body { get; set; }
        public string Dir { get; set; }
        public string Pic { get; set; }
        public List<ScreeningDayDTO2> ScreeningDays { get; set; }
    }
    public class ScreeningDayDTO2
    {
        public List<ScreeningTheaterDTO2> ScreeningTheaters { get; set; }
        public DateTime Day { get; set; }
    }

    public class ScreeningTheaterDTO2
    {
        public TheaterDTO2 Theater { get; set; }
        public List<ScreeningDTO2> Screenings { get; set; }
    }

    public class ScreeningDTO2
    {
        public DateTime Time { get; set; }
        public Guid ScreeningId { get; set; }
    }

    public class TheaterDTO2
    {
        public string Address { get; set; }
        public string Name { get; set; }
    }
}
