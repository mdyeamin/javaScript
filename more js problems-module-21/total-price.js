const products = [
    { name: 'laptop', price: 47000 },
    { name: 'shirt', price: 500 },
    { name: 'watch', price: 3680 },
    { name: 'phone', price: 55000 }
];

let totalPrice = 0;
for (const product of products) {
    totalPrice = totalPrice + product.price;
}
// console.log(totalPrice);

// mega shopping 

const card = [
    { name: 'laptop', price: 43000, quantity: 1 },
    { name: 'shirt', price: 500, quantity: 8 },
    { name: 'watch', price: 3680, quantity: 3 },
    { name: 'phone', price: 55000, quantity: 1 }
];
let cardTotal = 0;
for (const product of card) {
    // console.log(product);
    const productTotal = product.price * product.quantity;
    cardTotal = cardTotal + productTotal;
}
console.log(cardTotal);