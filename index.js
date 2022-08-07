let homeScore = document.getElementById("home-score")
let updatedHomeCount = 0

function addOneHomeScore() {
  updatedHomeCount += 1
  homeScore.textContent = updatedHomeCount
}

function addTwoHomeScore() {
  updatedHomeCount += 2
  homeScore.textContent = updatedHomeCount
}

function addThreeHomeScore() {
  updatedHomeCount += 3
  homeScore.textContent = updatedHomeCount
}

function subOneHomeScore() {
  updatedHomeCount -= 1
  if (updatedHomeCount < 0) {
    updatedHomeCount = 0
  }
  homeScore.textContent = updatedHomeCount
}