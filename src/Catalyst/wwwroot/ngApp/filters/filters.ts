namespace Catalyst.Filters {
    function phoneNumber() {
        return function (input: string) {
            var numbers:string[] = input.split("");
            return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]} - ${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
        }
    }

    function address() {
        return function (input: Catalyst.Interfaces.IAddress) {
            if (!input.aptNumber) {
                return `${input.street} ${input.city} ${input.state} ${input.zip}`;
            }
            return `${input.street} APT# ${input.aptNumber} ${input.city } ${input.state } ${input.zip }`;
        }
    }

    angular.module('Catalyst').filter("phone", phoneNumber);
    angular.module('Catalyst').filter("address", address);
}