// Nested objects types 
type Person = {
  name: string;
  age: number;
  isStudent: boolean; // optional property
  address: {
    street: string;
    city: string;
    country: string;
  };
};
let person1: Person = {
  name: "ismail shariff",
  age: 26,
  isStudent: true,
  address: {
    street: "3302 12th Ave",
    city: "minnesota",
    country: "USA"
  }
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
};