namespace Catalyst.Filters {
    function phoneNumber() {
        return function (input: string) {
            var numbers:string[] = input.split("");
            return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]} - ${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
        }
    }

    angular.module('Catalyst').filter("phone", phoneNumber)
}