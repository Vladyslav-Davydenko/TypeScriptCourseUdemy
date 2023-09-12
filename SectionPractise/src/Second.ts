type Sex = 
    | "Male"
    | "Female"

interface Animal {
    name: string,
    age: number,
    toys: string[]
    sex: Sex
}

interface Actions {
    bark: () => void,
    myName: (n: string) => string
}

interface Cat extends Animal {
    color: string,
    brad: string
}

class Dog implements Actions{
    bark = () => {
        console.log("The dog is barking")
    }

    myName = (n: string) => {
        return `${n} is barking`
    }
}

const dog: Dog = new Dog

dog.bark()
console.log(dog.myName("Bobik"))