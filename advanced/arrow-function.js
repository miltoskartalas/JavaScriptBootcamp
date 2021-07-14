// short
const square = (num) => num * num

// long 
const squareLong = (num) => {
    return num * num
}

const people = [{
    name: Miltos,
    age: 27
}, {
    name: Maria,
    age: 31
}, {
    name: antonia,
    age: 22
}]


// const under30 = people.filter(function(person) {
//     return person.age < 30
// })

// arrow 
const under30 = people.filter((person) => person.age < 30)


const equal22 = people.find((person) => person.age === 22)