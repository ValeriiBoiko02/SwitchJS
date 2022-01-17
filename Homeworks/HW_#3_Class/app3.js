class Vector {
    constructor(array) {
        this.array = array;
    }

    add(inputArray) {
        if (inputArray.array.length === this.array.length) {
            return this.array.map(function (num, index) {
                return inputArray.array[index] + num
            })
        }
        throw "Error"
    }

    subtract(inputArray) {
        if (inputArray.array.length === this.array.length) {
            return this.array.map(function (num, index) {
                return inputArray.array[index] - num
            })
        }
        throw "Error"
    }

    dot(inputArray) {
        if (inputArray.array.length === this.array.length) {
            return this.array.map(function (num, index) {
                return inputArray.array[index] * num
            }).reduce((total, index) => {
                total += index
                return total
            }, 0)
        }
        throw "Error"
    }

    norm() {
        return this.array.reduce((total, index) => {
            return total += index * index
        }, 0)
    }

    toString() {
        return this.array.toString()
    }
}


const a = new Vector([1, 2, 3])
const b = new Vector([3, 3, 3])



console.log(a.add(b))
console.log(a.subtract(b))
console.log(a.dot(b))
console.log(b.norm())
console.log(a.toString())