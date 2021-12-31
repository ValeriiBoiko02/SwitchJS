//Task#1
function runningAverage() {
    let acm = 0;
    let counter = 0;

    return (num) => {
        acm += num
        counter++
        return acm / counter
    }
}

let rAvg = runningAverage()
console.log(rAvg(10))
console.log(rAvg(11))
console.log(rAvg(12))


//Task#2
function mySum(...sum) {
    let result = sum.reduce((total, int) => {
        return total + int
    }, 0);

    function add(num) {
        result += num;
        return add;
    }

    add.toString = function () {
        return result;
    }
    return add;
}

alert(mySum(1)(2)(3)(100))
alert(mySum(50, 50)(2)(3)(2))