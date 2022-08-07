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
// GUEST BUTTONS
let guestScore = document.getElementById("guest-score")
let updatedGuestCount = 0

function addOneGuestScore() {
  updatedGuestCount += 1
  guestScore.textContent = updatedGuestCount
}

function addTwoGuestScore() {
  updatedGuestCount += 2
  guestScore.textContent = updatedGuestCount
}

function addThreeGuestScore() {
  updatedGuestCount += 3
  guestScore.textContent = updatedGuestCount
}

function subOneGuestScore() {
  updatedGuestCount -= 1
  if (updatedGuestCount < 0) {
    updatedGuestCount = 0
  }
  guestScore.textContent = updatedGuestCount
}

//reset button
let previousScores = document.getElementById("previous-scores")

function resetGame() {
  let scoreToSave = ` Home: ${updatedHomeCount} Away: ${updatedGuestCount} ||  `
  // let scoreToSave = "Home " + updatedHomeCount + " " + "Away: " + updatedGuestCount + ", "
  previousScores.textContent += scoreToSave
  updatedGuestCount = 0
  updatedHomeCount = 0
  guestScore.textContent = updatedGuestCount
  homeScore.textContent = updatedHomeCount

}