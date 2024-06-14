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
let count = 0;
const allbtn = document.querySelectorAll("button");

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

initial_li.style.backgroundColor = "red";

//Add a todo

const createCheckBox = (count) => {
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "checkbox" + count);
  Object.assign(checkbox.style, { marginRight: "1.5em" });
  return checkbox;
};

const createLabel = (count) => {
  const label = document.createElement("label");
  label.setAttribute("for", "checkbox" + count);
  return label;
};

//when putting everything into empty div, li got unnested from ul so put it back
ul.appendChild(initial_li);
//fn to run when btn is clicked

const handleAddTodo = () => {
  const label = createLabel(count);
  const checkbox = createCheckBox(count);
  const inputLabelDiv = document.createElement("div");

  //create an li containing checkbox and label
  const li = document.createElement("li");
  //set the input text to li text

  inputLabelDiv.appendChild(checkbox);
  inputLabelDiv.appendChild(label);

  li.append(inputLabelDiv);
  label.textContent = input.value;
  input.value = ""; //clear input
  // li.style.backgroundColor = "red";//change styling of list here
  //append li item to ul as child el
  ul.appendChild(li);
  count++;
};

const handleDeleteCompleted = () => {
  //get and iternate through all checkboxes
  const checkboxes = document.querySelectorAll("input[type=checkbox]");
  for (const item of checkboxes) {
    //if the todo is checked i.e. todo completed, delete li element
    console.log(item);
    if (item.checked) {
      item.parentElement.parentElement.remove();
    }
  }
};

//add am event listener to my button
addButton.addEventListener("click", handleAddTodo);
// addButton.addEventListener("mouseenter", handleMouseEnter(true));
// addButton.addEventListener("mouseenter", handleMouseEnter(false));
resetButton.addEventListener("click", handleDeleteCompleted);
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
// for (const iterator of allbtn) {
//   Object.assign(iterator.style, { backgroundColor: "black" });
// }

// const all_li = document.querySelectorAll("li");
// for (const i of all_li) {
//   Object.assign(i.style, { backgroundColor: "yellow" });
// }
