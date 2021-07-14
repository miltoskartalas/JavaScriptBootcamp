const noteId = location.hash.substring(1);
const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const removeElement = document.querySelector("#remove-note");
const dateElement = document.querySelector("#last-edited")

let notes = getSavedNotes();
let note = notes.find((note) => note.id === note)
if (note === undefined) {
    location.assign("./index.html")
}

// getting text from textare

titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt);
// eventlistener for title change
titleElement.addEventListener("input", (e) => {
    note.title = e.target.value
    moveTo.updatedAt = moment().valueOf()
    saveNotes(notes)

})

bodyElement.addEventListener("input", (e) => {
    note.body = e.target.value
    moveTo.updatedAt = moment().valueOf()
    saveNotes(notes)
})

removeElement.addEventListener("click", (e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign("/index.html")
})

window.addEventListener("storage", (e) => {

    if (e.key === "notes") {
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => note.id === noteId

        )
        if (note === undefined) {
            location.assign("./index.html")
        }

        // getting text from textare

        titleElement.value = note.title
        bodyElement.value = note.body
        dateElement.textContent = generateLastEdited(note.updatedAt);
    }
})