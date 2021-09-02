const anthem = 'amar sonar bangla ami tomay valo bashi';
const words = anthem.split(' ')
const withdoutA = anthem.split('a')
// console.log(withdoutA);
//slice
const smallSlice = anthem.slice(2, 5);
// console.log(smallSlice);
//substr
const anotherPart = anthem.substr(11, 6);
// console.log(anotherPart);

// substring

const anotherAnotherPart = anthem.substring(11, 15);
// console.log(anotherAnotherPart);

// concat

const first = 'Amader';
const secund = ' City';
// console.log(first.concat(secund));

const word = ['alim', 'badhon', 'cameron', 'devid'];
const allJoined = word.join(', ');
console.log(allJoined);