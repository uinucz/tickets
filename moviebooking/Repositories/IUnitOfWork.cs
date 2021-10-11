using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using moviebooking.Data.Entities;

namespace moviebooking.Repositories
{   
    public interface IUnitOfWork
    {
        ITheaterRepository TheaterRepository { get; }
        IRepository<Movie> MovieRepository { get; }
        void Commit();
        void Rollback();
    }
}

