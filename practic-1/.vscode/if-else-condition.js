var num = 101;

if (num > 100 || num <= 0) {
    console.log('pleace enter the valid marks')

}
else if (num <= 100 && num >= 80) {
    console.log('your score = A+')
}
else if (num < 80 && num >= 70) {
    console.log('your score = A-')
}
else if (num < 70 && num >= 60) {
    console.log('your score = A')
}
else if (num < 60 && num >= 50) {
    console.log('your score = B')
}
else if (num < 50 && num >= 40) {
    console.log('your score = C')
}
else if (num < 40 && num >= 33) {
    console.log('your score = D')
}
else {
    console.log('your are failed')
}












