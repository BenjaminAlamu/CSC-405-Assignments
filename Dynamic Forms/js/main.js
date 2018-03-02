var firstFormElement = document.getElementById("first");
var content = document.getElementById("form");

//Div containers for each of the questions
var secoundElementDiv = document.createElement("div");
var thirdElementDiv = document.createElement("div");
var fourthElementDiv = document.createElement("div");
var fifthElementDiv = document.createElement("div");
var sixthElementDiv = document.createElement("div");
var resultDiv = document.createElement("div");

var label2 = document.createElement('label');
var label3 = document.createElement('label');
var label4 = document.createElement('label');
var label5 = document.createElement('label');
var label6 = document.createElement('label');

var inp2 = document.createElement("input");
var inp3 = document.createElement("input");
var inp4 = document.createElement("input");
var inp5 = document.createElement("input");


var label = document.createElement("label");
var submit = document.createElement("input");


firstFormElement.addEventListener("keyup", (event) => {

    if (firstFormElement.value.toLowerCase() == "computer science") {

        //Create new html element for the question
        label2.textContent = "Thats cool, so do you program";
        secoundElementDiv.appendChild(label2);

        inp2.type = "text";
        secoundElementDiv.appendChild(inp2);

        inp2.focus();
        inp2.value = "";

        content.appendChild(secoundElementDiv);
        content.removeChild(label);
    }

    //Remove elements from all childern nodes
    else {


        label.textContent = "Wrong input, You must be in Computer Science to continue";
        content.appendChild(label);

        while (secoundElementDiv.hasChildNodes()) {
            secoundElementDiv.removeChild(secoundElementDiv.lastChild);
        }

        while (thirdElementDiv.hasChildNodes()) {
            thirdElementDiv.removeChild(thirdElementDiv.lastChild);
        }

        while (fourthElementDiv.hasChildNodes()) {
            fourthElementDiv.removeChild(fourthElementDiv.lastChild);
        }

        while (fifthElementDiv.hasChildNodes()) {
            fifthElementDiv.removeChild(fifthElementDiv.lastChild);
        }

        while (sixthElementDiv.hasChildNodes()) {
            sixthElementDiv.removeChild(sixthElementDiv.lastChild);
        }

        while (resultDiv.hasChildNodes()) {
            resultDiv.removeChild(resultDiv.lastChild);
        }
    }
});

inp2.addEventListener("keyup", (event) => {

    if (inp2.value.toLowerCase() == "yes") {

        label3.textContent = "Whats your Speciality( Web,Database or Desktop)";
        thirdElementDiv.appendChild(label3);

        inp3.type = "text";
        thirdElementDiv.appendChild(inp3);

        inp3.focus();
        inp3.value = "";

        content.appendChild(thirdElementDiv);
        content.removeChild(label);
    } else if (inp2.value.toLowerCase() == "no") {
        label3.textContent = "So you dont program, then what do you spend your time doing? Music or Sports";
        thirdElementDiv.appendChild(label3);

        inp3.type = "text";
        thirdElementDiv.appendChild(inp3);

        content.appendChild(thirdElementDiv);
        content.removeChild(label);
    } else {

        label.textContent = "Enter Yes or No";
        content.appendChild(label);
        while (thirdElementDiv.hasChildNodes()) {
            thirdElementDiv.removeChild(thirdElementDiv.lastChild);
        }

        while (fourthElementDiv.hasChildNodes()) {
            fourthElementDiv.removeChild(fourthElementDiv.lastChild);
        }

        while (fifthElementDiv.hasChildNodes()) {
            fifthElementDiv.removeChild(fifthElementDiv.lastChild);
        }

        while (sixthElementDiv.hasChildNodes()) {
            sixthElementDiv.removeChild(sixthElementDiv.lastChild);
        }

        while (resultDiv.hasChildNodes()) {
            resultDiv.removeChild(resultDiv.lastChild);
        }
    }
});

