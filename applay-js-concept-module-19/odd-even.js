// even 

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;

}
var myEvenNumber = 14;
console.log(isEven(myEvenNumber))



// odd
function isOdd(oddNumber) {
    if (oddNumber % 2 != 0) {
        return true;
    }
    return false;
}
var myOddNumber = 31;
console.log(isOdd(myOddNumber))

var herEvenNumber = 321;
console.log(isEven(herEvenNumber))

var herOddNumber = 345;
console.log(isOdd(herOddNumber))
