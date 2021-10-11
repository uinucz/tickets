using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using moviebooking.Data;
using moviebooking.Data.Entities;

namespace moviebooking.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly MoviebookingContext _databaseContext;
        private ITheaterRepository _theaterRepository;
        private IRepository<Movie> _movieRepository;

        public UnitOfWork(MoviebookingContext databaseContext)
        { _databaseContext = databaseContext; }

        public ITheaterRepository TheaterRepository
        {
            get { return _theaterRepository ??= new TheaterRepository(_databaseContext); }
        }

        public IRepository<Movie> MovieRepository
        {
            get { return _movieRepository ??= new Repository<Movie>(_databaseContext); }
        }

        public void Commit()
        { _databaseContext.SaveChanges(); }

        public void Rollback()
        { _databaseContext.Dispose(); }
    }
}
