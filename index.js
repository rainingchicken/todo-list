const input = document.querySelector("input");

//create empty div to put todo in for styling
//create empty div
const parent = document.createElement("div");
parent.innerHTML = "";
parent.classList.add("parentDiv");

//get all existing elements from html body
const nodes = document.body.querySelectorAll("*");
//convert to elements
const elements = [...nodes];

//append to doc body
document.body.appendChild(parent);
//append all body lements into empty div
for (const el of elements) {
  // console.log(el);
  parent.appendChild(el);
}

//Add a todo

//access the button element
const button = document.getElementById("add-todo");
// console.log(button);
//fn to run when btn is clicked
function handleAddTodo() {
  const ul = document.getElementsByTagName("ul")[0];
  console.log(ul);
  //create an li to go into ul
  const li = document.createElement("li");
  //access the input el
  //set the input text to li text
  li.textContent = input.value;
  input.value = ""; //clear input
  //console.log(input);
  //append li item to ul as child el
  ul.appendChild(li);
}

//add am event listener to my button
button.addEventListener("click", handleAddTodo);

//styling
//body style
Object.assign(document.body.style, { boxSizing: "border-box" });

//parent div style
Object.assign(parent.style, {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "red",
  width: "50%",
  width: "50%",
  margin: "auto",
  marginTop: "10%",
});
