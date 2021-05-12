let name = ' Miltos Kartalas  '


console.log(name.length)

// convert to uppercase

console.log(name.toUpperCase())


// checking
console.log(name.includes('Kart'))


// trim

console.log(name.trim())

let isValidPassword= function(password ) {

     return password.length > 8 && !password.includes('password')
}


console.log(isValidPassword('password'))