inp3.addEventListener("keyup", (event) => {
    if (inp3.value.toLowerCase() == "web") {

        //Create new html element for the question
        label4.textContent = "Are you a Front-end or Back-end developer";
        fourthElementDiv.appendChild(label4);

        inp4.type = "text";
        fourthElementDiv.appendChild(inp4);

        inp4.focus();
        inp4.value = "";

        content.appendChild(fourthElementDiv);
        content.removeChild(label);
    } else if (inp3.value.toLowerCase() == "database") {

        //Create new html element for the question
        label4.textContent = "Do you use 'Relational' or 'Object-Oriented' Database";
        fourthElementDiv.appendChild(label4);

        inp4.type = "text";
        fourthElementDiv.appendChild(inp4);

        content.appendChild(fourthElementDiv);
        content.removeChild(label);
    } else if (inp3.value.toLowerCase() == "desktop") {

        //Create new html element for the question
        label4.textContent = "Do you use 'Procedural' or 'Object-Oriented' Languages";
        fourthElementDiv.appendChild(label4);

        inp4.type = "text";
        fourthElementDiv.appendChild(inp4);

        content.appendChild(fourthElementDiv);
        content.removeChild(label);
    } else if (inp3.value.toLowerCase() == "music") {

        //Create new html element for the question
        label4.textContent = "Do like 'Rock' or 'RnB'";
        fourthElementDiv.appendChild(label4);

        inp4.type = "text";
        fourthElementDiv.appendChild(inp4);

        content.appendChild(fourthElementDiv);
        content.removeChild(label);
    } else if (inp3.value.toLowerCase() == "sports") {

        //Create new html element for the question
        label4.textContent = "Which sport do you love more 'Basketball' or 'Football'";
        fourthElementDiv.appendChild(label4);

        inp4.type = "text";
        fourthElementDiv.appendChild(inp4);

        content.appendChild(fourthElementDiv);
        content.removeChild(label);
    } else {

        label.textContent = "Select a value from the suggested options";
        content.appendChild(label);

        while (fourthElementDiv.hasChildNodes()) {
            fourthElementDiv.removeChild(fourthElementDiv.lastChild);
        }

        while (fifthElementDiv.hasChildNodes()) {
            fifthElementDiv.removeChild(fifthElementDiv.lastChild);
        }

        while (sixthElementDiv.hasChildNodes()) {
            sixthElementDiv.removeChild(sixthElementDiv.lastChild);
        }
        while (resultDiv.hasChildNodes()) {
            resultDiv.removeChild(resultDiv.lastChild);
        }
    }
});

