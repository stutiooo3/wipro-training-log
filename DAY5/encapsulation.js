class BankAccount {
    #balance = 0; // private variable | Access modifier
 
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. Current Balance: ₹${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }
 
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. Current Balance: ₹${this.#balance}`);
        } else {
            console.log("Withdrawal amount must be positive and less than or equal to the current balance.");
        }
    }
 
    getBalance() {
        return this.#balance;
    }
}
 
const AryanAccount = new BankAccount();
AryanAccount.deposit(1000);
AryanAccount.withdraw(200);
// AryanAccount.balance = 10000;
console.log(`Final Balance: ₹${AryanAccount.getBalance()}`);
 
const PriyaAccount = new BankAccount();
PriyaAccount.deposit(500);
PriyaAccount.withdraw(1000);
console.log(`Final Balance: ₹${PriyaAccount.getBalance()}`);

// another example- student grade system

class Student {
    #marks = [];

    constructor(name) {
        this.name = name;
    }

    addMark(mark) {
        if (mark >= 0 && mark <= 100) {
            this.#marks.push(mark);
            console.log(`${this.name} got ${mark}`);
        } else {
            console.log("Invalid mark. Must be between 0 and 100.");
        }
    }

    getAverage() {
        if (this.#marks.length === 0) return 0;

        let total = this.#marks.reduce((a, b) => a + b, 0);
        return total / this.#marks.length;
    }

    getResult() {
        let avg = this.getAverage();

        if (avg >= 75) return "Distinction";
        if (avg >= 50) return "Pass";
        return "Fail";
    }
}