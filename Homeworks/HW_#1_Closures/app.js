function runningAverage(){
    let num = 0;
    function getAverage(secondNum){
        if (num === 0){
            num = secondNum;
            return num;
        }else {
            return (num + secondNum) / 2;
        }
    }
    return getAverage
}

let rAvg = runningAverage()

console.log(rAvg(10))
console.log(rAvg(11))
console.log(rAvg(12))
console.log(rAvg(12))