// In TypeScript, an interface is a way to define a contract that specifies the structure and shape of an object. It allows you to define the properties and methods that an object must have in order to be considered compatible with that interface. This helps with type checking and ensuring that objects conform to a certain structure.

interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

// Usage example


function greet(person: Person): string {
    return `Hello, ${person.firstName} ${person.lastName}! You are ${person.age} years old.`;
}


const john: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

console.log(greet(john)); // Output: Hello, John Doe! You are 30 years old.


const person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};



// Interfaces can be extended to create new interfaces based on existing ones:
interface Employee extends Person {
    employeeId: number;
    department: string;
}



// Interfaces can also support optional properties and readonly properties:
interface Book {
    title: string;
    author: string;
    year?: number;      // Optional property
    readonly isbn: string; // Readonly property
}



// Interfaces can also be used to describe functions:

interface MathFunction {
    (x: number, y: number): number;
}

const add: MathFunction = (x, y) => x + y;

