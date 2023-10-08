"use strict";
var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

display.textContent = 0;
var operand1 = 0;
var operand2 = null;
var operator = null;
var result = null;

function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        var value = this.getAttribute('data-value');

        if (isOperator(value)) {
            if (display.textContent != 0) {
                operator = value;
                operand1 = parseFloat(display.textContent);
                display.textContent = "";
            }
        } else if (value == "ac") {
            display.textContent = "0";
        } else if (value == "sign") {
            if (operand1 == 0) {
                operand1 = parseFloat(display.textContent);
                operand1 = -1 * operand1;
                display.textContent = operand1;
            }
            else {
                operand2 = parseFloat(display.textContent);
                operand2 = -1 * operand2;
                display.textContent = operand2;
            }
        } else if (value == ".") {
            if (display.textContent.length == 0) {
                display.textContent = "0" + ".";
            }
            else if (display.textContent.length && !display.textContent.includes('.')) {
                display.textContent = display.textContent + '.';
            }
        } else if (value == "%") {
            if (operand1 == 0) {
                operand1 = parseFloat(display.textContent);
                operand1 = operand1 / 100;
                display.textContent = operand1;
            }
            else {
                operand2 = parseFloat(display.textContent);
                operand2 = operand2 / 100;
                display.textContent = operand2;
            }
        } else if (value == "=") {
            operand2 = parseFloat(display.textContent);
            if (operand2) {
                result = eval((operand1) + (operator) + (operand2));
            }
            else {
                result = operand1;
            }
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        } else {
            if (display.textContent == "0") {
                display.textContent = value;
            }
            else {
                display.textContent += value;
            }
        }
    });
}


