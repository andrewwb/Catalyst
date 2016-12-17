using Catalyst.Data;
using Catalyst.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Catalyst.Infrastructure
{
    public class EmployeesRepository : GenericRepository<ApplicationUser>
    {
        public EmployeesRepository(ApplicationDbContext db) : base(db)
        {
        }
    }
}
