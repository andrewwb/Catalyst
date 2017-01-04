using Catalyst.Infrastructure;
using Catalyst.ViewModels.DataTransferObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Catalyst.Services
{
    public class EmployeesService
    {
        private EmployeesRepository _empRepo;
        public EmployeesService(EmployeesRepository empRepo)
        {
            _empRepo = empRepo;
        }

        public IEnumerable<AppUserDto> GetEmployees()
        {
            var dtos = (from u in _empRepo.Users()
                        select new AppUserDto
                        {
                            Id = u.Id,
                            EmployeeNumber = u.EmployeeNumber,
                            FirstName = u.FirstName,
                            LastName = u.LastName,
                            PhoneNumber = u.PhoneNumber,
                            Email = u.Email,
                            Address = u.Address
                        }).ToList();
            return dtos;
        }
    }
}
