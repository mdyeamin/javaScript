var numbers = [49, 32, 54, 56, 78, 74, 66];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;

}
// console.log(sum);

function arrayTotal(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        let elements = number[i];
        sum += elements;
    }
    return sum;
}
console.log(arrayTotal([2, 2, 2]));