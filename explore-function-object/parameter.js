function bringShingara(taka) {
    console.log("shingarar jonno dise ", taka)
    console.log('mama shingara den');
    var shingaraPrice = 10;
    var shingaraQuantity = taka / shingaraPrice;
    return shingaraQuantity
}
var money = 230;
var shingara = bringShingara(money)
console.log(shingara)