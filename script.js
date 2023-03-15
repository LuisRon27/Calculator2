// Variables constantes
const calcDisplay = document.getElementById("calc-display");
const resultDisplay = document.getElementById("result-display");
const button = document.querySelector(".theme-toggle");
const buttonToggle = document.querySelector(".theme-toggle span");

// Función de cálculo personalizada
function calculate() {
    const input = calcDisplay.textContent;
    const result = Function('"use strict";return (' + input + ')')();
    resultDisplay.textContent = result;
}

// Funciones de visualización
function display(num) {
    calcDisplay.textContent += num;
}

function allClear() {
    calcDisplay.textContent = '';
    resultDisplay.textContent = '0';
}

function del() {
    calcDisplay.textContent = calcDisplay.textContent.slice(0, -1);
}

// Cambio de tema
button.onclick = function () {
    buttonToggle.classList.toggle("active-btn");
    document.body.classList.toggle("active-dark");
}

// Atributos de accesibilidad
buttonToggle.setAttribute("aria-label", "Toggle theme");

