// Generics in TypeScript provide a way to create reusable components that can work with a variety of data types while maintaining type safety. They allow you to parameterize types, interfaces, and functions, making your code more flexible and reusable. Generic constraints further refine generics by restricting the types that can be used with them.

function swap<T>(a: T, b: T): void {
    const temp: T = a;
    a = b;
    b = temp;
}

let x = 5;
let y = 10;

swap(x, y);
console.log(x, y); // Output: 5 10


// In this example, T is a type parameter. When you call swap(x, y), TypeScript infers the type of T as number, and the function works with the provided types.

