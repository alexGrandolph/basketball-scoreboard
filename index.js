let homeScore = document.getElementById("home-score")
let updatedHomeCount = 0
function addOneHomeScore() {
  updatedHomeCount += 1
  homeScore.innerText = updatedHomeCount

}