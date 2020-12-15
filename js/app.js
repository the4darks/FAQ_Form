let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p3 = document.querySelector("#p3");
let p4 = document.querySelector("#p4");
let p5 = document.querySelector("#p5");

let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");
let btn3 = document.querySelector("#btn-3");
let btn4 = document.querySelector("#btn-4");
let btn5 = document.querySelector("#btn-5");

let link1 = document.querySelector("#link-1");
let link2 = document.querySelector("#link-2");
let link3 = document.querySelector("#link-3");
let link4 = document.querySelector("#link-4");
let link5 = document.querySelector("#link-5");

function init() {
  p1.style.display = "none";
  p2.style.display = "none";
  p3.style.display = "none";
  p4.style.display = "none";
  p5.style.display = "none";
}
init();

btn1.addEventListener("click", () => {
  if (p1.style.display === "none") {
    p1.style.display = "block";
    btn1.classList.toggle("fa-caret-up");
    link1.style.fontWeight = "700";
  } else {
    btn1.classList.replace("fa-caret-up", "fa-caret-down");
    link1.style.fontWeight = "400";
    p1.style.display = "none";
  }
});

btn2.addEventListener("click", () => {
  if (p2.style.display === "none") {
    p2.style.display = "block";
    btn2.classList.toggle("fa-caret-up");
    link2.style.fontWeight = "700";
  } else {
    btn2.classList.replace("fa-caret-up", "fa-caret-down");
    link2.style.fontWeight = "400";
    p2.style.display = "none";
  }
});

btn3.addEventListener("click", () => {
  if (p3.style.display === "none") {
    p3.style.display = "block";
    btn3.classList.toggle("fa-caret-up");
    link3.style.fontWeight = "700";
  } else {
    btn3.classList.replace("fa-caret-up", "fa-caret-down");
    link3.style.fontWeight = "400";
    p3.style.display = "none";
  }
});

btn4.addEventListener("click", () => {
  if (p4.style.display === "none") {
    p4.style.display = "block";
    link4.style.fontWeight = "700";
    btn4.classList.toggle("fa-caret-up");
  } else {
    btn4.classList.replace("fa-caret-up", "fa-caret-down");
    link4.style.fontWeight = "400";
    p4.style.display = "none";
  }
});

btn5.addEventListener("click", () => {
  if (p5.style.display === "none") {
    p5.style.display = "block";
    btn5.classList.toggle("fa-caret-up");
    link5.style.fontWeight = "700";
  } else {
    btn5.classList.replace("fa-caret-up", "fa-caret-down");
    link5.style.fontWeight = "400";
    p5.style.display = "none";
  }
});
