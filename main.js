const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector("#click");
const color = document.querySelector(".color");
var nav_main= document.querySelector(".nav-main");
btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    nav_main.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber];
  });
  function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }
  