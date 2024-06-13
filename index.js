//Add a todo

//access the button element
const button = document.getElementById("add-todo");
// console.log(button);
//fn to run when btn is clicked
function handleAddTodo() {
  const ul = document.querySelector("ul");
  console.log(ul);
  //create an li to go into ul
  const li = document.createElement("li");
  //access the input el
  //set the input text to li text
  const input = document.querySelector("input");
  li.textContent = input.value;
  //console.log(input);
  //append li item to ul as child el
  ul.appendChild(li);
}

//add am event listener to my button
button.addEventListener("click", handleAddTodo);
