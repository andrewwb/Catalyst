using System;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using System.Threading.Tasks;
using Catalyst.Models;

namespace Catalyst.Data
{
    public class SampleData
    {
        public async static Task Initialize(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetService<ApplicationDbContext>();
            var userManager = serviceProvider.GetService<UserManager<ApplicationUser>>();

            // Ensure db
            context.Database.EnsureCreated();

            // Ensure Stephen (IsAdmin)
            var andrew = await userManager.FindByNameAsync("abuttram9@gmail.com");
            if (andrew == null)
            {
                // create user
                andrew = new ApplicationUser {
                    UserName = "abuttram9@gmail.com",
                    Email = "abuttram9@gmail.com",
                    FirstName = "Andrew",
                    LastName = "Buttram",
                    PhoneNumber = "7777777777",
                    EmployeeNumber = "Dev1",
                    IsHourly = false,
                    Wage = 75000m,
                    Address = new Address {
                        AptNumber = "1A",
                        City = "Santa Maria",
                        State = "California",
                        Street = "111 Main St",
                        Zip = "93454"
                    }
                };
                await userManager.CreateAsync(andrew, "Secret123!");

                // add claims
                await userManager.AddClaimAsync(andrew, new Claim("IsAdmin", "true"));
            }
        }

    }
}
