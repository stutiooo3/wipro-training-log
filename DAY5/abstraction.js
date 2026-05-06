class Shape {
    draw() {
        console.log('Drawing a shape');
    }
}
 
class Circle extends Shape {
    draw() {
        console.log('Drawing a circle');
    }
}
 
class Square extends Shape {
    draw() {
        console.log('Drawing a square');
    }
}
 
const shapes = [new Circle(), new Square()];
 
shapes.forEach(shape => shape.draw());
 
class CoffeMachine {
    #waterTemperature = 90;
 
    #boilWater() {
        return `Boiling water to ${this.#waterTemperature} degrees.`;
    }
 
    #grindBeans() {
        return "Grinding beans.";
    }
 
    brew() {
        const boilMessage = this.#boilWater();
        const grindMessage = this.#grindBeans();
        return `${boilMessage} ${grindMessage} Brewing coffee.`;
    }
}
 
const myCoffeMachine = new CoffeMachine();
console.log(myCoffeMachine.brew());
 

// example- atm pin

class ATM {
    #balance = 1000;
    #pin = 1234;

    // Public method (what user sees)
    withdraw(amount, enteredPin) {
        if (!this.#authenticate(enteredPin)) {
            console.log("Incorrect PIN");
            return;
        }

        if (!this.#hasSufficientBalance(amount)) {
            console.log("Insufficient balance");
            return;
        }

        this.#processWithdrawal(amount);
        console.log(`Please collect ₹${amount}`);
    }

    // abstraction
    #authenticate(pin) {
        return pin === this.#pin;
    }

    #hasSufficientBalance(amount) {
        return amount <= this.#balance;
    }

    #processWithdrawal(amount) {
        this.#balance -= amount;
    }

    checkBalance(pin) {
        if (this.#authenticate(pin)) {
            console.log(`Balance: ₹${this.#balance}`);
        } else {
            console.log("Incorrect PIN");
        }
    }
}