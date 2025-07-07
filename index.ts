type person = {
  name: string;
  age: number;
  isStudent: boolean;
};  
let person1: person = {
  name: "John",
  age: 25,
  isStudent: false,
};        

let person2: person = {
  name: "Jane",
  age: 22,
  isStudent: true,
};  

let people: person[] = [person1, person2]; 
// let people: Array<person> = [person1, person2]; is the same as above
