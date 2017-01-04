namespace Catalyst.Services {
    export class ModalService {
        public modalInstance;
        constructor(public $uibModal: ng.ui.bootstrap.IModalService) { }

        public addEmployeeAccount() {
            this.modalInstance = this.$uibModal.open({
                templateUrl: 'ngApp/views/modals/addEmployeeModal.html',
                controller: Catalyst.Controllers.ModalController,
                controllerAs: 'modal',
                size: 'md'
            })
        }
    }

    angular.module('Catalyst').service("ModalService", ModalService);
}