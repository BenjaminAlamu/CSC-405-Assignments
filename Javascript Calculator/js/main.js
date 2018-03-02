// //Read input
// Create a temp variable and an empty array

var input = [];
var postfixString = [];
var result = 0;
var number = "";
var displayString = "";

var precedence = { "+": "1", "-": "1", "*": "2", "/": "2", "mod": "2", "^": "3", "(": "4", ")": "4", };

var element = document.getElementById("content");
var equals = document.getElementById("equals");
var display = document.getElementById("view");
var clear = document.getElementById("c");
var clearE = document.getElementById("ce");
display.value = 0;


//Event listeners for the clear buttons
clear.addEventListener("click", (event) => {
    input = [];
    postfixString = [];
    result = 0;
    number = "";
    displayString = "";
    display.value = 0;
});


clearE.addEventListener("click", (event) => {
    input = [];
    postfixString = [];
    result = 0;
    number = "";
    displayString = "";
    display.value = 0;
});

//Handles user input from the calculator
element.addEventListener('click', (event) => {


    // If keypress is an integer
    // append to temp variable
    if ((isNumeric(event.target.value)) || (event.target.value == ".")) {
        number += event.target.value;
        displayString += event.target.value;
        display.value = displayString;

    }

    // else if keypress is special operator{ //Sin,cos,tan,hyp,factorial,log
    else if ((event.target.value == "sin") || (event.target.value == "cos") || (event.target.value == "tan") || (event.target.value == "hyp") || (event.target.value == "n!") || (event.target.value == "log") || (event.target.value == "√") || (event.target.value == "x^2") || (event.target.value == "10x") || (event.target.value == "asin") || (event.target.value == "acos") || (event.target.value == "atan") || (event.target.value == "abs")) {

        input.push(number);

        number = "";

        //     if prevoius element is an operand,apply special function to the operand
        var temp = input[input.length - 1]

        if (isNumeric(temp)) {
            //pop element and perform operation, then push result to the stack
            temp = input.pop();
            result = performSpecialOperation(event.target.value, Number(temp));
            input.push(Number(result));
            displayString = input.toString();
            display.value = displayString;
        }

        //     else  Display Error
        else if (!(isNumeric(temp))) {

            input = [];
            postfixString = [];
            result = 0;
            number = "";
            displayString = "";
            display.value = "Error. Press C or CE";
        }

    } else if (event.target.value == "π") {
        displayString += event.target.value;
        display.value = displayString;
        displayString += event.target.value;
        input.push(Number(Math.PI));
        number = "";
    }

    // else if keypress is an operator
    else if ((event.target.value == "+") || (event.target.value == "-") || (event.target.value == "*") || (event.target.value == "/") || (event.target.value == "mod") || (event.target.value == "(") || (event.target.value == ")")) {
        displayString += event.target.value;
        display.value = displayString;
        //     add element to array

        //This if statement prevents the oushing of an empty string which Javascript will convert to a 0 into the array
        if (number != "") {
            input.push(Number(number));
            number = "";
        }
        input.push(event.target.value);
    }

});

//Convert infix expression to postfix string
equals.addEventListener("click", () => {
    if (number != "") {
        input.push(Number(number));
        number = "";
    }

    var stack = []; //Used to compute operator precedence
    //Convert infix to postfix

    // Loop through the array
    for (var i = 0; i < input.length; i++) {

        // if array element is numeric add element to postfix string
        if (isNumeric(input[i])) {
            postfixString.push(input[i]);
        }

        // else if array element is operator
        else if (isOperator(input[i])) {


            //while((stack is not empty) and (stackTop has higher precendence than array element) and (top of stack is not equal to opening bracket)){
            while ((stack.length != 0) && (operatorPrecedence(stack[stack.length - 1], input[i])) && (stack[stack.length - 1] != "(")) {
                //append stackTop to the postfix string, pop stack ,push array element
                postfixString.push(stack.pop);
            }
            stack.push(input[i]); //Push operator to the the stack 
        }

        // else if array element is opening paranthesis push to the array
        else if (input[i] == "(") {
            stack.push(input[i]);
        }

        // else if array element is closing paranthesis while stack is not empty and stack top is not an openingParanthesis
        else if (input[i] == ")") {
            while ((stack.length != 0) && (stack[stack.length - 1] != "(")) {
                postfixString.push(stack.pop()); //append stacktop to postfix string pop stack
            }
            stack.pop();
            //Removes the opening parenthesis
        }
    }

    //Pop out the remaining operators from the stack
    while (stack.length != 0) {
        postfixString.push(stack.pop());
    }

    result = Number(computePostFix());
    displayString = result;
    display.value = displayString;

    input = []; //Empty input array
    input.push(result);
    postfixString = [];
})

