"use strict";
var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

// Initialize variables for the calculator
var operand1 = "0"; //first input
var operand2 = null;  //second input
var operator = null;  // operator to perform operations

// Function to check if a value is an operator
function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}

// Loop through all the buttons and add click event listeners
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        // Get the value attribute of the clicked button
        var value = this.getAttribute('data-value');

        // Check the value and perform appropriate actions
        if (isOperator(value)) {
            // If an operator is clicked
            if (operator !== null) {
                return; // Return if an operator is already set
            }
            operator = value;
            operand1 = parseFloat(display.textContent);
            display.textContent = "0";
        } else if (value == "ac") {
            // Clear all values and reset the display
            operand1 = "0";
            operand2 = null;
            operator = null;
            display.textContent = "0";
        } else if (value == "sign") {
            // Toggle the sign of the current operand
            if (operator === null) {   // Check if the operator is null, indicating currently working with the first operand
                operand1 = -parseFloat(display.textContent);
                display.textContent = operand1;
            }
            else {
                operand2 = -parseFloat(display.textContent);
                display.textContent = operand2;
            }
        } else if (value == ".") {
            // Add a decimal point to the display
            if (display.textContent.length == 0) {
                display.textContent = "0" + ".";
            }
            else if (display.textContent.length && !display.textContent.includes('.')) {
                display.textContent = display.textContent + '.';
            }
        } else if (value == "%") {
            // Calculate percentage of the current operand
            if (operator === null) {  // Check if the operator is null, indicating currently working with the first operand
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
            // Perform calculation when "=" is clicked
            operand2 = parseFloat(display.textContent);

            var result = calculate(operand1, operator, operand2);
            display.textContent = result;
            operand1 = result;
            operand2 = null;
            operator = null;
        } else {
            // Append the clicked value to the display
            if (display.textContent == "0") {
                display.textContent = value;
            }
            else {
                display.textContent += value;
            }
        }
    });
}


// Function to perform calculations based on operator
function calculate(a, operator, b) {
    switch (operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b !== 0 ? a / b : "Can't divide by 0";
        default: return b;
    }
}

