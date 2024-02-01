/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["My dog", "A plane", "My brother", "My friend"];
  let action = ["ate", "blew up", "broke", "destroyed"];
  let what = ["my car", "my homework", "my code", "my computer"];
  let when = ["yesterday", "tonight", "today", "earlier"];

  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomWhat = Math.floor(Math.random() * what.length);
  let randomWhen = Math.floor(Math.random() * when.length);

  let excuse = `${who[randomWho]} ${action[randomAction]} ${what[randomWhat]} ${when[randomWhen]}`;

  document.getElementById("excuse").innerHTML = excuse;
};
