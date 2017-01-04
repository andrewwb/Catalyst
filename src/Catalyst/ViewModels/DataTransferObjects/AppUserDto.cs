﻿using Catalyst.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Catalyst.ViewModels.DataTransferObjects
{
    public class AppUserDto
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string EmployeeNumber { get; set; }
        public Address Address { get; set; }
    }
}
