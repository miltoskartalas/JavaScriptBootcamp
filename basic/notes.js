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


const sortNote = function (notes) {
    notes.sort(function (a, b) {
        if ( a.title.toLowerCase() < b.title.toLowerCase())
        {

            return -1 
        }
        else if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
        }
        else {
            return 0
        }
    })
}

sortNote(notes)
console.log(notes)