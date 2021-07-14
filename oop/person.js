// Prototypal Inheritance
const Person = function(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}
Person.prototype.getBio = function() {
    let bio = `${this.firstName} is ${this.age}`

    this.likes.forEach((like) => {
        bio += `${this.firstName} likes ${like}.`
    })
    return bio
}

//  einai koino gia ola ta instances
Person.prototype.location = 'Thailand'

Person.prototype.setName = function(fullName) {
    const names = fullName.split(" ")
    this.firstName = names[0]
    this.lastName = names[1]
}
const me = new Person("andrew", "mead", 27, ['Teaching', 'Biking'])
const person2 = new Person("Clancey", "Tuner", "51")

console.log(me);