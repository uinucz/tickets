using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using moviebooking.Data;
using moviebooking.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using moviebooking.Controllers;
using System.Diagnostics;
using moviebooking.DTOs;
using Microsoft.AspNetCore.Http;
using moviebooking.Repositories;

namespace moviebooking.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BookingController : Controller
    {
        private readonly MoviebookingContext _context;
        private readonly UserManager<User> _userManager;
        private IRepository<Booking> _bookingRepository;


        public BookingController(UserManager<User> userManager, MoviebookingContext context, IRepository<Booking> bookingRepository)
        {
             _context = context; 
            _userManager = userManager;
            _bookingRepository = bookingRepository;
        }

        [HttpGet]
        [Route("{screeningId}")]
        public IEnumerable<BookingDTOs.BookingDTOforScreening> GetAllBookingsForScreening(Guid screeningId)
        {
            return _context.Bookings
                .Where(x => x.Screening.Id == screeningId)
                .Select(y => new BookingDTOs.BookingDTOforScreening
                {
                    ScreeningId = y.Screening.Id,
                    UserId = y.User.Id,
                    Seat = y.Seat
                })
                .ToList();
        }

        [Authorize]
        [HttpGet]
        [Route("")]
        public async Task<IEnumerable<BookingDTOs.BookingDTOforUser>> GetAllBookingsForUser()
        {
            var user = await _userManager.GetUserAsync(User);
            return _context.Bookings
                .Where(x => x.User.Id == user.Id)
                .Select(y => new BookingDTOs.BookingDTOforUser
                {
                    BookingId = y.Id,
                    Seat = y.Seat,
                    ScreeningId = y.Screening.Id,
                    Time = y.Screening.Time,
                    TheaterAddress = y.Screening.Theater.Address,
                    TheaterName = y.Screening.Theater.Name,
                    MovieName = y.Screening.Movie.Name,
                    Image = y.Screening.Movie.Pic
                })         
                .ToList();
        }

        [Authorize]
        [HttpPost]
        [Route("{screeningId}")]
        public async Task addBooking(List<int> seats, Guid screeningId)
        {
            var user = await _userManager.GetUserAsync(User);
            var screening = await _context.Screenings.FindAsync(screeningId);

            foreach (var seat in seats)
            {
                var newBooking = new Booking
                {
                    User = user,
                    Screening = screening,
                    Seat = seat
                };

                if(screening.Bookings.Where(x => x.Seat == seat).Count() == 0)
                    _context.Bookings.Add(newBooking);
            }            

            await _context.SaveChangesAsync();

            Console.WriteLine(user.NormalizedUserName);
 
        }

        [Authorize]
        [HttpDelete]
        [Route("{bookingId}")]
        public void deleteBooking(Guid bookingId)
        {
            _context.Bookings.Remove(_context.Bookings.Find(bookingId));
            _context.SaveChangesAsync();
        }
    }
}
