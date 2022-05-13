import { navbar } from "../Components/export.js";

document.getElementById("navbar").innerHTML = navbar();

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

var homepage = document.getElementById("homepage");
homepage.style.cursor = "pointer";
homepage.addEventListener("click", function () {
  window.location.href = "home.html";
});

console.log(await dataRest());

let left1 = document.getElementById("btnD");
let right1 = document.getElementById("btnD2");
right1.onclick = function () {
  document.querySelector("#MM").scrollLeft += 1150;
};
left1.onclick = function () {
  var l = (document.querySelector("#MM").scrollLeft -= 1150);
};

var cart = document.getElementById("cart");
cart.addEventListener("click", function () {
  alert("No items are added");
});

var burger = document.getElementById("Burger_king");
burger.addEventListener("click", function () {
  window.location.href = "home.html";
});

async function dataRest() {
  try {
    let res = await fetch(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=7f2ac67a76ae4adb8be5aabfb3f90cfa"
    );
    let data = await res.json();
    let alldata = data.results;
    return alldata;
  } catch (err) {
    console.log(err);
  }
}
