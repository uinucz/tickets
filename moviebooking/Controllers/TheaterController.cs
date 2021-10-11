using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using moviebooking.Repositories;
using moviebooking.Data.Entities;
using Microsoft.AspNetCore.Authorization;

namespace moviebooking.Controllers
{
    [ApiController]
    [Route("theater")]
    public class TheaterController : ControllerBase
    {
        private ITheaterRepository _theaterRepository;

        public TheaterController(ITheaterRepository theaterRepository)
        { _theaterRepository = theaterRepository; }

        [HttpGet("")]
        public IEnumerable<Theater> GetAllTheaters() => _theaterRepository.GetAll();

        [HttpGet("{address}")]
        public Task<Theater> GetTheaterByName(String address) => _theaterRepository.GetByLocation(address);

        [HttpPost("")]
        [AllowAnonymous]
        public void AddTheater([FromBody] Theater theater) => _theaterRepository.Insert(theater);
    }
}

