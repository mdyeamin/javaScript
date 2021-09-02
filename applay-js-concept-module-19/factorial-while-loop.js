function getFactorial(number) {
    let factorial = 1;
    var i = 1;
    while (i <= number) {
        factorial = factorial * i
        i++
    }
    return factorial
}
console.log(getFactorial(7));




// decrement factorial 
function getDecrementFectorial(number) {
    let decrementFactorial = 1;
    let i = number;
    while (i >= 1) {
        decrementFactorial = decrementFactorial * i;
        i--;
    }
    return decrementFactorial
}
console.log(getDecrementFectorial(6));


// for loop get factorial using
function getFactorialForLoop(number) {
    let factorialForLoop = 1;
    for (let i = number; i >= 1; i--) {

        factorialForLoop = factorialForLoop * i
    }

    return factorialForLoop

}

console.log(getFactorialForLoop(6))

