// Decorators are a powerful feature in TypeScript that allow you to attach metadata and behavior to classes, methods, properties, and parameters at design time. They are widely used in frameworks like Angular to provide additional functionality and configuration to various parts of your codebase. Decorators are a way to extend or modify the behavior of your code without actually modifying the code itself.

// Decorators are applied using the @ symbol followed by the decorator name above the target entity. The decorator function is then executed with information about the target and can modify it if needed. Decorators can be used with classes, class methods, class properties, and method parameters.

// Here's a basic example of a class decorator:

function MyClassDecorator(target, temp) {
    console.log("Class decorator called on:", target);
    console.log("Class decorator called on:", temp);
}

@MyClassDecorator
class MyClass {
    constructor() {
        console.log("MyClass constructor");
    }
}

const myInstance = new MyClass(); // Output: "Class decorator called on:" [Function: MyClass]
                                  //         "MyClass constructor"


export {};