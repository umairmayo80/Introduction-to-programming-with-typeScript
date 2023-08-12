// In TypeScript, a class is a blueprint for creating objects that have both properties and methods. It provides a way to define a custom data type with a specific structure and behavior. Here are some examples of using classes in TypeScript:
// Example 1: Basic Class Definition and Instance Creation

class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet(): string {
        return `Hello, ${this.firstName} ${this.lastName}!`;
    }
}

const john = new Person("John", "Doe");
console.log(john.greet()); // Output: Hello, John Doe!


// Example 2: Inheritance and Method Overriding
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): string {
        return "Some sound";
    }
}

class Dog extends Animal {
    makeSound(): string {
        return "Woof woof!";
    }
}

const dog = new Dog("Buddy");
console.log(dog.makeSound()); // Output: Woof woof!



// Example 3: Access Modifiers and Properties
class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient balance.");
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // Output: 1300



// 
export {}