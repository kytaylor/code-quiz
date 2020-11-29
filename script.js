// Assigning variables
// Questions
var qOne = document.getElementById("question-one");
var qTwo = document.getElementById("question-two");
var qThree = document.getElementById("question-three");
var qFour = document.getElementById("question-four");
var qFive = document.getElementById("question-five");
var qSix = document.getElementById("question-six");

// Answer buttons
var q1Buttons = document.querySelectorAll(".q1-button");
var q1CorrectButton = document.querySelectorAll(".correct-q1");

// Other variables
var menu = document.getElementById("start-menu");

var start = document.querySelector(".start-button");

var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");

var scoreScreen = document.getElementById("score-screen");

var timer = document.querySelector(".time");
var secondsLeft = 60;

// Makes questions start out not visible
qOne.hidden = true;
qTwo.hidden = true;
qThree.hidden = true;
qFour.hidden = true;
qFive.hidden = true;
qSix.hidden = true;

correct.hidden = true;
incorrect.hidden = true;

scoreScreen.hidden = true;

// Array with all questions
var questions = [qOne, qTwo, qThree, qFour, qFive, qSix];

// Quiz function
function startQuiz(event) {
    event.preventDefault();

    menu.hidden = true;
    qOne.hidden = false;

    for (var i = 0; i < q1Buttons.length; i++) {    
        q1Buttons[i].addEventListener('click', incorrectAnswer)
    }

    for (var i = 0; i < q1CorrectButton.length; i++) {    
        q1CorrectButton[i].addEventListener('click', correctAnswer)
    }

    function correctAnswer(event) {
        event.preventDefault();

        if(qOne.hidden == false) {
            qOne.hidden = true;
            qTwo.hidden = false;
            correct.hidden = false;
        } else if(qTwo.hidden == false) {
            qTwo.hidden = true;
            qThree.hidden = false;
            incorrect.hidden = true;
            correct.hidden = false;
        } else if(qThree.hidden == false) {
            qThree.hidden = true;
            qFour.hidden = false;
            incorrect.hidden = true;
            correct.hidden = false;
        } else if(qFour.hidden == false) {
            qFour.hidden = true;
            qFive.hidden = false;
            incorrect.hidden = true;
            correct.hidden = false;
        } else if(qFive.hidden == false) {
            qFive.hidden = true;
            qSix.hidden = false;
            incorrect.hidden = true;
            correct.hidden = false;
        } else if(qSix.hidden == false) {
            qSix.hidden = true;
            scoreScreen.hidden = false;
            incorrect.hidden = true;
            correct.hidden = false;
        }
    }

    function incorrectAnswer(event) {
        event.preventDefault();

        if(qOne.hidden == false) {
            qOne.hidden = true;
            qTwo.hidden = false;
            incorrect.hidden = false;
        } else if(qTwo.hidden == false) {
            qTwo.hidden = true;
            qThree.hidden = false;
            correct.hidden = true;
            incorrect.hidden = false;
        } else if(qThree.hidden == false) {
            qThree.hidden = true;
            qFour.hidden = false;
            correct.hidden = true;
            incorrect.hidden = false;
        } else if(qFour.hidden == false) {
            qFour.hidden = true;
            qFive.hidden = false;
            correct.hidden = true;
            incorrect.hidden = false;
        } else if(qFive.hidden == false) {
            qFive.hidden = true;
            qSix.hidden = false;
            correct.hidden = true;
            incorrect.hidden = false;
        } else if(qSix.hidden == false) {
            qSix.hidden = true;
            scoreScreen.hidden = false;
            correct.hidden = true;
            incorrect.hidden = false;
        }
    }
}

start.addEventListener("click", startQuiz)