const first = document.getElementById('first');
const secund = document.getElementById('second');
const third = document.getElementById('third');
const image = document.getElementById('art');
const desc = document.getElementById('desc');
const price = document.getElementById('price');
const freeShipping = document.getElementById('free-shipping');
const expressShipping = document.getElementById('express-shipping');
const shippingCharge = document.getElementById('shipping-charge');
const total = document.getElementById('total');

function activeBorder(elem) {
    return elem.classList.contains('selected')
}

// update total
function updateTotal() {

    const grandTotal = parseInt(shippingCharge.innerText) + parseInt(price.innerText);
    total.innerText = grandTotal;
}

first.addEventListener('click', function () {
    if (!activeBorder(first)) {
        first.classList.add('selected')
        secund.classList.remove('selected')
        third.classList.remove('selected')
    }
    image.src = 'images/1.jpg'
    desc.innerText = "First : Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos aut accusamus, ipsam iusto illum error nisi! Deserunt facilis ratione nobis! ";
    price.innerText = '750'
    updateTotal()
})
secund.addEventListener('click', function () {
    if (!activeBorder(secund)) {
        first.classList.remove('selected')
        secund.classList.add('selected')
        third.classList.remove('selected')
    }
    image.src = 'images/2.jpg'
    desc.innerText = "Secund : Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos aut accusamus, ipsam iusto illum error nisi! Deserunt facilis ratione nobis! ";
    price.innerText = '550'
    updateTotal()
})

third.addEventListener('click', function () {
    if (!activeBorder(third)) {
        first.classList.remove('selected')
        secund.classList.remove('selected')
        third.classList.add('selected')
    }
    image.src = 'images/3.jpg'
    desc.innerText = "Third : Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos aut accusamus, ipsam iusto illum error nisi! Deserunt facilis ratione nobis! ";
    price.innerText = '350'
    updateTotal()
})

freeShipping.addEventListener('click', function () {
    if (!activeBorder(freeShipping)) {
        freeShipping.classList.add('selected')
        expressShipping.classList.remove('selected')
    }
    shippingCharge.innerText = '5';
    updateTotal()
})
expressShipping.addEventListener('click', function () {
    if (!activeBorder(expressShipping)) {
        freeShipping.classList.remove('selected')
        expressShipping.classList.add('selected')
    }
    shippingCharge.innerText = '30';
    updateTotal()
})


