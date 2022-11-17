var results = [];
function startContest() {
    startAnimation('balota-1', 1000, 1, 43);
    startAnimation('balota-2', 2000, 1, 43);
    startAnimation('balota-3', 3000, 1, 43);
    startAnimation('balota-4', 4000, 1, 43);
    startAnimation('balota-5', 5000, 1, 43);
    startAnimation('balota-6', 6000, 1, 16);
}

/*
function startAnimation(id, duration, min, max) {
    const campos = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6 : false,
}
  const output = document.querySelectorAll("#id");
  output.classList.remove('animate__animated animate__heartBeat');
  let campo
  let output = document.getElementById(`balota-${campo}`).classList.remove('animate__animated animate__heartBeat');
  const started = new Date().getTime();
  campos[campo] = true;
*/
// Animate!
/*const animationTimer = setInterval(function() {
    // If the value is what we want, stop animating
    // or if the duration has been exceeded, stop animating
    const result = output.text().trim();
    if (new Date().getTime() - started > duration && !results.includes(result)) {
        results.push(result);
        clearInterval(animationTimer);
        output.addClass('animate__animated animate__heartBeat');
        if (results.length >= 6) {
            results = [];
        }
    } else {
        let number = Math.floor(Math.random() * (max - min) + min);
        if (number <= 9) {
            number = '0'+number;
        }
        output.text(number);
    }
}, 100);
}*/

function Aleatorio() {

let slc5 = document.querySelector(".seleccion5");
let slc6 = document.querySelector(".seleccion6");

let seleccion5 = parseInt(slc5.value);
let seleccion6 = parseInt(slc6.value);

let aleatory = Math.floor(Math.random() * 9);
let aleatory1 = Math.floor(Math.random() * 9);
let aleatory2 = Math.floor(Math.random() * 9);
let aleatory3 = Math.floor(Math.random() * 9);
let aleatory4 = Math.floor(Math.random() * 9);
let aleatory5 = Math.floor(Math.random() * 9);

    setTimeout(() => {
        document.querySelector(".balota-1").textContent = `${aleatory}`;
    }, 1000);
    setTimeout(() => {
        document.querySelector(".balota-2").textContent = `${aleatory1}`;
    }, 2000);
    setTimeout(() => {
        document.querySelector(".balota-3").textContent = `${aleatory2}`;
    }, 3000);
    setTimeout(() => {
        document.querySelector(".balota-4").textContent = `${aleatory3}`;
    }, 4000);
    setTimeout(() => {
        document.querySelector(".balota-5").textContent = `${aleatory4}`;
    }, 5000);
    setTimeout(() => {
        document.querySelector(".balota-6").textContent = `${aleatory5}`;
    }, 6000);

    setTimeout(() => {
        if (seleccion5 == aleatory4 && seleccion6 == aleatory5) {
        alert(" Has Ganado la balota")
    }
    else (
        alert("Has perdido")         
    )
    }, 7000);
    


}

