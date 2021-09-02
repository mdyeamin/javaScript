function megaFreind(freinds) {

    if (Array.isArray(freinds) == false) {
        return 'pleace provid an array'
    }

    let mega = freinds[0];
    for (const freind of freinds) {
        if (freind.length > mega.length) {
            mega = freind;
        }
    }
    return mega;
}
const freinds = ['miraj', 'tanim', 'Lion', 'yemin ahamed'];
const myBigBuddy = megaFreind(freinds);
// console.log(myBigBuddy);

if (freinds.indexOf('Lion') != -1) {
    // console.log('lopn exists');
}
else {
    // console.log('opps');
}
if (freinds.includes('Lion')) {
    // console.log('hi');
}

const first = [1, 2, 3, 5];
const secund = [4, 5, 7, 8];
const combained = first.concat(secund);
console.log(combained);