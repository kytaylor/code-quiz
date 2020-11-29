// Assigning variables
var qOne = document.getElementById("question-one");
var qTwo = document.getElementById("question-two");
var qThree = document.getElementById("question-three");
var qFour = document.getElementById("question-four");
var qFive = document.getElementById("question-five");
var qSix = document.getElementById("question-six");

// Makes questions start out not visible
qOne.hidden = true;
qTwo.hidden = true;
qThree.hidden = true;
qFour.hidden = true;
qFive.hidden = true;
qSix.hidden = true;

// Array with all questions
var questions = [qOne, qTwo, qThree, qFour, qFive, qSix];