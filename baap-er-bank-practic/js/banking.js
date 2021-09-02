// get deposit button 
document.getElementById('deposit-button').addEventListener('click', function () {
    //get deposit input
    const depositInput = document.getElementById('deposit-input');
    //get deposit input value 
    const newDepositText = depositInput.value;
    const depositInputAmount = parseFloat(newDepositText);
    //get deposit total 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    depositTotalAmount = parseFloat(depositTotalText);
    const newDepositTotal = depositTotalAmount + depositInputAmount;
    depositTotal.innerText = newDepositTotal;

    //update total balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText)

    const newBalanceTtoal = balanceTotalAmount + depositInputAmount;
    balanceTotal.innerText = newBalanceTtoal;

    depositInput.value = '';
})
//get withdraw button

document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    withdrawInputAmount = parseFloat(withdrawInputText);

    // withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    const newWithdrawAmount = withdrawTotalAmount + withdrawInputAmount;
    withdrawTotal.innerText = newWithdrawAmount;


    //update total balance after withdraw
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceTexe = totalBalance.innerText;
    totalBalanceAmount = parseFloat(totalBalanceTexe);

    const newTotalBalance = totalBalanceAmount - withdrawInputAmount;
    totalBalance.innerText = newTotalBalance;
    withdrawInput.value = '';

})