function newFunction(n) {
    var sum = 1;
    var i = 1;
    while (i <= n) {
        sum *= i;
        i++;
    }
    return sum;
}

console.log(newFunction(7))
console.log(newFunction(6))