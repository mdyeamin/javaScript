/*
3! = 3 X 2 X 1 X
4! = 4 X 3 X 2 X 1 X
5! = 5 X 4 X 3 X 2 X 1 X
6! = 6 X 5 X 4 X 3 X 2 X 1 X
7! = 7 X 6 X 5 X 4 X 3 X 2 X 1 X
*/
var sum = 1;
for (var i = 1; i <= 7; i++) {
    sum = sum * i;

}
console.log(sum)