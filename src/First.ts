type Age = number

type Person = {
    firstName: string,
    lastName: string,
    age: Age
    sayHi: SayHi
}

type Test = {
    test: string[]
}

const test: Test = {
    test: []
}

type SayHi = (name: string, age: number) => void

function Test(person: Person): void{
    console.log(`${person.firstName} ${person.lastName}`)
    const res = person.sayHi
    res(person.firstName, person.age)
}

const bob: Person = {
    firstName: "Bob",
    lastName: "Petrikov",
    age: 23,
    sayHi(name, age) {
        console.log(`Hi I am ${name} and I am ${age} years old`)
    }
}

Test(bob)