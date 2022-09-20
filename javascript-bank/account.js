/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var deposit = new Transaction('deposit', amount);
  if (amount > 0 && Number.isInteger(amount) === true) {
    this.transactions.push(deposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  var withdraw = new Transaction('withdrawal', amount);
  if (amount > 0 && Number.isInteger(amount) === true) {
    this.transactions.push(withdraw);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  if (this.transactions.length > 0) {
    var totalFunds = 0;
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'deposit') {
        totalFunds += this.transactions[i].amount;
      } else if (this.transactions[i].type === 'withdrawal') {
        totalFunds -= this.transactions[i].amount;
      }
    }
    return totalFunds;
  } else {
    return 0;
  }
};

var account = new Account(42, 'Jeff Jefferson');
account.deposit(100);
account.withdraw(23);
account.getBalance();
