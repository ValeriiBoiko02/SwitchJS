function NamedOne(nameFirst, nameLast) {
    return Object.defineProperties(this,
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
                    let [firstName, lastName] = valueArray

                    if (valueArray !== 2) {
                        return
                    }
                    this.firstName = firstName
                    this.lastName = lastName
                }
            }
        }
    )
}


var namedOne = new NamedOne("Naomi", "Wang")

console.log(namedOne.firstName) // -> "Naomi"
console.log(namedOne.lastName) // -> "Wang"
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