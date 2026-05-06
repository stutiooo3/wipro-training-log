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
 
shapes.forEach(shape => shape.draw())

// example-vehicle

class Vehicle {
    start() {
        throw new Error("start() must be implemented");
    }
}

class Car extends Vehicle {
    start() {
        console.log("Car starts with a key");
    }
}

class Bike extends Vehicle {
    start() {
        console.log("Bike starts with a kick");
    }
}

class ElectricScooter extends Vehicle {
    start() {
        console.log("Scooter starts with a button");
    }
}

// Using abstraction
const vehicles = [
    new Car(),
    new Bike(),
    new ElectricScooter()
];

vehicles.forEach(v => v.start());

 