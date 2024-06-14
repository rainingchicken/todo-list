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
const existingList = initial_li.textContent;

//colors
//https://www.color-hex.com/color-palette/1147
const bodyColor = "#b8dbd3";
const addButtonColor = "#68c4af";
const resetButtonColor = "#96ead7";
//create empty div to put todo in for styling
const parent = document.createElement("div");
parent.innerHTML = "";

//convert to elements
const elements = [...nodes];

//append to doc body
document.body.appendChild(parent);
//append all body lements into empty div
for (const el of elements) {
  // console.log(el);
  parent.appendChild(el);
}

// --- add classes to existing elements --- //
document.body.classList.add("handlee-regular");
input.classList.add("handlee-regular");

//set placeholder for input incase user cant see where to put input due to poor sight
input.setAttribute("placeholder", "Input more todos here");

//Add a todo

const createCheckBox = (count) => {
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "checkbox" + count);
  Object.assign(checkbox.style, {
    marginRight: "1.5em",
    width: "20px",
    height: "20px",
    border: "1px solid bodyColor",
  });
  return checkbox;
};

const createLabel = (count) => {
  const label = document.createElement("label");
  label.setAttribute("for", "checkbox" + count);
  return label;
};

const createList = () => {
  const li = document.createElement("li");
  Object.assign(li.style, {
    borderBottom: "1px solid bodyColor",
  });
  return li;
};
//when putting everything into empty div, li got unnested from ul so put it back
//since this li was hard coded it needs to be singled out and add div, checkbox, and label
initial_li.remove();
const firstlabel = createLabel(count);
const firstcheckbox = createCheckBox(count);
const firstinputLabelDiv = document.createElement("div");
firstinputLabelDiv.appendChild(firstcheckbox);
firstinputLabelDiv.appendChild(firstlabel);
firstlabel.textContent = existingList;
const new_li = createList();
new_li.appendChild(firstinputLabelDiv);
firstcheckbox.classList.add("checkbox");
new_li.classList.add("list");
ul.appendChild(new_li);

//fn to run when btn is clicked

const handleAddTodo = () => {
  count++;
  const label = createLabel(count);
  const checkbox = createCheckBox(count);
  const inputLabelDiv = document.createElement("div");
  //create an li containing checkbox and label
  const li = createList();
  //set the input text to li text
  li.classList.add("list");
  inputLabelDiv.appendChild(checkbox);
  inputLabelDiv.appendChild(label);
  li.append(inputLabelDiv);
  label.textContent = input.value;
  input.value = ""; //clear input
  //append li item to ul as child el
  ul.appendChild(li);
};

const handleDeleteCompleted = () => {
  //get and iternate through all checkboxes
  const checkboxes = document.querySelectorAll("input[type=checkbox]");
  for (const item of checkboxes) {
    //if the todo is checked i.e. todo completed, delete li element
    if (item.checked) {
      item.parentElement.parentElement.remove();
    }
  }
};

//if checkbox is checked, slash the font
const isChecked = () => {
  const checkboxes = document.querySelectorAll("input[type=checkbox]");
  for (const item of checkboxes) {
    if (item.checked) {
      item.parentElement.style.textDecoration = "line-through";
    } else {
      item.parentElement.style.textDecoration = "none";
    }
  }
};

// ---addEventListeners--- //
ul.addEventListener("change", isChecked);
//add am event listener to my button
addButton.addEventListener("click", handleAddTodo);
//can press enter to activate addButton
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addButton.click();
  }
});
resetButton.addEventListener("click", handleDeleteCompleted);

/////////////////////////////////////////////////////////////////////////////////////////
//styling
// ---initialize all objects here --- //
const allbtn = document.querySelectorAll("button");
const headers = document.querySelectorAll("h1, h2");
const classCheckBoxes = document.querySelectorAll(".checkbox");
const classHandleeRegular = document.querySelectorAll(".handlee-regular");
const classUnorderedList = document.querySelectorAll("ul");
const classList = document.querySelectorAll("li");
console.log(classCheckBoxes);
//font style
for (const iterator of classHandleeRegular) {
  Object.assign(iterator.style, {
    fontFamily: '"Handlee", cursive',
    fontWeight: "400",
    fontStyle: "normal",
  });
}

//list style
for (const iterator of classUnorderedList) {
  Object.assign(iterator.style, {
    listStyleType: "none",
    fontSize: "1.5em",
  });
}

//list style
for (const iterator of classList) {
  Object.assign(iterator.style, {
    borderButtom: "1px solid black",
  });
}

//checkbox style
for (const iterator of classCheckBoxes) {
  Object.assign(iterator.style, {
    background: bodyColor,
  });
}

//body style
Object.assign(document.body.style, {
  boxSizing: "border-box",
  backgroundColor: bodyColor,
});

//header style
for (const iterator of headers) {
  Object.assign(iterator.style, { textAlign: "center" });
}

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
for (const iterator of allbtn) {
  Object.assign(iterator.style, {
    alignSelf: "center",
    textAlign: "center",
    height: "3em",
    borderRadius: "20px",
    border: "none",
  });
}

//addButton style
Object.assign(addButton.style, {
  width: "100px",
  backgroundColor: addButtonColor,
});

//resetButton style
Object.assign(resetButton.style, {
  width: "200px",
  backgroundColor: resetButtonColor,
});

//input style
Object.assign(input.style, {
  backgroundColor: "white",
  height: "2em",
  border: "1px solid lightgray",
  borderRadius: "30px",
  padding: ".1em 1em",
  fontSize: "1.5em",
});
