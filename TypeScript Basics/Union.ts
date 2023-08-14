// Union Types:
// A union type allows a value to be of multiple types. It's represented using the | symbol between the types. This is useful when a function or variable can accept multiple types of values.

function printID(id: number | string): void {
    console.log(`ID: ${id}`);
}

printID(123);      // Output: ID: 123
printID("ABC456"); // Output: ID: ABC456
