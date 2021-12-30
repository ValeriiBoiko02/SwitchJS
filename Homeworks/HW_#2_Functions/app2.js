function NamedOne(nameFirst, nameLast) {
    const objectInfoPerson = {};
    return Object.defineProperties(objectInfoPerson,
        {
            'firstName': {
                value: nameFirst,
                writable: true
            },
            'lastName': {
                value: nameLast,
                writable: true
            },
            'fullName': {
                get() {
                    return this.firstName + ' ' + this.lastName
                },
                set(value) {
                    let valueArray = value.split(" ")

                    if (valueArray[0] === this.firstName && valueArray[1] === this.lastName) {
                        throw 'First name and last name were unchanged'
                    } else if (valueArray.length === 1) {
                        throw 'LastName missing'
                    } else {
                        this.firstName = valueArray[0]
                        this.lastName = valueArray[1]
                    }
                }
            }
        }
    )
}


var namedOne = new NamedOne("Naomi","Wang")

console.log(namedOne.firstName) // -> "Naomi"
console.log(namedOne.lastName ) // -> "Wang"
console.log(namedOne.fullName) // -> "Naomi Wang"

console.log('------------------------')

// Changing first name and last name separately
namedOne.firstName = "John"
console.log(namedOne.firstName)
namedOne.lastName = "Doe"
console.log(namedOne.lastName)
console.log(namedOne.fullName)

console.log('------------------------')

// Changing the first and last name by fullName

namedOne.fullName = "Bill Smith"
console.log(namedOne.firstName)
console.log(namedOne.lastName)
console.log(namedOne.fullName)

// Checking errors
// The first error - missing last name
namedOne.fullName = "Tom"
// The second error - unchanged value
namedOne.fullName = "Bill Smith"






// if (arr.length === 2){
//     this.firstName = arr[0]
//     this.lastName = arr[1]
// }
// else{
//     throw 'Error'
// }