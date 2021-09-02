function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;

    }
    else {
        return false
    }

}
const myNumber = 5434;
const isMyYear = isLeapYear(myNumber)
console.log(isMyYear)

const yourYear = 2100;
const isYourYear = isLeapYear(yourYear);
console.log(isYourYear)