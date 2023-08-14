// Intersection type
// An intersection type combines multiple types into a single type. It's represented using the & symbol between the types. This is useful when you want to create a new type that must satisfy the structure of all the types involved.

interface Person {
    firstName: string;
    lastName: string;
}

interface Address {
    street: string;
    city: string;
}

type ContactInfo = Person & Address;

const contact: ContactInfo = {
    firstName: "John",
    lastName: "Doe",
    street: "123 Main St",
    city: "Anytown"
};



// Combining Union and Intersection Types:

// You can also combine union and intersection types to create more complex type definitions.

type StringOrNumber = string | number;
type NumberOrAddress = number | Address;

