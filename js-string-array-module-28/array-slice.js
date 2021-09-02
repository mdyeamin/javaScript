const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];
const numberSlice = numbers.slice(5, 9);
//slice
// console.log(numberSlice);
//splice to remove an element form an array
// const numberSplice = numbers.splice(2, 7);
// console.log(numberSplice);
// console.log(numbers);

const numberSplice2 = numbers.splice(2, 3, 999, 888, 777);
console.log(numberSplice2);
console.log(numbers);