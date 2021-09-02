
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit and calling again', pin)
        return getPin();
    }

}

function generatePin() {
    const pin = getPin()
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {

        const previouseNumber = calcInput.value;
        const newNumber = previouseNumber + number;
        calcInput.value = newNumber;
    }

})

function veifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typeNumbers = document.getElementById('typed-numbers').value;

    const notifySuccess = document.getElementById('notify-success');
    const fialError = document.getElementById('notify-fail');
    if (pin == typeNumbers) {

        notifySuccess.style.display = 'block';
        fialError.style.display = 'none'
    }
    else {

        fialError.style.display = 'block'
        notifySuccess.style.display = 'none';

    }
}
