var govJob = true;
var mySaveMony = 170000;
var hasFlat = true;
var hasBuilding = false;

if (govJob == true && mySaveMony >= 200000) {
    console.log('colo bia kore feli')
}
else {
    console.log('tor kopale bia nai')
}


if ((govJob == true && mySaveMony >= 200000) || hasFlat == true && hasBuilding) {
    console.log('colo bia kore feli')
}
else {
    console.log('tor kopale bia nai')
}