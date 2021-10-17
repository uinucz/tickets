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
    public class ScreeningController
    {
        protected readonly MoviebookingContext _context;
        private IRepository<Screening> screeningRepository;

        public ScreeningController(IRepository<Screening> screeningRepository, MoviebookingContext context)
        {
            _context = context;
            this.screeningRepository = screeningRepository;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<Screening> GetAllBooks() => screeningRepository.GetAll();


        [HttpGet]
        [Route("{screeningId}")]
        public Screening GetScreeningById(Guid screeningId)
        {
            var x = _context.Screenings
                            .Where(x => x.Id == screeningId)
                            .Include(a => a.Bookings)
                            .Include(x => x.Theater)
                            .Include(a => a.Movie)
                            
                            .FirstOrDefault();

            return x;
        }

    }
}
