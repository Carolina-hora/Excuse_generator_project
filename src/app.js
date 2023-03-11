/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function excuseGenerator() {
  //write your code here

  let who = ["the rockstar neighbour", "the priest", "my boyfriend", "my bff"];
  let selectedWho = who[Math.floor(Math.random() * who.length)];
  console.log(selectedWho);

  let action = ["dropped wholy water on", "destroyed", "deleted", "burned"];
  let selectedAction = action[Math.floor(Math.random() * action.length)];
  console.log(selectedAction);

  let what = ["the building", "everything", "the computer", "the assignment"];
  let selectedWhat = what[Math.floor(Math.random() * what.length)];
  console.log(selectedWhat);

  let when = ["yesterday", "at the worst possible time", "at 5 am", "at noon"];
  let selectedWhen = when[Math.floor(Math.random() * when.length)];
  console.log(selectedWhen);

  //excuse = [selectedWho, selectedAction, selectedWhat, selectedWhen];
  let excuse = document.querySelector("#excuse");
  excuse.innerHTML = `${selectedWho} ${selectedAction} ${selectedWhat} ${selectedWhen}`;

  return excuse;
  //console.log(button);

  //let button = document.getElementById("#myButton");
  //button.innerHTML = "Generate Random Excuse";
  //button.onclick = excuse() // if excuse was a function!! ;
};

let button = document.querySelector("#myButton");
button.addEventListener("click", () => {
  location.reload();
});
<