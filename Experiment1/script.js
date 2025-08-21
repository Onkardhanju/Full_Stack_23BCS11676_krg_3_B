let balance = 0;

function deposit() {
  let amt = document.getElementById("amount").value;
  let message = document.getElementById("message");

  if (amt === "" || isNaN(amt) || Number(amt) <= 0) {
    message.innerText = "Enter a valid amount!";
    return;
  }

  balance += Number(amt);
  updateBalance();
  message.innerText = "Amount deposited!";
}

function withdraw() {
  let amt = document.getElementById("amount").value;
  let message = document.getElementById("message");

  if (amt === "" || isNaN(amt) || Number(amt) <= 0) {
    message.innerText = "Enter a valid amount!";
    return;
  }

  if (Number(amt) > balance) {
    message.innerText = "Not enough balance!";
    return;
  }

  balance -= Number(amt);
  updateBalance();
  message.innerText = "Amount withdrawn!";
}

function updateBalance() {
  document.getElementById("balance").innerText = balance;
  document.getElementById("amount").value = "";
}