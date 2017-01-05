namespace Catalyst.Services {
    export class ModalService {
        public modalInstance;
        constructor(public $uibModal: ng.ui.bootstrap.IModalService) { }

        public addEmployeeAccount() {
            this.$uibModal.open({
                templateUrl: 'ngApp/views/modals/addEmployeeModal.html',
                controller: Catalyst.Controllers.ModalController,
                controllerAs: 'modal',
                size: 'md',
                resolve: { employee: null }
            })
        }

        public employeeProfileModal(employee: Catalyst.Interfaces.IEmployee) {
            this.$uibModal.open({
                templateUrl: 'ngApp/views/modals/employeeProfileModal.html',
                controller: Catalyst.Controllers.ModalController,
                controllerAs: 'modal',
                size: 'md',
                resolve: { employee: employee }
            })
        }
    }

    angular.module('Catalyst').service("ModalService", ModalService);
}