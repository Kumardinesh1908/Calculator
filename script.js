"use strict";
var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

// display.textContent ;
var operand1 = "0";
var operand2 = null;
var operator = null;

function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        var value = this.getAttribute('data-value');

        if (isOperator(value)) {
            if (operator !== null) {
                return;
            }
            operator = value;
            operand1 = parseFloat(display.textContent);
            console.log(operand1)
            console.log(operator)
            display.textContent = "0";
        } else if (value == "ac") {
            operand1 = "0";
            operand2 = null;
            operator = null;
            display.textContent = "0";
        } else if (value == "sign") {
            if (operator === null) {
                operand1 = -parseFloat(display.textContent);
                display.textContent = operand1;
            }
            else {
                operand2 = -parseFloat(display.textContent);
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
            if (operator === null) {
                operand1 = operand1 / 100;
                display.textContent = operand1;
            }
            else {
                operand2 = parseFloat(display.textContent);
                operand2 = operand2 / 100;
                display.textContent = operand2;
            }
        } 
        else if (value == "=") {
            operand2 = parseFloat(display.textContent);
            console.log(operand1)
            console.log(operator)
            console.log(operand2)

            var result = calculate(operand1, operator, operand2);
            display.textContent = result;
            operand1 = result;
            operand2 = null;
            operator = null;
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

function calculate(a, operator, b) {
    switch (operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b !== 0 ? a / b : "Can't divide by 0";
        default: return b;
    }
}

