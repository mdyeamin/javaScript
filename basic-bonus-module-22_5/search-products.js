const products = [
    { name: 'samsung s3 phone', price: 12000 },
    { name: 'asus laptop d34', price: 32000 },
    { name: 'apple smart watch', price: 18000 },
    { name: 'bosundhara binding paper', price: 80 },
    { name: 'lg smart phone', price: 10000 },
    { name: 'old granny land phone', price: 100 }
];

function searchProducts(products, searchText) {
    for (const product of products) {
        if (product.price.indenOf('phone')) {

        }
    }
}
const matched = searchProducts(products, 'phone');
console.log(matched);