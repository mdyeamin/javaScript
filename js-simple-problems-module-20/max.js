const business = 550;
const minister = 1450;
const army = 600;

// tow person compear 
// if (business > minister) {
//     console.log('business person er pola is biggesr');
// }
// else {
//     console.log('minister person er pola is biggesr');
// }

/* if (business > minister && business > army) {
    console.log('business is biggesr');
}
else if (minister > business && minister > army) {
    console.log('minister is biggest');
}
else {
    console.log('army is bigger');
} */



// tow largest number 
/* function findLargesNumber(num1, num2) {
    if (num1 > num2) {
        return num1;

    }
    else {
        return num2
    }
}
console.log(findLargesNumber(90, 34)); */

// three largest number 

/* function threeLargestNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1
    }
    else if (num2 > num1 && num2 > num3) {
        return num2
    }
    else {
        return num3
    }
}
const threeBigger = threeLargestNumber(33, 32, 45);
console.log(threeBigger); */


// three number in ssmall number with function
/* function threesmallNumber(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1
    }
    else if (num2 < num1 && num2 < num3) {
        return num2
    }
    else {
        return num3
    }
}
const smallNumber = threesmallNumber(4, 49, 2)
console.log(smallNumber); */


var min = Math.min(business, minister, army)
console.log(min)



var max = Math.max(business, minister, army);

// console.log(max);