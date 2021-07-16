// Prototypal Inheritance

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}`

        this.likes.forEach((like) => {
            bio += `${this.firstName} likes ${like}.`
        })
        return bio
    }
    set Name(fullName) {
        const names = fullName.split(" ")
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const myPerson = new Person("andrew", "mead", 27, ["teaching"])
console.log(myPerson)

const me = new Person("andrew", "mead", 27, ['Teaching', 'Biking'])
const person2 = new Person("Clancey", "Tuner", "51")


class Employee extends Person {
    constructor(firstName, lastName, age, position, likes = []) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}`
    }

    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade

    }
    getBio() {
        const status = this.grade >= 70 ? "passing" : "failing"
        return `${this.firstName} is ${status} the class`
    }
    updateGrade(change) {
        this.grade += change
    }
}