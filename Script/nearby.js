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



var neardata = [
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Closed",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Closed",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Closed",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Closed",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Closed",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Closed",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Closed",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Closed",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },{
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Closed",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Closed",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Closed",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Closed",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Closed",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Closed",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },{
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
  {
    name:"RANJIT AVENUE AMRITSAR",
    time:"Store Timing(11:00 AM-10:00 PM",
    address:"Goyla dairy, qutub vihar, phase-2, D-Block, House no. = 402",
    status:"Open Now",
    distance:"5KM",
  },
]






neardata.forEach(function(el){

  let address1 = document.createElement("div")
  address1.setAttribute("id","address1")
  let h2 = document.createElement("h2")
  h2.innerText = el.name;
  let h3 = document.createElement("h3")
  h3.innerText =el.time;
  let p = document.createElement("p")
  p.innerText = el.address;
  let h4 = document.createElement("h4")
  h4.innerText = el.status;
  let p1 = document.createElement("p")
  p1.innerText = el.distance;

  address1.append(h2,h3,p,h4,p1)

  let address2 = document.createElement("div")
  address2.setAttribute("id","address2")

  
  let call = document.createElement("div")
  let img1 = document.createElement("img")
  img1.src ="https://www.burgerking.in/static/media/call-icon.dffe4d54.svg";

  call.append(img1)

  let call1 = document.createElement("div")
  let img2 = document.createElement("img")
  img2.src ="https://www.burgerking.in/static/media/location-direction.f129a961.svg";
  call1.addEventListener("click",function(){
    window.location.href = "https://www.google.com/maps?q=Burger+King+India+Ltd.+Ranjit+Avenue+Amritsar,+B-Block,+Sco+No-11,+District+Shopping+Complex+Center,+Amritsar+-+143008+Punjab"
  })

  call1.append(img2)

  address2.append(call,call1)

  let box = document.createElement("div")
 box.setAttribute("id","address")

 box.append(address1,address2)









  let take = document.createElement("div")
  take.setAttribute("id","take")

  let call2 = document.createElement("div")
  call2.innerText = "Takeaaway"
  let img3 = document.createElement("img")
  img3.src ="https://www.burgerking.in/static/media/take-away.ea8a9e2d.svg";

  call2.append(img3)

  
  let call3 = document.createElement("div")
  call3.innerText = "Dine-in"
  let img4 = document.createElement("img")
  img4.src ="https://www.burgerking.in/static/media/dine-in.1e8f5361.svg";

  call3.append(img4)

  
  let call4 = document.createElement("div")
  call4.innerText = "Delivery"
  let img5 = document.createElement("img")
  img5.src ="https://www.burgerking.in/static/media/delivery.970bac8f.svg";

  call4.append(img5)

  take.append(call2,call3,call4)
  

  if(el.status !== "Open Now"){
    box.style.marginBottom = "50px"
    box.style.borderRadius = "10px"
    take.style.display  = "none"
    call4.style.display  = "none"
    call3.style.display  = "none"
    call2.style.display  = "none"
  }
 

//  box.append(address1,address2,take)


let box1 = document.getElementById("append")

 box1.append(box,take)
  
})