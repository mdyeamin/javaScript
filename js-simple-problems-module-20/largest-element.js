function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];

        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

let age = [20, 43, 44, 56, 101, 78, 98, 76];
let oldAges = largestElement(age);
let oldest2 = largestElement([-12, -6, -17])
console.log(oldAges);
console.log(oldest2)