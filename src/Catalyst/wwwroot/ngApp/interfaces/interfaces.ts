namespace Catalyst.Interfaces {
    export interface IModalService {
        $uibModal: ng.ui.bootstrap.IModalService;
        $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance;
        addEmployeeAccount();
    }
}