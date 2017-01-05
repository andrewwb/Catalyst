namespace Catalyst.Interfaces {
    export interface IModalService {
        $uibModal: ng.ui.bootstrap.IModalService;
        $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance;
        addEmployeeAccount();
    }

    export interface IAddress {
        id: number;
        city: string;
        state: string;
        street: string;
        zip: string;
        aptNumber: string;
    }

    export interface IEmployee {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        employeeNumber: string;
        address: IAddress
    }
}