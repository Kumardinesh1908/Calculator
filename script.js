// "use strict";
// var buttons = document.getElementsByClassName("button");
// var display = document.getElementById("display");

// // display.textContent = 0;
// var operand1 = 0;
// var operand2 = null;
// var operator = null;

// function isOperator(value) {
//     return value == "+" || value == "-" || value == "*" || value == "/";
// }

// for (var i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function () {

//         var value = this.getAttribute('data-value');
//         var text = display.textContent.trim(); 

//         if (isOperator(value)) {
//             operator = value;
//             operand1 = parseFloat(text);
//             display.textContent = "";
//         } else if (value == "ac") {
//             display.textContent = "";
//         } else if (value == "sign") {
//             operand1 = parseFloat(text);
//             operand1 = -1 * operand1;
//             display.textContent = operand1;
//         } else if (value == ".") {
//             if(text.length == 0){
//                 display.textContent =  "0" + ".";
//             }
//             else if (text.length && !text.includes('.')) {
//                 display.textContent = text + '.';
//             }
//         } else if (value == "%") {
//             operand1 = parseFloat(text);
//             operand1 = operand1 / 100;
//             display.textContent = operand1
//         } else if (value == "=") {
//             operand2 = parseFloat(text);
//             var result = eval(operand1 + ' ' + operator + ' ' + operand2);
//             if (result) {
//                 display.textContent = result;
//                 operand1 = result;
//                 operand2 = null;
//                 operator = null;
//             }
//         } else {
//             display.textContent += value;
//         }
//     });
// }

//  Logic - 2

var string = "";
var buttons = document.getElementsByClassName("button");

for( var i = 0; i< buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        var value = this.getAttribute("data-value");
        if(value == "="){
            string = eval(string);
            document.getElementById("display").textContent = string;
        }
        else if(value == "ac"){
            string = "";
            document.getElementById("display").textContent = string;
        }
        else if(value == "%"){
            string = parseFloat(string)/100;
            document.getElementById("display").textContent = string;
        }
        else if(value == "sign"){
            string = parseFloat(string) * -1;
            document.getElementById("display").textContent = string;
        }
        else{
            string = string + value;
            document.getElementById("display").textContent = string;
        }

    });
}