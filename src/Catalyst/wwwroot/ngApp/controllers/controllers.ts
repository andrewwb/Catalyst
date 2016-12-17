namespace Catalyst.Controllers {

    export class HomeController {
        public date: Date
        constructor(public NavService: Catalyst.Services.NavService) {
            this.date = new Date();
            console.log(this.date);
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
