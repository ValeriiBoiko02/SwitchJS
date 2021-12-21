//Task#1
function runningAverage() {
    let num = 0;

   return (secondNum) => {
        if (num === 0) {
            num = secondNum;
            return (num + secondNum) / 2;
        } else{
            return (num + secondNum) / 2;
        }
    }
}

let rAvg = runningAverage()
console.log(rAvg(10))
console.log(rAvg(11))
console.log(rAvg(12))


//Task#2
function mySum(...sum){
    let result = sum.reduce((total, int) => {
        return total + int
    }, 0);
    function add (num) {
        result+=num;
        return add;
    }
    add.toString = function (){
        return result;
    }
    return add;
}

alert(mySum(1)(2)(3)(100))
alert(mySum(50,50)(2)(3)(2))