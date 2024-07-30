class Account {
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}, New Balance: ${this.#balance}`);
    } else {
      console.log(`Amount must be positive`);
    }
  }

  withdraw(amount) {
    if (amount > 0) {
      if (this.#balance >= amount) {
        this.#balance -= amount;
        console.log(`Withdrew: ${amount}, New Balance: ${this.#balance}`);
      } else {
        console.log("Insufficient funds");
      }
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount = new Account(1000);

myAccount.deposit(50);
console.log(myAccount.getBalance());

myAccount.withdraw(200);
console.log(myAccount.getBalance());
