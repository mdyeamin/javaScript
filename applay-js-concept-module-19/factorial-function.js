// let factorial = 1;
// for (let i = 1; i <= 5; i++) {

//     factorial = factorial * i;
// }
// console.log(factorial)

function factorialFunction(fact1) {
    let factorial = 1;
    for (let i = 1; i <= fact1; i++) {

        factorial = factorial * i;

    }
    return factorial
}

let firstFactorial = factorialFunction(7);
console.log("factoSrial of 7 is =", firstFactorial);

let secundFactorial = factorialFunction(5);
console.log("secund factorial of 5 is = ", secundFactorial);

let thirdFactorial = factorialFunction(9);
console.log("third factorial of 9 is = ", thirdFactorial);