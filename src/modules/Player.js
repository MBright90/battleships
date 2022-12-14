const Brain = require('./aiBrain')

class Player {
  constructor(boardName, playerName) {
    this.playerName = playerName
    this.playerScore = 0
    this.playerType = 'human'
    this.moves = []
    this.boardName = boardName
    this.currentShip = 'carrier'
    this.ships = {
      carrier: {
        name: 'carrier',
        size: 5,
        position: [],
        image: './assets/images/carrier.png',
      },
      battleship: {
        name: 'battleship',
        size: 4,
        position: [],
        image: './assets/images/battleship.png',
      },
      submarine: {
        name: 'submarine',
        size: 3,
        position: [],
        image: './assets/images/submarine.png',
      },
      cruiser: {
        name: 'cruiser',
        size: 3,
        position: [],
        image: './assets/images/cruiser.png',
      },
      destroyer: {
        name: 'destroyer',
        size: 2,
        position: [],
        image: './assets/images/destroyer.png',
      },
    }
  }

  #initiateBrain() {
    this.brain = new Brain()
  }

  setPlayerType(playerType) {
    this.playerType = playerType
    if (this.playerType === 'ai') this.#initiateBrain()
  }

  setPlayerName(newName) {
    this.playerName = newName
    return this.playerName
  }

  resetPlayer() {
    this.moves = []
    this.currentShip = 'carrier'
    Object.keys(this.ships).forEach((ship) => {
      this.ships[ship].position = []
    })
    this.brain = null
  }

  // **************** //
  // Standard getters //
  // **************** //

  getPlayerType() {
    return this.playerType
  }

  getPlayerName() {
    return this.playerName
  }

  getPlayerScore() {
    return this.playerScore
  }

  getBoardName() {
    return this.boardName
  }

  getMoves() {
    return this.moves
  }

  getCurrentShip() {
    if (!this.currentShip) return null
    return this.ships[this.currentShip]
  }

  getNextShip() {
    const unused = Object.keys(this.ships).filter((ship) => this.ships[ship].position.length === 0)
    if (unused.length > 0) this.currentShip = this.ships[unused[0]].name
    else this.currentShip = null
    return this.currentShip
  }

  // ****************** //
  // Position functions //
  // ****************** //

  addShipPosition(positionArray, shipName) {
    if (positionArray.length === this.ships[shipName].size) {
      this.ships[shipName].position = positionArray
    }
  }

  getShipsPosition(shipName) {
    return this.ships[shipName].position
  }

  allShipPositions() {
    const positions = []
    Object.keys(this.ships).forEach((ship) => {
      this.ships[ship].position.forEach((position) => { positions[positions.length] = position })
    })
    return positions
  }

  // ********************** //
  // Turn outcome functions //
  // ********************** //

  incrementScore() {
    this.playerScore += 1
    return this.playerScore
  }

  addMove(move) {
    this.moves[this.moves.length] = move
  }

  findTargetShip(cell) {
    let targetShip = null
    Object.keys(this.ships).forEach((ship) => {
      if (this.ships[ship].position.includes(cell)) targetShip = ship
    })
    return targetShip
  }

  checkShipStatus(shipName, turnsTaken) {
    const positionArr = this.ships[shipName].position
    if (positionArr.every((position) => turnsTaken.includes(position))) return positionArr[0]
    return false
  }

  // *************** //
  // Image functions //
  // *************** //

  getImagePath(shipName) {
    return this.ships[shipName].image
  }

  // ********************** //
  // ai brain communication //
  // ********************** //

  simulateShipPlacement(board) {
    return this.brain.chooseShipPosition(board)
  }

  simulateAiTurn(opponentBoard) {
    let chosenSpace
    if (this.brain.getHuntingStatus()) {
      // Choose an unused space beside a hit where the ship hasn't been sunk
      chosenSpace = this.brain.huntShipSpace(opponentBoard, this.moves)
    } else {
      // Choose a random space if not currently hunting for a ship
      let spaceAvailable = false
      while (!spaceAvailable) {
        chosenSpace = this.brain.chooseSpace(opponentBoard)
        if (!chosenSpace.classList.contains('chosen')) spaceAvailable = true
      }
    }
    return chosenSpace
  }

  checkHunting() {
    return this.brain.getHuntingStatus()
  }

  setHuntStatus(cell) {
    this.brain.setHuntingTrue()
    this.brain.addHuntHit(cell)
  }

  getHuntHits() {
    return this.brain.getHuntHits()
  }

  endHunt(sunkShip) {
    this.brain.endHuntCheck(sunkShip)
  }
}

module.exports = Player
