var scoreList = document.getElementById("scores");
var clearScores = document.querySelector(".clear-score")

var storedScores = JSON.parse(localStorage.getItem("score-final")) || [];
//storedScores = JSON.parse(storedScores);
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

clearScores.addEventListener("click", function(){
    localStorage.clear("score-final");
    storedScores = [];
    scoreList.innerHTML = "";
})