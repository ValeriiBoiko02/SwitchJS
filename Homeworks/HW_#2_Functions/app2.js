function NamedOne(name, lastN) {
    return {
        firstName: name,
        lastName: lastN,
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        }
    }
}

var test = NamedOne('NameOne', 'LastOne')
console.log(test.firstName)
console.log(test.lastName)
console.log(test.fullName())


console.log('---------------------------')

test.firstName = 'NameTwo'
test.lastName = 'LastTwo'
console.log(test.firstName)
console.log(test.lastName)
console.log(test.fullName())


console.log('---------------------------')

test.firstName = 'NameThree'
test.lastName = 'LastThree'
console.log(test.firstName)
console.log(test.lastName)
console.log(test.fullName())