inp4.addEventListener("keyup", (event) => {
    if (inp4.value.toLowerCase() == "front-end") {

        //Create new html element for the question
        label5.textContent = "Kindly, enter the languages you use";
        fifthElementDiv.appendChild(label5);

        inp5.type = "text";
        fifthElementDiv.appendChild(inp5);

        inp5.focus();
        inp5.value = "";

        content.appendChild(fifthElementDiv);
        content.removeChild(label);
    } else if (inp4.value.toLowerCase() == "back-end") {

        //Create new html element for the question
        label5.textContent = "Kindly, enter the languages you use";
        fifthElementDiv.appendChild(label5);

        inp5.type = "text";
        fifthElementDiv.appendChild(inp5);

        inp5.focus();
        inp5.value = "";

        content.appendChild(fifthElementDiv);
        content.removeChild(label);
    } else if (inp4.value.toLowerCase() == "relational") {

        //Create new html element for the question
        label5.textContent = "Kindly, enter the languages you use";
        fifthElementDiv.appendChild(label5);

        inp5.type = "text";
        fifthElementDiv.appendChild(inp5);

        content.appendChild(fifthElementDiv);
        content.removeChild(label);
    } else if (inp4.value.toLowerCase() == "object-oriented") {

        //Create new html element for the question
        label5.textContent = "Kindly, enter the languages you use";
        fifthElementDiv.appendChild(label5);

        inp5.type = "text";
        fifthElementDiv.appendChild(inp5);

        content.appendChild(fifthElementDiv);
        content.removeChild(label);
    } else if (inp4.value.toLowerCase() == "procedural") {

        //Create new html element for the question
        label5.textContent = "Kindly, enter the languages you use";
        fifthElementDiv.appendChild(label5);

        inp5.type = "text";
        fifthElementDiv.appendChild(inp5);

        content.appendChild(fifthElementDiv);
        content.removeChild(label);
    } else if (inp4.value.toLowerCase() == "rock") {

        //Create new html element for the question
        label5.textContent = "Kindly, enter your favourite musicians";
        fifthElementDiv.appendChild(label5);

        inp5.type = "text";
        fifthElementDiv.appendChild(inp5);

        content.appendChild(fifthElementDiv);
        content.removeChild(label);
    } else if (inp4.value.toLowerCase() == "rnb") {

        //Create new html element for the question
        label5.textContent = "Kindly, enter favourite musicians";
        fifthElementDiv.appendChild(label5);

        inp5.type = "text";
        fifthElementDiv.appendChild(inp5);

        content.appendChild(fifthElementDiv);
        content.removeChild(label);
    } else if (inp4.value.toLowerCase() == "football") {

        //Create new html element for the question
        label5.textContent = "Kindly, enter your favourite football team";
        fifthElementDiv.appendChild(label5);

        inp5.type = "text";
        fifthElementDiv.appendChild(inp5);

        content.appendChild(fifthElementDiv);
        content.removeChild(label);
    } else if (inp4.value.toLowerCase() == "basketball") {

        //Create new html element for the question
        label5.textContent = "Kindly, enter your favourite basketball team";
        fifthElementDiv.appendChild(label5);

        inp5.type = "text";
        fifthElementDiv.appendChild(inp5);

        content.appendChild(fifthElementDiv);
        content.removeChild(label);
    } else {

        label.textContent = "Select a value from the suggested options";
        content.appendChild(label);

        while (fifthElementDiv.hasChildNodes()) {
            fifthElementDiv.removeChild(fifthElementDiv.lastChild);
        }

        while (sixthElementDiv.hasChildNodes()) {
            sixthElementDiv.removeChild(sixthElementDiv.lastChild);
        }

        while (resultDiv.hasChildNodes()) {
            resultDiv.removeChild(resultDiv.lastChild);
        }
    }
});

inp5.addEventListener("keyup", () => {
    if (inp5.value.length > 0) {

        submit.type = "button";
        submit.value = "Submit Form";
        submit.className = "submitButton";
        sixthElementDiv.appendChild(submit);
        content.appendChild(sixthElementDiv);
        content.removeChild(label);
    } else {
        label.textContent = "Enter a value to allow form submisson";
        content.appendChild(label);

        while (sixthElementDiv.hasChildNodes()) {
            sixthElementDiv.removeChild(sixthElementDiv.lastChild);
        }

        while (resultDiv.hasChildNodes()) {
            resultDiv.removeChild(resultDiv.lastChild);
        }
    }
});

submit.addEventListener("click", () => {

    var output = document.createElement('p');
    output.textContent = "Here are your details, feel free to edit them above"
    resultDiv.appendChild(output);

    var output1 = document.createElement('p');
    output1.textContent = firstFormElement.value;
    resultDiv.appendChild(output1);

    var output2 = document.createElement('p');
    output2.textContent = inp2.value;
    resultDiv.appendChild(output2);

    var output3 = document.createElement('p');
    output3.textContent = inp3.value;
    resultDiv.appendChild(output3);

    var output4 = document.createElement('p');
    output4.textContent = inp4.value;
    resultDiv.appendChild(output4);

    var output5 = document.createElement('p');
    output5.textContent = inp2.value;
    resultDiv.appendChild(output5);


    content.appendChild(resultDiv);
});