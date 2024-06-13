//add font to html head
document.head.innerHTML += `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Handlee&display=swap" rel="stylesheet">
`;

//element variables
const input = document.querySelector("input");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const nodes = document.body.querySelectorAll("*"); //get all existing elements from html body
const ul = document.getElementsByTagName("ul")[0];
const addButton = document.getElementById("add-todo"); //add to do btn
const resetButton = document.getElementById("reset-btn");
const initial_li = document.querySelector("li");

//colors
//https://www.color-hex.com/color-palette/1147
const bodyColor = "#b8dbd3";
const addButtonColor = "#68c4af";
const resetButtonColor = "#96ead7";
//create empty div to put todo in for styling
const parent = document.createElement("div");
parent.innerHTML = "";
parent.classList.add("parentDiv");

//convert to elements
const elements = [...nodes];

//append to doc body
document.body.appendChild(parent);
//append all body lements into empty div
for (const el of elements) {
  // console.log(el);
  parent.appendChild(el);
}

//set placeholder for input incase user cant see where to put input due to poor sight
input.setAttribute("placeholder", "Input more todos here");

//when putting everything into empty div, li got unnested from ul so put it back
ul.appendChild(initial_li);
//Add a todo
//fn to run when btn is clicked
function handleAddTodo() {
  //create an li to go into ul
  const li = document.createElement("li");
  //set the input text to li text
  li.textContent = input.value;
  input.value = ""; //clear input
  //append li item to ul as child el
  ul.appendChild(li);
}

//add am event listener to my button
addButton.addEventListener("click", handleAddTodo);

//styling
//body style

Object.assign(document.body.style, {
  boxSizing: "border-box",
  backgroundColor: bodyColor,
  fontFamily: '"Handlee", cursive',
  fontWeight: "400",
  fontStyle: "normal",
});

//h1 style
Object.assign(h1.style, { textAlign: "center" });

//h2 style
Object.assign(h2.style, { textAlign: "center" });

//parent div style
Object.assign(parent.style, {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  width: "400px",
  margin: " 10% auto",
  padding: "3em",
  boxShadow: "12px 12px 2px 1px black",
});

//buttons style
Object.assign(addButton.style, {
  alignSelf: "center",
  textAlign: "center",
  width: "100px",
  height: "3em",
  backgroundColor: addButtonColor,
  borderRadius: "20px",
  border: "none",
});

Object.assign(resetButton.style, {
  alignSelf: "center",
  textAlign: "center",
  width: "200px",
  height: "3em",
  backgroundColor: resetButtonColor,
  borderRadius: "20px",
  border: "none",
});

//input style
Object.assign(input.style, {
  backgroundColor: "white",
  height: "2em",
  border: "1px solid lightgray",
  borderRadius: "30px",
  padding: ".1em 1em",
  fontFamily: '"Handlee", cursive',
  fontWeight: "400",
  fontStyle: "normal",
  fontSize: "1.5em",
});
