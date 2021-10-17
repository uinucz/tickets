using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using moviebooking.Data;
using moviebooking.Repositories;
using moviebooking.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
 
namespace moviebooking.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class MovieController : ControllerBase
    {
        protected readonly MoviebookingContext _context;
        private IRepository<Movie> movieRepository;

        public MovieController(IRepository<Movie> movieRepository, MoviebookingContext context)
        { 
            this.movieRepository = movieRepository;
            _context = context;
        }

        
        [HttpGet]
        [Route("")]
        public IEnumerable<Movie> GetAllBooks() => movieRepository.GetAll();

        [HttpGet]
        [Route("/test/{movieId}")]
        public Movie GetMovieByIdTest(Guid movieId)
        {
            var x = _context.Movies
             .Where(m => m.Id == movieId)
             .Include(m => m.Screenings)
             .ThenInclude(m => m.Theater)
             .FirstOrDefault();

            return x;
        }

        //[Authorize]
        [HttpGet]
        [Route("{movieId}")]
        public MovieDTO2 GetMovieById(Guid movieId)
        {
            var x = _context.Movies
                            .Where(m => movieId == m.Id)
                            .Include(m => m.Screenings)
                               .ThenInclude(s => s.Theater)
                            .AsEnumerable()
                            .Select(p => new MovieDTO2
                            {
                                Name = p.Name,
                                Body = p.Body,
                                Dir = p.Dir,
                                Pic = p.Pic,
                                ScreeningDays = p.Screenings
                                                .GroupBy(x => new { x.Time.Day, x.Time.Month, x.Time.Year })
                                                .AsEnumerable()
                                                 .Select(c => new ScreeningDayDTO2
                                                {
                                                    Day = new DateTime(c.Key.Year, c.Key.Month, c.Key.Day),
                                                    ScreeningTheaters = p.Screenings
                                                                    .GroupBy(x => x.Theater)
                                                                    .AsEnumerable()
                                                                    .Select(z => new ScreeningTheaterDTO2
                                                                    {
                                                                        Theater = new TheaterDTO2 { 
                                                                            Address = z.Key.Address,
                                                                            Name = z.Key.Name
                                                                        },
                                                                        Screenings = p.Screenings
                                                                                        .Where(n => n.Theater.Address == z.Key.Address)
                                                                                        .Select(r => new ScreeningDTO2
                                                                                        {
                                                                                            Time = r.Time,
                                                                                            ScreeningId = r.Id
                                                                                        })
                                                                                        .Where(t => t.Time.Year == c.Key.Year &&
                                                                                                    t.Time.Month == c.Key.Month &&
                                                                                                    t.Time.Day == c.Key.Day 
                                                                                                    )
                                                                                        .ToList()
                                                                    })
                                                                    .ToList()
                                                })
                                                .ToList()
                                               
                            })
                            .ToList()
                            .FirstOrDefault();


            //var x = _context.Movies
            //      .Where(m => movieId == m.Id)
            //      .Include(m => m.Screenings)
            //         .ThenInclude(s => s.Theater)
            //      .Select(p => new MovieDTO1
            //      {
            //          Name = p.Name,
            //          Body = p.Body,
            //          Dir = p.Dir,
            //          Pic = p.Pic,
            //          Screenings = p.Screenings.Select(x => new ScreeningDTO1
            //          {
            //              Theater = new TheaterDTO1
            //              {
            //                  Name = x.Theater.Name,
            //                  Address = x.Theater.Address
            //              },
            //              Time = x.Time.ToString("MMMM dd"),
            //              Id = x.Id
            //              })
            //          .ToList()                    
            //          })
            //      .ToList()
            //      .FirstOrDefault();
            return x;
        }


        //public Movie GetMovieById(Guid movieId) => movieRepository.GetById(movieId);

        [HttpPost]
        [Route("")]
        [AllowAnonymous]
        public void AddBook([FromBody] Movie movie) => movieRepository.Insert(movie);

        [HttpDelete]
        [Route("{movieId}")]
        [AllowAnonymous]
        public void DeleteBook(Guid movieId) => movieRepository.Delete(movieId);
    }

}