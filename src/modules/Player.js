class Player {
  constructor(boardName) {
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

  getBoardName() {
    return this.boardName
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
      if (this.ships[ship].position) positions[positions.length] = this.ships[ship].position
    })
    const allPositions = []
    positions.forEach((arr) => {
      arr.forEach((position) => { allPositions[allPositions.length] = position })
    })
    return allPositions
  }

  // *************** //
  // Image functions //
  // *************** //

  getImagePath(shipName) {
    return this.ships[shipName].image
  }
}

module.exports = Player
