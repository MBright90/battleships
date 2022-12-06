import utilities from './utilities'

class Umpire {
  constructor(currentPlayer) {
    this.score = 0
    this.currentPlayer = currentPlayer

    this.playerMoves = []
    this.opponentMoves = []
  }

  setOpponent(opponent) {
    this.opponent = opponent
  }

  getCurrentPlayer() {
    return this.currentPlayer
  }

  switchCurrentPlayer(nextPlayer) {
    this.currentPlayer = nextPlayer
  }

  isAvailable(target, player, ship, takenPositions, axis) {
    let isAvailable
    const cellArray = utilities.createCellArray(target, player.getBoardName(), ship.size, axis)
    if (!cellArray.length === ship.size) return false
    cellArray.forEach((cell) => {
      if (takenPositions.includes(cell)) {
        isAvailable = false
      }
    })
    return isAvailable
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

export default { Umpire }
