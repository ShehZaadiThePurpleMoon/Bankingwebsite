function getInput(inputId){
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputAmount = parseFloat(inputText) 

    inputField.value = '';

    return inputAmount;
}

function updateTotal(updateId, newdepositAmount){
    const depositTotal = document.getElementById(updateId);
    const priviousDepositText = depositTotal.innerText;
    const priviousDepositAmount = parseFloat(priviousDepositText)
    //previous amount + new input amount add
    depositTotal.innerText = priviousDepositAmount + newdepositAmount;

}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-input');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText)
    return balanceTotalAmount;
}


function updateBalance(Amount,isAdd){
    const balanceTotal = document.getElementById('balance-input');
    const balanceTotalAmount = getCurrentBalance()
    if(isAdd == true){
       balanceTotal.innerText = balanceTotalAmount + Amount; 
    }else{
        balanceTotal.innerText = balanceTotalAmount - Amount; 
    }
}



document.getElementById('deposit-button').addEventListener('click', function(){
    //get input with function

    const newdepositAmount = getInput('deposit-input')
    //update total with function 

    if(newdepositAmount > 0){
        updateTotal('deposit-total', newdepositAmount);
    updateBalance(newdepositAmount,true)
    }
    //depositInput.value = '';

})

document.getElementById('withdraw-button').addEventListener('click', function() {

    const withdrawInputAmount = getInput('withdraw-input')
    const CurrentBalance = getCurrentBalance()
   if(withdrawInputAmount > 0 && withdrawInputAmount < CurrentBalance){
    updateTotal('withdraw-total',withdrawInputAmount);
    updateBalance(withdrawInputAmount,false)
   }

   if(withdrawInputAmount > CurrentBalance){
    const error = document.getElementById('error');
    error.innerText = 'Please enter the correct Amount';
   }

})