//This function checks if an input is numeric
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

//This function computes the postfix expression with the help of two other methods
function computePostFix() {
    //Evaluate postfix expression
    // Create a stack

    let resultStack = [];


    // Loop through postfix string
    for (var i = 0; i < postfixString.length; i++) {

        // if (postfixString element is an operand) push postfixString element to stack
        if (isNumeric(postfixString[i])) {
            resultStack.push(postfixString[i]);
        }

        //If postfixString[i] is an operator, we would pop the last two elements from the stack and perform the operation
        else if (isOperator(postfixString[i])) {
            var operator = postfixString[i];
            var num2 = resultStack.pop();
            var num1 = resultStack.pop();
            var tempResult = performBasicOperations(operator, num1, num2);
            resultStack.push(Number(tempResult));
        }
    }

    //postfixString = [];
    return resultStack.pop();
}

//This function calculates operator precedence
function operatorPrecedence(op1, op2) {
    if (precedence[op1] > precedence[op2]) {
        return true;
    } else {
        return false;
    }
}

//This function performms basic operations such as add,subtract,multiply,divide and modulus
function performBasicOperations(operator, num1, num2) {
    if (operator == "+") {
        return num1 + num2;
    } else if (operator == "-") {
        return num1 - num2;
    } else if (operator == "*") {
        return num1 * num2;
    } else if (operator == "/") {
        return num1 / num2;
    } else if (operator == "mod") {
        return num1 % num2;
    } else if (operator == "^") {
        return Math.pow(num1, num2);
    } else {
        //This should never happen
        input = [];
        postfixString = [];
        result = 0;
        number = "";
        displayString = "";
        display.value = "Error. Press C or CE";
    }
}

function isOperator(op) {
    if (((op == "+") || (op == "-") || (op == "*") || (op == "/") || (op == "mod") || (op == "^"))) {
        return true;
    } else {
        return false;
    }
}


//(event.target.value == "sin") || (event.target.value == "cos") || (event.target.value == "tan") || (event.target.value == "hyp") || (event.target.value == "n!") || (event.target.value == "log")
function performSpecialOperation(operator, operand) {

    var value = 0;
    switch (operator) {
        case "sin":
            value = sin(operand);
            break;

        case "cos":
            value = cos(operand);
            break;

        case "tan":
            value = tan(operand);
            break;


        case "n!":
            if (operand >= 0) {
                value = factorial(operand);
            } else {
                //Display error
                input = [];
                postfixString = [];
                result = 0;
                number = "";
                displayString = "";
                display.value = "Error. Press C or CE";
            }
            break;

        case "log":
            value = log(operand);
            break;

        case "√":
            value = squareRoot(operand);
            break;

        case "x^2":
            value = square(operand);
            break;

        case "asin":
            value = asin(operand);
            break;

        case "acos":
            value = acos(operand);
            break;

        case "atan":
            value = atan(operand);
            break;

        case "abs":
            value = abs(operand);
            break;

        case "10x":
            value = Math.pow(10, operand);
            break;


    }
    return value;
}

function cos(num) {
    return Math.cos(num * Math.PI / 180);
}

function sin(num) {
    return Math.sin(num * Math.PI / 180);
}

function tan(num) {
    return Math.tan(num * Math.PI / 180);
}


function log(num) {
    return Math.log10(num * Math.PI / 180);
}

function squareRoot(num) {
    return Math.sqrt(num);
}

function abs(num) {
    return Math.abs(num);
}

function asin(num) {
    return Math.asin(num * Math.PI / 180);
}

function acos(num) {
    return Math.acos(num * Math.PI / 180);
}

function atan(num) {
    return Math.atan(num * Math.PI / 180);
}

function square(num) {
    return num * num;
}

function factorial(num) {
    var answer = 1;
    while (num > 1) {
        answer *= num;
        num--;
    }
    return answer;
}