var input = 01;

if (input >= 60) {
    console.log("vary ole man");
}

else if (input >= 45 && input < 60) {
    console.log("old man");
}
else if (input >= 35 && input < 45) {
    console.log("bary young man");
}

else if (input >= 15 && input < 35) {
    console.log("young man");
}
else if (input >= 7 && input < 15) {
    console.log("child");
}
else if (input >= 1 && input < 15) {
    console.log("baby")
}
else {
    console.log("invelid age")
}