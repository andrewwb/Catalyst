using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Catalyst.Services;
using Microsoft.AspNetCore.Authorization;
using Catalyst.ViewModels.DataTransferObjects;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Catalyst.Controllers
{
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private EmployeesService _empService;
        public EmployeesController(EmployeesService empService)
        {
            _empService = empService;
        }

        // GET: api/values
        [HttpGet]
        [Authorize]
        public IEnumerable<AppUserDto> Get()
        {
            return _empService.GetEmployees();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
