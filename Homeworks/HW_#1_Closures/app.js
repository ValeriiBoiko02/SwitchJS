//Task#1
function runningAverage() {
    let currentSum = 0;

    function getAverage(num) {
        if (currentSum === 0) {
            currentSum = num;
            return currentSum;
        } else return (currentSum + num) / 2;
    }
    return getAverage
}

let rAvg = runningAverage()
console.log(rAvg(100))
console.log(rAvg(300))


//Task#2
function sum(...arr){
    let currentSum = arr.reduce((total, int) => {
        return total + int
    }, 0);
    function add (num) {
        currentSum+=num;
        return add;
    }
    add.toString = function (){
        return currentSum;
    }
    return add;
}

alert(sum(1)(2)(3)(100))
alert(sum(50,50)(2)(3)(2))