function addNumbers() {

    // console.log(arguments);
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    // const result = num1 + num2;
    return result;

}
const sum = addNumbers(23, 13, 50, 100, 200);
console.log(sum);



function getFullName(firstName, lastName) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
    // const fullName = firstName + ' ' + lastName;
    // return fullName;
}
const name = getFullName('omuk', 'sonket', 'bit', 'hanif', 'sonket', 'bin', 'tomuk', 'sonket',);
console.log(name);