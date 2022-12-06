class Umpire {
  constructor(opponent) {
    this.score = 0
    this.currentPlayer = 'player-one'
    this.opponent = opponent || 'ai'

    this.playerMoves = []
    this.opponentMoves = []
  }

  setOpponent(opponent) {
    this.opponent = opponent
  }

  getCurrentPlayer() {
    return this.currentPlayer
  }

  switchCurrentPlayer() {
    if (this.currentPlayer === 'player-one') this.currentPlayer = 'player-two'
    else this.currentPlayer = 'player-one'
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
