const notes = ['Note 1', 'Note 2', 'Note 3'];


// proshetei sto telos
notes.push(12)

//afairei apo to telos epistrefei ti den afairese
notes.pop()

//prosthetei sthn arxh tou array
notes.unshift()

// afairei to prwto stoixeio kai to epistrefei
notes.shift


//prwto argument apo pou xekinaei, deutero posa theloume na diaxrapsei
//px splice(1,2) ttha xekinhsei apo to prwto na afairesei 2 stoixeia ara to [0] kai [1]
notes.splice(1,2)

//gia na prosthesei apo ekei pou tha baloume px,, to paradeigma auto tha paei apo sto [1] kai tha balei to kainourgio note
//kai ta alla tha metakinithoun mia thesi dexia

notes.splice(0,0,'new note bro')

//tha prosthesei apla se auth th thesh to kainourgio to palio tha diaxrafei
notes[2] = 'bla bla'
console.log(notes)

