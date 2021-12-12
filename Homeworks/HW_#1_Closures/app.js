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


//((a*1 + b*1) /2)

//console.log(rAvg(10))
//console.log(rAvg(11))
console.log(rAvg(100))
console.log(rAvg(300))


function sum(a) {

    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function() {
        return currentSum;
    };

    return f;
}


alert( sum(1,2));
alert( sum(1)(2));