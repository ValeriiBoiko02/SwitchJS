class Vector {
    constructor(vectorArray) {
        this.vectorArray = vectorArray;
    }

    #validateVector(inputtedVector) {
        if (inputtedVector.vectorArray.length === this.vectorArray.length) {
            return true
        }
        throw "Error"
    }

    add(inputtedVector) {
        this.#validateVector(inputtedVector)
        return this.vectorArray.map((num, index)=> {
            return inputtedVector.vectorArray[index] + num
        })
    }

    subtract(inputtedVector) {
        this.#validateVector(inputtedVector)
        return this.vectorArray.map((num, index)=> {
            return num - inputtedVector.vectorArray[index]
        })
    }

    dot(inputtedVector) {
        this.#validateVector(inputtedVector)

        return this.vectorArray.map((num, index)=> {
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
        let stringifiedVector = this.vectorArray.toString()
        return (`'(${stringifiedVector})'`)
    }
}


const a = new Vector([1, 2, 3])
const b = new Vector([3, 3, 3])

console.log(a.toString())