const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight phone',
    'dell yellow laptop with black camera',
    '1x59 lenovo commercial yogo laptop',
    'LG supernova laptop Dell',
    'HTC low proce phone',
    'dell purple color phone eith Laptop'

];
const searching = 'dell'
// indexOf

const output = [];

for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product)
    }
}
// console.log(output); */

for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product)
    }
}
console.log(output);

// startsWith() search


for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        // output.push(product)
    }
}
console.log(output);

for (const product of products) {
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product)
    }

}
console.log(output);