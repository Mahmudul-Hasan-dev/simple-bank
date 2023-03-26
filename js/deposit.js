// console.log('deposit file connected');
//step 1: add event handler to the btn
//check event handler is working or not
//step 2: get access of inputfield from input field by id
//step 3: get value from that input field
//value getting method: by .value if it is input field or .innerText when from html element
//step 3.5: convert value from input field to number type

//step 4:clear the input field after getting value
//step 5: get the current deposit total
//step 6: get current balance total

//first step
document.getElementById('depositBtn').addEventListener('click', function () {

    //second step

    // console.log('deposit btn clicked')
    const depositField = document.getElementById('depositField');
    const newdepositAmountString = depositField.value;
    const newdepositAmount = parseFloat(newdepositAmountString);

    //va;idation
    if (isNaN(newdepositAmount)) {
        alert('please insert a value number');
        depositField.value = '';
        return;
    }

    //third step
    depositField.value = '';

    //fourth step

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalstring = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalstring);

    //fifth step
    const newDepositTotal = previousDepositTotal + newdepositAmount;

    //sixth step
    depositTotalElement.innerText = newDepositTotal;

    //seventh step
    const balanceTotalElement = document.getElementById('balance-total');
    const previousTotalAmountString = balanceTotalElement.innerText;
    const previousbalanceTotalAmount = parseFloat(previousTotalAmountString);

    //eigth step:add new deposit and previous total amount
    const newBalanceTotal = previousbalanceTotalAmount + newdepositAmount;

    //ninth step:set new balance total
    balanceTotalElement.innerText = newBalanceTotal;
})