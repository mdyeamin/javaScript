
// feet to inch
/* function feetToInch(feet) {
    let feetTo = feet * 12;
    return feetTo
}
console.log(feetToInch(2)); */




// inch to feet
/* function inchToFeet(inch) {
    let inchTo = inch / 12;
    return inchTo
}
// console.log(Math.round(inchToFeet(29)));
console.log(inchToFeet(48)); */


// centimeters to meters
/* function centiTometer(centi) {
    let centiTo = centi / 100;
    return centiTo;
}
console.log(centiTometer(34324)); */



// meters to centimeters
/* function meterTocent(meter) {
    let meterTo = meter * 100;
    return meter;
}
console.log(meterTocent(2));
 */



// farenheit to celcius
/* function farnToCels(farn) {
    let farnTo = (farn - 32) * 5 / 9;
    return farnTo;
}
console.log(farnToCels(25));
 */


// celcius to farenheit
/* function celsToFarn(cels) {
    let celsTo = (cels * 9 / 5 + 32);
    return celsTo;
}

console.log(celsToFarn(32));
 */

// pageRequiremenrs
/* function pageRequirements(book1, book2, book3) {
    const book1PageQuantity = book1 * 100;
    const book2PageQuantity = book2 * 200;
    const book3PageQuantity = book3 * 300;
    const total = book1PageQuantity + book2PageQuantity + book3PageQuantity;
    return total;
}

console.log(pageRequirements(6, 2, 5));
 */



// woodFeetQyantity
/* function woodFeetQyantity(chairWood, tableWood, bedWood, toolWood, eatingTableWood) {
    const chairWoodQuantuty = chairWood * 7;    //cft
    const tableWoodQuantity = tableWood * 18;   //cft
    const bedWoodQuantity = bedWood * 50;       //cft
    const toolWoodQuantity = toolWood * 6;           //cft
    const eatingWoodQuantity = eatingTableWood * 6;

    let totalWoodQuantity = chairWoodQuantuty + tableWoodQuantity + bedWoodQuantity + toolWoodQuantity + eatingWoodQuantity;
    return totalWoodQuantity;
}
console.log(woodFeetQyantity(12, 3, 2, 5, 2));
 */

// fild big string with an array function

/* function bestFrind(frinds) {
    let biggesFrind = '';

    for (let i = 0; i < frinds.length; i++) {
        let elements = frinds[i];
        if (elements.length > biggesFrind.length) {
            biggesFrind = elements;
        }
    }
    return biggesFrind;
}

let fristList = bestFrind(['shawon miraj', 'hi', 'jhankar mahbub', 'yeamin', 'roky', 'emdad']);

console.log(fristList);
 */


//find old number in an array wudth function


/* function largestAges(oldest) {
    let largest = 0;
    for (let i = 0; i < oldest.length; i++) {
        let bigAge = oldest[i];
        if (bigAge > largest) {
            largest = bigAge
        }

    }
    return largest
}
let a = largestAges([21, 34, 13, 56, 35]);
console.log(a); */





/* function largestAges(oldest) {
    let largest = oldest[0]; // ! importent fact
    for (let i = 0; i < oldest.length; i++) {
        let bigAge = oldest[i];
        if (bigAge > largest) {
            largest = bigAge
        }

    }
    return largest
}
let a = largestAges([-21, -34, -13, -56, -35]);
console.log(a);
 */








/* function biggestNumber(numbers) {
    let largestNumber = 0;
    for (let i = 0; i < numbers.length; i++) {
        let bigNumber = numbers[i];

        if (bigNumber > largestNumber) {
            largestNumber = bigNumber;
        }
    }
    return largestNumber;
}
let b = biggestNumber([3, 6, 9, 5]);
console.log(b);
 */


/*
function largestString(largeString) {
    let large = '';
    for (let i = 0; i < largeString.length; i++) {
        let bigestString = largeString[i];
        if (bigestString.length > large.length) {
            large = bigestString;
        }
    }
    return large;
}
console.log(largestString(['one', 'tow', 'three', 'one handred', 'four', 'five']));
 */


// will stop the loop if the array hes any nagetive numbers 

function onlyPositive(array) {
    let positive = [];
    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        if (number > 0) {
            positive.push(number)
        }
        else {
            break;
        }
    }
    return positive;
}

let positiveNumber = onlyPositive([23, 45, 89, 11, -45, 86, -98]);
console.log(positiveNumber);



function onlyPositive(array) {
    const positive = [];
    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        if (number >= 0) {
            positive.push(number);
        } else {
            break;
        }
    }
    return positive;
}


// wrong code !!!!!!!!!!!!!!!
/* let onlyPositive = [44, 35, 22, 67, -23, 67, -86, 65, 64]

let i = 0;
while (i < onlyPositive.length) {
    if (onlyPositive[i] < 0) {
        break;
    }
    else {
        console.log(onlyPositive[i]);
    }
    i++;
} */

