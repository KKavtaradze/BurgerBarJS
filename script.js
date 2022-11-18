'use strict'

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


// let logo = document.getElementById("logo");
// burgerbar.addEventListener("click", function () {
//   logo.classList.toggle("logo-vanish");

// });
let divNav = document.getElementById("div-nav");
burgerbar.addEventListener("click", function () {
  divNav.classList.toggle("div-nav");

});
let headerDrop = document.getElementById("header");
burgerbar.addEventListener("click", function () {
  headerDrop.classList.toggle("header-in-motion");
});

let navDrop = document.getElementById("navigation");
burgerbar.addEventListener("click", function () {
  navDrop.classList.toggle("nav-drop");
});

let btnAdd=document.getElementById("btn-add");

btnAdd.addEventListener("submit", function(event) {
    alert('New item is added in your list!')
});

let inputfield = document.getElementById('input-form');
inputfield.addEventListener('keydown', function(event) {
    event.target.classList.add('input-grey');
});

let form = document.getElementById('form-wraper');
form.addEventListener('submit', function(y) {
    y.preventDefault();
});


let ulBox = document.querySelector('.ul-box');
btnAdd.addEventListener('click', function (todolist) {
    let inputValue = inputfield.value;
    let liItem = document.createElement('li');
    liItem.innerText = inputValue;
    if (inputValue==' ') {
        return;
    }
    liItem.classList.add('li-style');
    let deleteicon = document.createElement('span');
    liItem.appendChild(deleteicon);
    deleteicon.innerHTML='<i class="fa-solid fa-trash"></i>';
    deleteicon.classList.add('delete-icon');
    deleteicon.addEventListener('click', function(clearing) {
        liItem.remove();
    })
    ulBox.appendChild(liItem);
    inputfield.value=' ';
    let DeleteAll=document.querySelector('.clearall');
    DeleteAll.addEventListener('click', function(clearitall){
        ulBox.remove();
    })
});


ulBox.appendChild(liItem);