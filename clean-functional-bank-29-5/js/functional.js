
function getInputValue(filedId) {
    const inputFiled = document.getElementById(filedId);
    const valueInText = inputFiled.value;
    const value = parseFloat(valueInText)
    inputFiled.value = '';
    return value;
}
function getInnerTextValue(filedId) {
    const filedTag = document.getElementById(filedId);
    const filedValueInText = filedTag.innerText;
    const value = parseFloat(filedValueInText);
    return value;
}
function updateTotal(filedId, amount) {
    const totalId = document.getElementById(filedId);
    const previousTotalInText = totalId.innerText;
    const perviousTotal = parseFloat(previousTotalInText);
    const newTotal = perviousTotal + amount;
    totalId.innerText = newTotal;
    // return newTotal;
}
function updateBalance(amount, isAdd) {
    const balanceTag = document.getElementById('balance-total')
    const balanceInText = balanceTag.innerText;
    const previouseBalance = parseFloat(balanceInText);

    let newBalance
    if (isAdd == true) {
        newBalance = previouseBalance + amount;
    }
    else {
        newBalance = previouseBalance - amount;
    }
    balanceTag.innerText = newBalance;

}
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');

    if (amount > 0) {
        updateTotal('deposit-total', amount);
        updateBalance(amount, true)
    }
})
// withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {

    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false)
    }
})