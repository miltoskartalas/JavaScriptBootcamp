// let myBook = {
//     title: '1985',
//     author: 'George Orwell',
//     pageCount: 345
// }



// let otherBook = {
//     title: 'A peoples history',
//     author: 'Howard Zinn',
//     pageCount: 250
// }

// let getSummary = function(book){
//     return {
//         summary: `${book.title} by ${book.author}`,
//         pageCountSummary: `${book.title} is ${book.pageCount} pages long`
//     }
// }

// let bookSummary = getSummary(myBook)
// let otherBookSummary = getSummary(otherBook)

// console.log(bookSummary.pageCountSummary)

let convertFahrein = function(temp) {
    return {
        temp: temp,
        kelvin: (temp + 459.67) * ( 5 / 9),
        celsius: (temp - 32 ) * ( 5 / 9)
    }
}

let temps = convertFahrein(74)

console.log(temps)