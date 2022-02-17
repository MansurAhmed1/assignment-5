/** @format */

// All input value select
function allInput(input) {
  var input = document.querySelector(input);
  var inputValue = input.value;
  return inputValue;
}

// all div select
function innerText(balance) {
  var divSelect = document.querySelector(balance);
  return divSelect;
}

// calculate button click
document
  .querySelector(".calculate-button")
  .addEventListener("click", function () {

    var incomeInputValue = allInput(".income-input-feild");
    var foodInputValue = allInput(".food-input-feild");
    var rentInputValue = allInput(".rent-input-feild");
    var clothesInputValue = allInput(".clothes-input-feild");
    var expensesMoney = innerText(".expenses-money");

    var balancemoney = innerText(".balance-money");
    var balanceError = innerText(".balance-error");

    var incomeError = innerText(".income-error");

    var foodError = innerText(".food-error");
    var rentError = innerText(".rent-error");
    var clothesError = innerText(".cloths-error");

    // total expense
    var totalExpenses =
      parseFloat(foodInputValue) +
      parseFloat(rentInputValue) +
      parseFloat(clothesInputValue);
    //    total balnce
    var balance = parseFloat(incomeInputValue) - totalExpenses;

    //  all condition
    if (
      incomeInputValue !== "" &&
      foodInputValue !== "" &&
      rentInputValue !== "" &&
      clothesInputValue !== "" &&
      balance >= 0
    ) {
      expensesMoney.innerText = totalExpenses;

      balancemoney.innerText = balance;
    }


    if (balance < 0) {
      balanceError.innerHTML = `<span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg></span> expense is getter than income`;
      expensesMoney.innerText = totalExpenses;
    }
    
    
    else{
      balanceError.innerText = '';
    
    }

    

    if (incomeInputValue < 0) {
      incomeError.innerHTML = `<span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg></span> please enter positive value to Income input!!`;
    } else incomeError.innerText = "";

    if (foodInputValue < 0) {
      foodError.innerHTML = `<span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg></span> please enter positive value to Food input!!`;
    } else foodError.innerText = "";
    if (rentInputValue < 0) {
      rentError.innerHTML = `<span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg></span> please enter positive value to Rent input!!`;
    } else rentError.innerText = "";

    if (clothesInputValue < 0) {
      clothesError.innerHTML = ` <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg></span> please enter positive value to Cloth input!!`;
    } else clothesError.innerText = "";

    if (isNaN(incomeInputValue)) {
      incomeError.innerHTML = ` <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
   <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
 </svg></span> please enter number value to Income input!!`;
    }

   

    if (isNaN(foodInputValue)) {
      foodError.innerHTML = ` <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg></span> please enter number value to Food input!!`;
    }

    if (isNaN(rentInputValue)) {
      rentError.innerHTML = ` <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg></span> please enter number value to Rent input!!`;
    }

    if (isNaN(clothesInputValue)) {
      clothesError.innerHTML = ` <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg></span> please enter number value to Clothes input!!`;
    }
   
  });

// Save button click

document.querySelector(".save-button ").addEventListener("click", function () {
  var saveParcentageValue = allInput(".save-parcentage");

  var incomeInputValue = allInput(".income-input-feild");

  var remainingBalnce = innerText(".ramining-balance");
  
  var savingError = innerText(".saving-error");
  var saveAmount=innerText(".saving-amount");
  // save amount
  var saveamount =
    parseFloat(incomeInputValue) * (parseFloat(saveParcentageValue) / 100);
  //  all condition
  if (saveParcentageValue > 0) {
    //    set save amount
    saveAmount.innerText = saveamount;
 
  


    var balanceMoney = innerText(".balance-money");
    var balanceMoneyValue = balanceMoney.innerText;

    if (saveamount < balanceMoneyValue) {
      // remaining balance
      remainingBalnce.innerText = parseFloat(balanceMoneyValue) - saveamount;
      savingError.innerHTML = "";

    } else if (saveamount > balanceMoneyValue ) {
    
      remainingBalnce.innerText=0;
    
      savingError.innerHTML = ` <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg></span> saving money getter than balance money!!`;
    }
    

 
  }
  
  
});
