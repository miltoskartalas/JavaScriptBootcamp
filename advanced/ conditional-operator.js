// if (myAge >= 18) {

//     message = 'you can vote!'
// } else {
//     message = 'you cannot vote'
// }

// message = myAge >= 18 ? 'you can vote ' : 'you cannot vote'

const myAge = 27

const showPage = () => {
    console.log("showing the page")
}
const showErrorPage = () => {
    console.log("showing error page")
}

myAge >= 21 ? showPage() : showErrorPage()