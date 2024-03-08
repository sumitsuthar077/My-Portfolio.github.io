
// sticky script

function changeBg(){
    var header = document.getElementById('header');
    var scrollvalue =window.scrollY;
   

if(scrollvalue < 100){
     header.classList.remove('bgcolor');

}
else{
    header.classList.add('bgcolor');

}
}
window.addEventListener('scroll' ,changeBg);




// nav bar toggle menu

// side menu bar in mobile
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if(bar){
bar.addEventListener('click', () => {
nav.classList.add('active');
})
}

if(close){
close.addEventListener('click', () => {
nav.classList.remove('active');
})
}

//skill section
let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
let startValue = 0;
let endValue = parseInt(valueDisplay.getAttribute("data-val"));
 
let duration = Math.floor(interval / endValue);
let counter = setInterval(function (){
startValue += 1;
valueDisplay.textContent = startValue;
if(startValue == endValue) {
    clearInterval(counter);
}
},duration);
});











