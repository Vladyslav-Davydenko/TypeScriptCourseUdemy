"use strict";
function Test(person) {
    console.log(`${person.firstName} ${person.lastName}`);
    const res = person.sayHi;
    res(person.firstName, person.age);
}
const bob = {
    firstName: "Bob",
    lastName: "Petrikov",
    age: 23,
    sayHi(name, age) {
        console.log(`Hi I am ${name} and I am ${age} years old`);
    }
};
Test(bob);
