//Add a todo

//access the button element
const button = document.getElementById("add-todo");
// console.log(button);
//fn to run when btn is clicked
function handleAddTodo() {
  console.log("button is clicked");
}
//add am event listener to my button
button.addEventListener("click", handleAddTodo);
