let balance = 0;

function updateBalance(amount) {
    document.getElementById("balanceAmount").textContent = "$" + amount.toFixed(2);
}

function checkBalance() {
    alert("Your current balance is: $" + balance.toFixed(2));
}

function depositMoney() {
    let depositAmount = parseFloat(prompt("Enter the amount to deposit:"));
    if (!isNaN(depositAmount) && depositAmount > 0) {
        balance += depositAmount;
        updateBalance(balance);
        alert("Deposit successful!");
    } else {
        alert("Invalid amount! Please enter a valid number.");
    }
}

function withdrawMoney() {
    let withdrawalAmount = parseFloat(prompt("Enter the amount to withdraw:"));
    if (!isNaN(withdrawalAmount) && withdrawalAmount > 0 && withdrawalAmount <= balance) {
        balance -= withdrawalAmount;
        updateBalance(balance);
        alert("Withdrawal successful!");
    } else if (withdrawalAmount > balance) {
        alert("Insufficient balance! Withdrawal failed.");
    } else {
        alert("Invalid amount! Please enter a valid number.");
    }
}
