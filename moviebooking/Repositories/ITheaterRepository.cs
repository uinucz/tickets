using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using moviebooking.Data.Entities;

namespace moviebooking.Repositories
{
    public interface ITheaterRepository : IRepository<Theater>
    {
    
         Task<Theater> GetByLocation(string location);
    }
}
