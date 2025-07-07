// Nested objects types 
type Address = {
  street: string;
    city: string;
    country: string;

}
type Person = {
  name: string;
  age: number;
  isStudent: boolean; // optional property
  address?: Address; // nested object type
  }; 
let person1: Person = {
  name: "ismail shariff",
  age: 26,
  isStudent: true,
};
let person2: Person = {
  name: "john doe",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA"
  }
}

function displayInfo(person) {
  console.log(`${person.name} lives at ${person.address?.street}`);
}
displayInfo(person1); // Output: ismail shariff lives at undefined