

var y = 1;
var result = 0;

while (y <= 15) {
    if (y % 3 == 0 && y % 5 == 0) {
        // console.log(y);
        result = result + y
    }
    y++
}
// console.log(result)

var x = 1;
var sum = 0;
while (x <= 100) {
    if (x % 3 == 0 && x % 5 == 0) {
        // console.log(x);
        sum = sum + x
    }
    x++
}
// console.log(sum);

var colors = ["red", "blue", "green"];
for (let i = 0; i < colors.length; i++) {
    // console.log(colors[i]);
}

// for (var i = 1; i <= 10; i++) {
//     console.log(i)
// }

// var i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++

// }

var i = 1;
do {
    console.log(i)
    i++
} while (i <= 10)