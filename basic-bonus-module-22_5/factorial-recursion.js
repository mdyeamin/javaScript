// factorial using for loop 🐦	 Increment


/* let factorial = 1;
for (let i = 1; i <= 7; i++) {
    factorial = factorial * i;
    console.log(factorial);
}
 */

// factorial using foor loop 	Decrement 
/* let factorial = 1;
for (let i = 7; i >= 1; i--) {
    factorial = factorial * i;
}
console.log(factorial); */

// factorial using function 

/* function factorial(i) {
    if (i == 1) {
        return 1
    }
    return factorial(i - 1) * i;

}
console.log(factorial(6)); */


function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return factorial(n - 1) * n;
}
console.log(factorial(50));