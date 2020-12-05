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
var finalScore = document.getElementById("final-score");

var timer = document.querySelector(".time");
var secondsLeft = 60;

// Makes questions, score screen, and correct/incorrect start out not visible
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

// Event listeners
start.addEventListener("click", startQuiz);
document.getElementById("submit-button").addEventListener("click", scoreSubmit);

// Quiz function
function startQuiz() {
  // Timer that counts down from 60
  // Timer stops if time runs out or the end of the quiz is reached
  // Once the quiz finishes, displays the number left of the timer as the score
  var timerInterval = setInterval(function () {
    timer.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      qOne.hidden = true;
      qTwo.hidden = true;
      qThree.hidden = true;
      qFour.hidden = true;
      qFive.hidden = true;
      qSix.hidden = true;
      scoreScreen.hidden = false;
    } else if (scoreScreen.hidden == false) {
      clearInterval(timerInterval);
      var endScore = secondsLeft;
      finalScore.textContent = endScore;
      console.log(endScore)
      return endScore;
    }
    secondsLeft--;
  }, 1000);

  menu.hidden = true;
  qOne.hidden = false;

  // If an incorrect answer is selected, runs incorrect function
  for (var i = 0; i < q1Buttons.length; i++) {
    q1Buttons[i].addEventListener("click", incorrectAnswer);
  }

  // If a correct answer is selected, runs correct function
  for (var i = 0; i < q1CorrectButton.length; i++) {
    q1CorrectButton[i].addEventListener("click", correctAnswer);
  }

  // Correct function that moves to next question and displays "correct" at the bottom of the screen
  function correctAnswer(event) {
    event.preventDefault();

    if (qOne.hidden == false) {
      qOne.hidden = true;
      qTwo.hidden = false;
      correct.hidden = false;
    } else if (qTwo.hidden == false) {
      qTwo.hidden = true;
      qThree.hidden = false;
      incorrect.hidden = true;
      correct.hidden = false;
    } else if (qThree.hidden == false) {
      qThree.hidden = true;
      qFour.hidden = false;
      incorrect.hidden = true;
      correct.hidden = false;
    } else if (qFour.hidden == false) {
      qFour.hidden = true;
      qFive.hidden = false;
      incorrect.hidden = true;
      correct.hidden = false;
    } else if (qFive.hidden == false) {
      qFive.hidden = true;
      qSix.hidden = false;
      incorrect.hidden = true;
      correct.hidden = false;
    } else if (qSix.hidden == false) {
      qSix.hidden = true;
      scoreScreen.hidden = false;
      incorrect.hidden = true;
      correct.hidden = false;
    }
  }

  // Incorrect function that moves to next question, displays "incorrect" at the bottom of the screen, and removes 10 seconds from the timer
  function incorrectAnswer(event) {
    event.preventDefault();

    secondsLeft -= 10;

    if (qOne.hidden == false) {
      qOne.hidden = true;
      qTwo.hidden = false;
      incorrect.hidden = false;
    } else if (qTwo.hidden == false) {
      qTwo.hidden = true;
      qThree.hidden = false;
      correct.hidden = true;
      incorrect.hidden = false;
    } else if (qThree.hidden == false) {
      qThree.hidden = true;
      qFour.hidden = false;
      correct.hidden = true;
      incorrect.hidden = false;
    } else if (qFour.hidden == false) {
      qFour.hidden = true;
      qFive.hidden = false;
      correct.hidden = true;
      incorrect.hidden = false;
    } else if (qFive.hidden == false) {
      qFive.hidden = true;
      qSix.hidden = false;
      correct.hidden = true;
      incorrect.hidden = false;
    } else if (qSix.hidden == false) {
      qSix.hidden = true;
      scoreScreen.hidden = false;
      correct.hidden = true;
      incorrect.hidden = false;
    }
  }
}

// Function that takes the entered name and final score and adds to local storage
function scoreSubmit(event) {
  event.preventDefault();

  var allScores = JSON.parse(localStorage.getItem("score-final")) || [];
  console.log(allScores)

  var name = document.querySelector("#name-input").value;
  var lastScore = finalScore.textContent;
  var fullScore = name + " - - - " + lastScore;

  if (name === "") {
    alert("Please enter your name!");
    return;
  }

  allScores.push(fullScore);

  localStorage.setItem("score-final", JSON.stringify(allScores));
  window.location.href='file:///C:/Users/mocha/code/code-quiz/scoreboard.html'

  // Retreives local stroage 
  var storedScores = localStorage.getItem("score-final");
  storedScores = JSON.parse(storedScores);
  console.log(storedScores)
  console.log(storedScores.length)

  if (storedScores !== null) {
    scoreList.innerHTML = "";
      for (var i = 0; i < storedScores.length; i++) {

          var newScoreItem = document.createElement("li");
          newScoreItem.innerText = storedScores[i];
          scoreList.appendChild(newScoreItem);

      }
  }
}