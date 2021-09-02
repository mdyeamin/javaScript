function makeRed() {
    document.body.style.backgroundColor = 'red'
}

function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;

// green button 
const greenButton = document.getElementById('make-green-button');
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green'
}
//hendel by using addEventListener
const goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener('click', goldenrodButton);

function goldenrodButton() {
    document.body.style.backgroundColor = 'goldenrod';
}

// hot pink 
const hotpinkButton = document.getElementById('make-hotpink');
hotpinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
});


// light blue direct shorcut
document.getElementById('make-lightblue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})