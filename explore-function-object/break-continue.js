// var items = [32, 45, 76, 89, 11, 22, 31];
// var i = 0;
// while (i < items.length) {


//     i++
//     if (items > 70) {
//         continue;
//     }
//     console.log(items)
// }

// var i = 0;
// while (i < 10) {
//     console.log(i)
//     if (i == 3) {
//         break;
//     }
//     i++

// }

var numbers = [45, 54, 67, 89, 90, 66, 89,]
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i]
    if (number > 70) {
        continue;
    }
    console.log(number)
}