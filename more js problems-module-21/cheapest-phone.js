const phones = [
    { name: 'samsung', price: 45000, camera: 10, storage: 64 },
    { name: 'xiaomi', price: 35000, camera: 12, storage: 64 },
    { name: 'vivo', price: 25000, camera: 8, storage: 32 },
    { name: 'oppo', price: 12000, camera: 7, storage: 16 },
    { name: 'lava', price: 8000, camera: 6, storage: 16 },
    { name: 'nokia', price: 13000, camera: 9, storage: 16 },
    { name: 'motorola', price: 15000, camera: 10, storage: 64 },
]

let cheapest = phones[0];
for (let phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);