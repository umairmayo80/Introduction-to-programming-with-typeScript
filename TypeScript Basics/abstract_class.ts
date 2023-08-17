// Inheritance:
// Inheritance is a mechanism in which a new class (subclass or derived class) can inherit properties and methods from an existing class (superclass or base class). This allows you to create a hierarchy of classes with shared behavior. In TypeScript, you can use the extends keyword to establish an inheritance relationship between classes.

class Animal {
    constructor(public name: string) {}

    makeSound() {
        console.log("Some generic animal sound");
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name); // Call the constructor of the base class
    }

    makeSound() {
        console.log("Woof woof");
    }
}

const myDog = new Dog("Buddy");
myDog.makeSound(); // Output: "Woof woof"


// Abstract Classes:

// An abstract class is a class that cannot be instantiated directly and is meant to be a base for other classes. It can provide a blueprint for its subclasses by defining abstract methods and properties. Abstract methods are methods without an implementation in the abstract class, and subclasses must provide concrete implementations for these methods.
abstract class Shape {
    abstract getArea(): number;
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Square extends Shape {
    constructor(private sideLength: number) {
        super();
    }

    getArea() {
        return this.sideLength ** 2;
    }
}

const circle = new Circle(5);
console.log(circle.getArea()); // Output: ~78.54

const square = new Square(4);
console.log(square.getArea()); // Output: 16

