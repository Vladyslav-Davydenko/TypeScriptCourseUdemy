interface Animal{
    name: string
    age: number
    makeSound(): void
}

class Cat implements Animal{

    color: string
    brad: string
    name: string
    age: number

    constructor(color: string, brad: string){
        this.name = "Bob"
        this.age = 12
        this.brad = brad
        this.color = color
    }

    makeSound(): void {
        console.log(`Hi I am ${this.name} and I am ${this.age} years old and I am ${this.color} + ${this.brad}`)
    }
}

class Owner {
    constructor(public name: string, public age: number, public pet: Animal){
        this.name = name
        this.age = age
        this.pet = pet
    }

    animalSound() {
        this.pet.makeSound()
    }
}
const cat = new Cat("black", "british")
const tom = new Owner("Tom", 27, cat)

tom.animalSound()