class Umpire {
  constructor(opponent) {
    this.score = 0
    this.opponent = opponent || 'ai'
    this.playerMoves = []
    this.opponentMoves = []
  }

  setOpponent(opponent) {
    this.opponent = opponent
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
