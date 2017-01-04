﻿namespace Catalyst.Controllers {
    export class ModalController {
        public validationMessages;
        constructor(public $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance, public accountService: Catalyst.Services.AccountService) { }

        public closeModal() {
            this.$uibModalInstance.close();
        }

        public addEmployee(registerUser) {
            this.accountService.registerEmployee(registerUser).then(() => {
                // Pop over notification 
                this.$uibModalInstance.close();
            }).catch((results) => {
                this.validationMessages = results;
            });
        }
    }
}