const notes = [
     {
         title: 'My next trip',
         body: 'I would like to go to spain'
     },
     {
         title: 'Habbits to work on',
         body:'Exercise, Eating a bit better'
     },
     {
         title: 'Office modification',
         body: ' Get a new seat'
     }
];


// function to find a specifif object in an array of objects
const findNote = function (notes, noteTitle) {

    const indexReturned = notes.findIndex (function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return  notes[indexReturned]
}


const filteredNotes = notes.filter(function(note, index)  {
    return notes.filter(function(note,index) {
        const isTitleMatch = note.title.toLowerCase().include('ne')
        const isBodyMatch = note.body.toLowerCase().include('ne')
        return isTitleMatch || isBodyMatch
    })
}

console.log(filteredNotes)
// const note = findNote(notes, 'Office modification')
// console.log(note) 