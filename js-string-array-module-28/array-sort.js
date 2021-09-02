const numbers = [4, 7, 1, 3, 9, 2, 5];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

const friends = ['kabli', 'josim', 'razzak', 'anwar', 'deepjol', 'badsha'];
const sortedFriends = friends.sort();
// console.log(sortedFriends.reverse());

const bigNumbers = [36, 77, 8, 9, 13, 4, 5, 96];
const sortingBigNumber = bigNumbers.sort(function (a, b) {
    return a - b
});
console.log(sortingBigNumber);