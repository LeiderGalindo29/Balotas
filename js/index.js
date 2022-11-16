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
let s1 = document.querySelector(".seleccion1");
let s2 = document.querySelector(".seleccion2");
let s3 = document.querySelector(".seleccion3");
let s4 = document.querySelector(".seleccion4");
let s5 = document.querySelector(".seleccion5");
let s6 = document.querySelector(".seleccion6");

let seleccion1 = parseInt(s1.value);
let seleccion2 = parseInt(s2.value);
let seleccion3 = parseInt(s3.value);
let seleccion4 = parseInt(s4.value);
let seleccion5 = parseInt(s5.value);
let seleccion6 = parseInt(s6.value);

let random = Math.floor(Math.random() * 9);
let random1 = Math.floor(Math.random() * 9);
let random2 = Math.floor(Math.random() * 9);
let random3 = Math.floor(Math.random() * 9);
let random4 = Math.floor(Math.random() * 9);
let random5 = Math.floor(Math.random() * 9);

console.log(random)

function Aleatorio() {
    setTimeout(() => {
        document.querySelector(".balota-1").textContent = `${random}`;
    }, 1000);
    setTimeout(() => {
        document.querySelector(".balota-2").textContent = `${random1}`;
    }, 2000);
    setTimeout(() => {
        document.querySelector(".balota-3").textContent = `${random2}`;
    }, 3000);
    setTimeout(() => {
        document.querySelector(".balota-4").textContent = `${random3}`;
    }, 4000);
    setTimeout(() => {
        document.querySelector(".balota-5").textContent = `${random4}`;
    }, 5000);
    setTimeout(() => {
        document.querySelector(".balota-6").textContent = `${random5}`;
    }, 6000);

    setTimeout(() => {
        if (seleccion1 == random && seleccion2 == random1 && seleccion3 == random2 && seleccion4 == random3 && seleccion5 == random4 && seleccion6 == random5) {
        alert(" Has Ganado las balota")
    }
    else (
        alert("Has perdido")         
    )
    }, 7000);
    


}

