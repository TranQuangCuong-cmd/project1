const selectcolor = [0,1,2,3,4,5,6,7,8,9,"A","B","C", "D","E","F"];
const btns = document.querySelector("#click");
const colorse = document.querySelector(".color");
const nav_main = document.querySelector(".nav-main");

btns.addEventListener('click',function (){
    let color="#";
    for(let i=0; i<6; i++){
        color += selectcolor[getRandomNumber()];
    }
    nav_main.style.backgroundColor = color;
    colorse.textContent = color;
});
function getRandomNumber() {
    return Math.floor(Math.random() * selectcolor.length);
  }
