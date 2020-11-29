// Assigning variables
// Questions
var qOne = document.getElementById("question-one");
var qTwo = document.getElementById("question-two");
var qThree = document.getElementById("question-three");
var qFour = document.getElementById("question-four");
var qFive = document.getElementById("question-five");
var qSix = document.getElementById("question-six");

// Answer buttons
var q1Buttons = document.querySelector("#q1-button");
var q1CorrectButton = document.querySelector("#correct-q1");

// Other variables
var menu = document.getElementById("start-menu");

var start = document.querySelector(".start-button");

var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");

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

// Array with all questions
var questions = [qOne, qTwo, qThree, qFour, qFive, qSix];

// Quiz function
function startQuiz(event) {
    event.preventDefault();

    menu.hidden = true;
    qOne.hidden = false;

    function correctAnswer(event) {
        event.preventDefault();

        qOne.hidden = true;
        qTwo.hidden = false;
        correct.hidden = false;
    }

    function incorrectAnswer(event) {
        event.preventDefault();

        qOne.hidden = true;
        qTwo.hidden = false;
        incorrect.hidden = false;
    }

    q1CorrectButton.addEventListener("click", correctAnswer)
    q1Buttons.addEventListener("click", incorrectAnswer)
}

start.addEventListener("click", startQuiz)