using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using moviebooking.Data.Entities;
using moviebooking.Data;
using Microsoft.EntityFrameworkCore;

namespace moviebooking.Repositories
{
    public class TheaterRepository : Repository<Theater>, ITheaterRepository
    {
        public TheaterRepository(MoviebookingContext context) : base(context) { }

        public Task<Theater> GetByLocation(string name)
        {
            return context.Set<Theater>().FirstOrDefaultAsync(theater => theater.Address == name);
        }
    }
}


