namespace Catalyst.Services {
    export class NavService {
        constructor(public $http: ng.IHttpService, public $state: ng.ui.IStateService) { }

        public setCurrentPageStyle(stateName) {
            if (stateName == this.$state.current.name) {
                return 'currentPage';
            }
        }
    }

    angular.module('Catalyst').service("NavService", NavService);
}