'use strict'
let nav = document.getElementById("navigation");
let burgerbar = document.getElementById("burgerBar");
burgerbar.addEventListener("click", function () {
  burgerbar.classList.toggle("burger-bar-in-motion");
});

let bi1 = document.getElementById("bi1");
burgerbar.addEventListener("click", function () {
  bi1.classList.toggle("bi1-in-motion");
});

let bi2 = document.getElementById("bi2");
burgerbar.addEventListener("click", function () {
  bi2.classList.toggle("bi2-in-motion");
  nav.classList.toggle("navigation-back");
});


