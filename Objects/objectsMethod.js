
const hector = {
    firstName: 'Hector',
    age: 22,
    job: 'developer',
    hobbies: ['html', 'css', 'javascript', 'react'],
    driverLicense: false,

    calcAge: function () {
        return 2022 - this.age
    },

    getSummary: function () {
        return `${this.firstName} is ${this.age} years old and works as a ${this.job}
            and he has ${this.driverLicense ? 'a' : 'no'} driver license.`
        }
}

console.log(hector.getSummary())

