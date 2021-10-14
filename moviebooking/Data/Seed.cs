using Microsoft.AspNetCore.Identity;
using moviebooking.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace moviebooking.Data
{
    public class Seed
    {
        public static async Task SeedData(MoviebookingContext context,
            UserManager<User> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<User>
                {
                    new User
                    {
                        UserName = "tom",
                        Email = "firstuser@gmail.com"
                    },
                    new User
                    {
                        UserName = "john",
                        Email = "john@gmail.com"
                    },
                    new User
                    {
                        UserName = "eric",
                        Email = "eric@gmail.com"
                    }
                };
                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Password1");
                }
            }
        }
    }
}
