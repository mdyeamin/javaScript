
//card title color changed
const card = document.getElementsByClassName('card-title');
for (const cards of card) {
    cards.style.color = 'lightblue';
};


// backpeck section background changed
document.getElementById('backpack').style.backgroundColor = 'tomato';



// all card 30px boeder radius
const cardBorder = document.getElementsByClassName('card')

for (const card of cardBorder) {
    card.style.borderRadius = '30px';
}

// button click korle console e message jabe 

const btnConsole = document.getElementById('cardBtn1');
btnConsole.addEventListener('click', function () {
    // console.log('button clicked');
})

// button clicked and remove button

const removeBtn = document.getElementsByClassName('btn');
for (const removeButton of removeBtn) {
    removeButton.addEventListener('click', function () {
        removeButton.removeChild = (removeButton)
    })
}