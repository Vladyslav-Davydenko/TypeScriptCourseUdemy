interface Dog {
    name: string
    age: number
}

const dogs: Array<Dog> = []

dogs.push({name: "bob", age: 10})

function createArray<T>(data: T): Array<T>{
    return [data]
}

console.log(createArray("Tom"))

type Test = {
    id: string
    money: number
}

type extendedTest = Test & {
    isOk: boolean
}

function changeIsOkay<T extends extendedTest>(arr: T, value: boolean): void{
    arr.isOk = value
}

const test: extendedTest = {
    id: "432ewr43f",
    money: 1000000,
    isOk: false
}

changeIsOkay<extendedTest>(test, true)

const bob1 = {
    name: "Bob1",
    isOk: true
}

const bob2 = {
    name: "Bob2",
    money: 123442
}

function mergePeople<T extends object, G extends object>(person1: T, person2: G): T & G{
    return {...person1, ...person2}
}

console.log(mergePeople(bob1, bob2))