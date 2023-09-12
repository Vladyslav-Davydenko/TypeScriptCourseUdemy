"use strict";
class Dog {
    constructor() {
        this.bark = () => {
            console.log("The dog is barking");
        };
        this.myName = (n) => {
            return `${n} is barking`;
        };
    }
}
const dog = new Dog;
dog.bark();
console.log(dog.myName("Bobik"));
