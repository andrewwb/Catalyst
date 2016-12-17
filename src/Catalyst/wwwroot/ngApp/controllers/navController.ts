namespace Catalyst.Controllers {
    export class NavController {
        constructor(public NavService) {

        }
    }
    angular.module('Catalyst').controller('NavController', NavController);
}