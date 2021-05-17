const todos = [
    {
        text: 'Order cat food',
        complete: 'true'
    },

    {
        text: 'Clean kitchen',
        complete: 'true'
    },

    {
        text: 'Buy food',
        complete: 'false'
    },
    {
        text: 'Do work',
        complete: 'false'
    },
    {
        text:'Exercise',
        complete: 'false'
    }
]

// const deleteTodo = function(todos,todoText) {
//     const index= todos.findeIndex(function (todo) {
//        return todo.text.toLowerCase() === todoText.toLowerCase()
//     })

//     if (index > -1 ) {
//         todos.splice(index,1)
//     }
// }
const sortTodos = function (notes) {
    notes.sort(function (a, b) {
        if ( a.complete.toLowerCase() ==  'true')
        {

            return -1 
        }
        else if (a.complete.toLowerCase() === 'false') {
            return 1
        }
        else {
            return 0
        }
    })
}
sortTodos (todos)
console.log(todos)
// filtering , taking an existent array and getting a new one
