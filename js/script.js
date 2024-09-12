"use strict";

const circles = document.querySelectorAll(".step .circle");
const buttons = document.querySelectorAll(".buttons-box button");
const progressBar = document.querySelector(".step .progress-bar .bar");

let currentStep = 1;

const updateSteps = (event) => {
    const elementValue = event.target.classList.value;
    currentStep = elementValue === "next" ? ++currentStep : --currentStep;

    circles.forEach((circle, index) => {
        circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
    });
    progressBar.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;

    disableButtons();
}

const disableButtons = () => {
    if(currentStep === 1) {
        buttons[0].disabled = true;
    }
    else if(currentStep === circles.length) {
        buttons[1].disabled = true;
    }
    else {
        buttons.forEach((button) => button.disabled = false);
    }
}

buttons.forEach((button) => button.addEventListener("click", updateSteps));