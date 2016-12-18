namespace Catalyst.Services {
    export class ModalService {
        constructor(public $uibModal: ng.ui.bootstrap.IModalService, public $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance) { }

        public addEmployeeAccount() {
            this.$uibModal.open({
                templateUrl: 'ngApp/views/modals/addEmployeeModal.html',
                controller: Catalyst.Controllers.ModalController,
                controllerAs: 'modal',
            })
        }
    }

    angular.module('Catalyst').service("ModalService", ModalService);
}