namespace Catalyst.Services {
    export class ModalService {
        private modalInstance: ng.ui.bootstrap.IModalServiceInstance;
        constructor(public $uibModal: ng.ui.bootstrap.IModalService, private $http: ng.IHttpService) { }

        // Returns promise with refreshed list of employees
        public addEmployeeAccount(): Promise<any> {
            let promise = new Promise((resolve, reject) => {

                this.modalInstance = this.$uibModal.open({
                    templateUrl: 'ngApp/views/modals/addEmployeeModal.html',
                    controller: Catalyst.Controllers.ModalController,
                    controllerAs: 'modal',
                    size: 'md',
                    resolve: { employee: null }
                })

                this.modalInstance.result.then(() => {
                    this.$http.get('api/employees').then((res) => {
                        resolve(res.data);
                    }).catch((err) => {
                        reject(err);
                    });
                })
            })

            return promise;
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