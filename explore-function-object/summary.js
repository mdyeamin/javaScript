
var phones = ["iphone", "samsung", "lava", "oppo", "motorola", "walton"]
phones[3] = "xeaomi";

if (phones.indexOf('oppo') == -1) {
    console.log("opps this oppo is not avaiable")

}

if (phones.indexOf("xeaomi") != -1) {
    console.log("this xeaomi is available")
}
var oppoPhone = phones.indexOf("oppo")
console.log(oppoPhone);

console.log(phones.indexOf("xeaomi"));