/*
 1.add event handler to the button.
 2.give action to the event listener.
 check every action you take by doing console.log


3.get the value from input field by id
4.convert the value to number
5.get the value from display field
6.convert the value into number type
7.add the total
8.empty the input field

*/
//step 1
document.getElementById('withdrawBtn').addEventListener('click', function () {
    // console.log('clicked')
    // step 2
    const withdrawField = document.getElementById('withdrawField');
    const withdrawfieldString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawfieldString);

    //step 2.5
    withdrawField.value = ''

    //for validation we have to put it here step 6
    const prevBalanceTotal = document.getElementById('balance-total');
    const prevBalanceTotalString = prevBalanceTotal.innerText;
    const prevBalanceTotalAmount = parseFloat(prevBalanceTotalString);
    //validation
    if (withdrawAmount > prevBalanceTotalAmount) {
        alert('you dont have enough money');
        return;
    }
    //step 3
    const previouswithdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawTotalstring = previouswithdrawTotal.innerText;
    const previouswithdrawTotalAmount = parseFloat(previouswithdrawTotalstring);

    //step 4
    const newWithdrawTotal = previouswithdrawTotalAmount + withdrawAmount;

    //step 5
    previouswithdrawTotal.innerText = newWithdrawTotal;

    //step 6

    // const prevBalanceTotal = document.getElementById('balance-total');
    // const prevBalanceTotalString = prevBalanceTotal.innerText;
    // const prevBalanceTotalAmount = parseFloat(prevBalanceTotalString);

    //step 7

    const newBalanceTotal = prevBalanceTotalAmount - withdrawAmount;

    //step 8
    prevBalanceTotal.innerText = newBalanceTotal;
})