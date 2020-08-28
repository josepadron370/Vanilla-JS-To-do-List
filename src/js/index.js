/* eslint-disable */

// import "../assets/img/rigo-baby.jpg";
// import "../assets/img/4geeks.ico";
// //import 'breathecode-dom'; //DOM override to make JS easier to use
// import "../style/index.scss";

// window.onload = function() {
//   console.log("Hello Rigo from the console!");
// };

document.body.style.backgroundColor = "lightblue";

// SELECTORS!!!

const listInput = document.querySelector("#input");
const listButton = document.querySelector("#list-button");
const listBox = document.querySelector("#list-box");

// EVENT LISTENERS!!!

listButton.addEventListener("click", addTodo);

// FUNCTIONS!!!

function addTodo(event) {
  event.preventDefault();
  console.log("Hello!!!");
}
