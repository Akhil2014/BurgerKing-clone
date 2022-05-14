import { navbar } from "../Components/export.js";
import { footer } from "../Components/export.js";
import { main } from "../Components/kingsexport.js"

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("lbody").innerHTML = main();
document.getElementById("footer").innerHTML = footer();

var Unable = document.getElementById("search_bar");
Unable.style.cursor = "pointer";
Unable.addEventListener("click", function () {
  alert("Unable to fetch the location. Please enter manually");
});

let dine = document.getElementById("ondine")
dine.style.display = "none"

let c1 = document.getElementById("C1");
c1.style.color = "brown";
let c2 = document.getElementById("C2");
let exp = document.getElementById("Inp");
let input = document.getElementById("slide");
// input.addEventListener("click",colorChange())
input.style.backgroundColor = "brown";

input.addEventListener("click", colorChange);

function colorChange() {
  if (input.style.backgroundColor == "brown") {
    input.style.backgroundColor = "orange";
    c2.style.color = "orange";
    c1.style.color = "grey";
    input.click()
    btnclick2()
    
  } else if (input.style.backgroundColor == "orange") {
    input.style.backgroundColor = "brown";
    input.click()
    c1.style.color = "brown";
    c2.style.color = "grey";
    btnclick1()
    
  }
}

var btn1 = document.getElementById("btnf");
var btn2 = document.getElementById("btns");
btn1.style.backgroundColor = "brown";
btn1.style.color = "white";

let i = 2;

btn1.addEventListener("click", btnclick1)
function btnclick1 () {
  btn1.style.backgroundColor = "brown";
  btn1.style.color = "white";
  btn2.style.backgroundColor = "white";
  btn2.style.color = "grey";
  if (i == 1) {
    // colorChange();
    document.getElementById("Check").click();
    document.getElementById("slide").click();
    let dine = document.getElementById("ondine")
    dine.style.display = "none"
    let dine1 = document.getElementById("our_deal")
    dine1.style.display = "block"
  }
  i = 2;
};

btn2.addEventListener("click", btnclick2)
function btnclick2 () {
  btn2.style.backgroundColor = "orange";
  btn2.style.color = "white";
  btn1.style.backgroundColor = "white";
  btn1.style.color = "grey";

  if (i == 2) {
    
    document.getElementById("Check").click();
    document.getElementById("slide").click();
    // colorChange();
    let dine = document.getElementById("ondine")
    dine.style.display = "block"
    let dine1 = document.getElementById("our_deal")
    dine1.style.display = "none"
  }
  i = 1;
};

var nearbypage1 = document.getElementById("king");
nearbypage1.style.color = "orange";

var burger = document.getElementById("Burger_king");
burger.addEventListener("click", function () {
  window.location.href = "home.html";
});

var nearbypage = document.getElementById("nearby");
nearbypage.addEventListener("click", nextpage);
function nextpage() {
  window.location.href = "../nearby.html";
  nearbypage.style.color = "orange";
}

var cart = document.getElementById("cart");
cart.addEventListener("click", function () {
  alert("No items are added");
});



let left1 = document.getElementById("ButtonL");
let right1 = document.getElementById("ButtonR");
right1.onclick = function () {
  document.querySelector(".Scroller").scrollLeft += 850;
};
left1.onclick = function () {
  document.querySelector(".Scroller").scrollLeft -= 850;
};

