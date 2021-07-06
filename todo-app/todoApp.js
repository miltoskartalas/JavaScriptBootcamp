// Dom document object model
//pairnw to element kai meta remove

// const p = document.querySelector("p");
// p.remove();
const todos = [
  {
    text: "Order cat food",
    complete: true,
  },

  {
    text: "Clean kitchen",
    complete: true,
  },

  {
    text: "Buy food",
    complete: false,
  },
  {
    text: "Do work",
    complete: false,
  },
  {
    text: "Exercise",
    complete: false,
  },
];
//print how many are left
//add a p for each todo above (use text value)
const incompleteTodos = todos.filter(function (todo) {
  return !todo.complete;
});

const filters = {
  searchText: "",
};

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });
  document.querySelector("#todos").innerHTML = "";
  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector("#todos").appendChild(summary);

  filteredTodos.forEach(function (todo) {
    const p = document.createElement("p");
    p.textContent = todo.text;
    document.querySelector("#todos").appendChild(p);
  });
};
renderTodos(todos, filters);

/* listen for todo text change */

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector("#name-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const textGiven = e.target.value;
  todos.push({
    text: e.target.elements.text.value,
    complete: false,
  });

  renderTodos(todos, filters);
  e.target.elements.text.value = " ";
});
textGiven;
