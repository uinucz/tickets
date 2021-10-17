using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using moviebooking.Data.Entities;

namespace moviebooking.Data
{
    public class MoviebookingContext : IdentityDbContext<User>
    {
        public MoviebookingContext(DbContextOptions<MoviebookingContext> options)
           : base(options)
        {

            Database.EnsureCreated();   // создаем базу данных при первом обращении
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Screening> Screenings { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Theater> Theaters { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // использование Fluent API
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>()
                .HasMany(p => p.Bookings)
                .WithOne(c => c.User);

            modelBuilder.Entity<Movie>()
                .HasMany(p => p.Screenings)
                .WithOne(p => p.Movie);

            modelBuilder.Entity<Theater>()
                .HasMany(p => p.Screenings)
                .WithOne(p => p.Theater);

            modelBuilder.Entity<Screening>()
                .HasMany(p => p.Bookings)
                .WithOne(p => p.Screening);




        }

    }
}
