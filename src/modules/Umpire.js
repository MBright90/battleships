const utilities = require('./utilities').default

class Umpire {
  constructor(firstPlayer, secondPlayer) {
    this.score = 0
    this.currentPlayer = firstPlayer
    this.currentOpponent = secondPlayer
    this.players = [firstPlayer, secondPlayer]
  }

  setOpponent(opponent) {
    this.opponentType = opponent
  }

  getCurrentPlayer() {
    return this.currentPlayer
  }

  switchCurrentPlayer(nextPlayer) {
    this.currentPlayer = nextPlayer
    return this.currentPlayer
  }

  getCurrentOpponent() {
    return this.currentOpponent
  }

  switchCurrentOpponent(nextOpponent) {
    this.currentOpponent = nextOpponent
    return this.currentOpponent
  }

  isAvailable(target, player, ship, takenPositions, axis) {
    let isAvailable = true
    const cellArray = utilities.createCellArray(target, player.getBoardName(), ship.size, axis)
    if (cellArray.length !== ship.size) isAvailable = false
    cellArray.forEach((cell) => {
      if (takenPositions.includes(cell)) {
        isAvailable = false
      }
    })
    return isAvailable
  }

  checkHit(cell, shipPositions) {
    if (shipPositions.includes(cell)) return true
    return false
  }

  setUpGame() {
    // Place logic for choosing ship spaces
  }

  playGame() {
    // Place recursive logic for playing the game
  }

  resetGame() {
    // Place logic for resetting the game
  }
}

module.exports = Umpire
