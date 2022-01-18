class Vector {
    constructor(vectorArray) {
        this.vectorArray = vectorArray;
    }

    #getValidVector(inputtedVector) {
        if (inputtedVector.vectorArray.length === this.vectorArray.length) {
            return true
        }
        throw "Error"
    }

    add(inputtedVector) {
        this.#getValidVector(inputtedVector)
        return this.vectorArray.map(function (num, index) {
            return inputtedVector.vectorArray[index] + num
        })
    }

    subtract(inputtedVector) {
        this.#getValidVector(inputtedVector)
        return this.vectorArray.map(function (num, index) {
            return inputtedVector.vectorArray[index] - num
        })
    }

    dot(inputtedVector) {
        this.#getValidVector(inputtedVector)

        return this.vectorArray.map(function (num, index) {
            return inputtedVector.vectorArray[index] * num
        }).reduce((total, index) => {
            total += index
            return total
        }, 0)

    }

    norm() {
        return this.vectorArray.reduce((total, index) => {
            return total += index * index
        }, 0)
    }

    toString() {
        let arrayToString = this.vectorArray.toString()
        return (`'(${arrayToString})'`)
    }
}


const a = new Vector([1, 2, 3])
const b = new Vector([3, 3, 3])

console.log(a.toString())