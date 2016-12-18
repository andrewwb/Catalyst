namespace Catalyst.Controllers {

    export class DashboardController {
        public date: Date;
        constructor(public $http: ng.IHttpService, public NavService: Catalyst.Services.NavService) {
            this.date = new Date();
            $http.get('api/dashboard').then(() => {})
        }
    }

    export class WarehouseController {

    }

    export class EmployeeController {
        public date: Date;
        public employees;
        constructor(public NavService: Catalyst.Services.NavService, $http: ng.IHttpService, public ModalService: Catalyst.Interfaces.IModalService) {
            this.date = new Date();
            $http.get('api/employees').then((res) => {
                this.employees = res.data;
            })
        }
    }


    export class SecretController {
        public secrets;

        constructor($http: ng.IHttpService) {
            $http.get('/api/secrets').then((results) => {
                this.secrets = results.data;
            });
        }
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
