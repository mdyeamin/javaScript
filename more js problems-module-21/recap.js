// find biggest number in an array

function largestElemenets(numbers) {
    let max = numbers[0]; // importent thing
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];

        if (element > max) {
            max = element

        }
    }
}
// find smallest number in an array

function smallestElemenets(numbers) {
    let min = numbers[0]; // importent thing
    for (let i = 0; i < numbers.length; i++) {
        let total = numbers[i];
        const element = numbers[i];

        if (element < min) {
            min = element

        }
    }
}