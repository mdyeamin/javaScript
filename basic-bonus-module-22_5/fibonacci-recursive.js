/* 
[0, 1, 1, 2, 3, 5, 8, 13,...........]fibonacchi hocche ter ager dui songkhar jog fol, evabe jog hote thakbe 
    fibo[2] = fibo[0] + fibo[1];
    fibo[3] = fibo[2] + fibo[1];

*/
const fibo = [0, 1];

for (let i = 2; i <= 6; i++) {
    // fibo[2] = fibo[0] + fibo[1];
    // fibo[3] = fibo[2] + fibo[1];
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);

const fibonacci = [0, 1];
for (let i = 2; i <= 6; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];

}
console.log(fibonacci);