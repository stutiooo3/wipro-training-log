class User {
    constructor(name) {
        this.name = name;
    }
    logIn() {
        console.log(`${this.name} has logged in.`);
    }
}
 
class Admin extends User {
    constructor(name, role) {
        super(name); // call the parent class constructor
        this.role = role;
    }
    logIn() {
        super.logIn(); // call the parent class method
        console.log(`${this.name} has admin privileges as a ${this.role}.`);
    }
}
 
const user1 = new User("Alice");
const admin1 = new Admin("Bob", "Super Admin");
 
user1.logIn(); // Alice has logged in.
admin1.logIn(); // Bob has logged in. Bob has admin privileges as a Super Admin.

// example- payment system

class Payment {
    pay(amount) {
        throw new Error("pay() must be implemented");
    }
}

class CreditCardPayment extends Payment {
    pay(amount) {
        console.log(`Paid ₹${amount} using Credit Card`);
    }
}

class UpiPayment extends Payment {
    pay(amount) {
        console.log(`Paid ₹${amount} using UPI`);
    }
}

class CashPayment extends Payment {
    pay(amount) {
        console.log(`Paid ₹${amount} using Cash`);
    }
}

// abstraction in action
function makePayment(paymentMethod, amount) {
    paymentMethod.pay(amount);
}

// usage
makePayment(new CreditCardPayment(), 1000);
makePayment(new UpiPayment(), 500);
makePayment(new CashPayment(), 200);