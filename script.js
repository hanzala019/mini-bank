
let depositBtn = document.querySelector('#deposit');
let withdrawBtn = document.querySelector('#withdraw');
let inputDeposit = document.querySelector('#input-deposit');
let inputWithdraw = document.querySelector('#input-withdraw');
let balance = document.querySelector('#balance-amount');




depositBtn.addEventListener('click',addAmount);

withdrawBtn.addEventListener('click',reduceAmount);

function addAmount(){
    let deposit = document.querySelector('#deposit-amount').innerHTML;
    let input = parseFloat(inputDeposit.value);
    console.log(input);
    if((input >0), (input<= 10000)){
        depositNumber = parseFloat(deposit);
        console.log(depositNumber);
        let total = input + depositNumber;
        let currentBalance = parseFloat(balance.innerHTML);
        document.querySelector('#deposit-amount').innerHTML=total
        document.querySelector('#balance-amount').innerHTML = input + currentBalance;
        console.log(total);
        
    } else {
        alert('add numerical value');
    }
    
    update();
}

function reduceAmount(){
    let withdraw = document.querySelector('#withdraw-amount');
    let input = parseFloat(inputWithdraw.value);
    console.log(input);
    if((input >0), (input<= 10000)){
        withdrawNumber = parseFloat(withdraw.innerHTML);
        console.log(depositNumber);
        let total = input + withdrawNumber;
        let currentBalance = parseFloat(balance.innerHTML);
        document.querySelector('#withdraw-amount').innerHTML=total
        document.querySelector('#balance-amount').innerHTML = currentBalance - input;
        console.log(total);
        
    }  else {
        alert('add numerical value');
    }    
    update();
}

function update(){
 document.querySelector('#input-deposit').value='';
 document.querySelector('#input-withdraw').value='';
}









