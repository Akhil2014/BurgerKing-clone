import { footer } from "../Components/export.js";
import { navbar } from "../Components/export.js";
import { main } from "../Components/export.js";

var nav = document.getElementById("navbar");
nav.innerHTML = navbar();

var lbody = document.getElementById("lbody")
lbody.innerHTML = main();

var foot = document.getElementById("footer");
foot.innerHTML = footer();
var slido_img = [
  "https://burgerking-image.s3.amazonaws.com/products/Home/web/1x_web_20220207161929887533_1440x300jpg",
  "https://burgerking-image.s3.amazonaws.com/products/Home/web/1x_web_20220207162224211932_1440x300jpg",
  "https://burgerking-image.s3.amazonaws.com/products/Home/web/1x_web_20210618121316033700_1440x300jpg",
  "https://burgerking-image.s3.amazonaws.com/products/Home/web/1x_web_20210427105513366966_1440x300jpg",
  "https://burgerking-image.s3.amazonaws.com/products/Home/web/1x_web_20210427104439040609_1440x300jpg",
  "https://burgerking-image.s3.amazonaws.com/products/Home/web/1x_web_20220222033144052770_1440x300jpg",
  "https://burgerking-image.s3.amazonaws.com/products/Home/web/1x_web_20220329051325280904_1440x300jpg",
  "https://burgerking-image.s3.amazonaws.com/products/Home/web/1x_web_20220207162142352922_1440x300jpg",
];

let slido = document.getElementById("slido_Image");
let Img = document.createElement("img");
Img.setAttribute("class", "slidoImg");
Img.src = slido_img[0];
slido.append(Img);
let i = 1;

setInterval(function () {
  if (i == slido_img.length - 1) {
    i = 1;
  }
  Img.src = slido_img[i];
  slido.append(Img);
  

  i++;
}, 2000);

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

var nearbypage = document.getElementById("nearby");
nearbypage.addEventListener("click", nextpage);

function nextpage() {
  window.location.href = "../nearby.html";
  nearbypage.style.color = "orange";
}

var Unable = document.getElementById("search_bar");
Unable.style.cursor = "pointer";
Unable.addEventListener("click", function () {
  alert("Unable to fetch the location. Please enter manually");
});

var nearbypage1 = document.getElementById("king");
nearbypage1.addEventListener("click", nextpage1);

function nextpage1() {
  window.location.href = "../Kingdeals.html";
  nearbypage1.style.color = "orange";
}

var cart = document.getElementById("cart");
cart.addEventListener("click", function () {
  alert("No items are added");
});
let left = document.getElementById("btnD");
let right = document.getElementById("btnD2");
right.onclick = function () {
  document.querySelector("#MM").scrollLeft += 250;
};
left.onclick = function () {
  document.querySelector("#MM").scrollLeft -= 250;
};

let left1 = document.getElementById("btnF");
let right1 = document.getElementById("btnF2");
right1.onclick = function () {
  document.querySelector(".KK").scrollLeft += 250;
};
left1.onclick = function () {
  document.querySelector(".KK").scrollLeft -= 250;
};
