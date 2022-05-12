import { navbar } from "../Components/export.js";

let navs = document.getElementById("navbar");
navs.innerHTML = navbar();

let input = document.getElementById("Inp");
let c1 = document.getElementById("C1");
c1.style.color = "brown";
let c2 = document.getElementById("C2");
let exp = document.getElementById("slide");
exp.style.backgroundColor = "brown";

exp.addEventListener("click", colorChange);

function colorChange() {
  if (exp.style.backgroundColor == "brown") {
    exp.style.backgroundColor = "orange";
    c2.style.color = "orange";
    c1.style.color = "grey";
  } else if (exp.style.backgroundColor == "orange") {
    exp.style.backgroundColor = "brown";

    c1.style.color = "brown";
    c2.style.color = "grey";
  }
}



var burger = document.getElementById("Burger_king");
burger.addEventListener("click", function () {
  window.location.href = "home.html";
});
var nearbypage1 = document.getElementById("king");
nearbypage1.addEventListener("click", nextpage1);
function nextpage1() {
  window.location.href = "../Kingdeals.html";
  nearbypage1.style.color = "orange";
}

var nearbypage = document.getElementById("nearby");
nearbypage.style.color = "orange";

var cart = document.getElementById("cart");
cart.addEventListener("click", function () {
  alert("No items are added");
});
