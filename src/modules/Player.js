class Player {
  constructor(boardName) {
    this.moves = []
    this.boardName = boardName
    this.currentShip = 'carrier'
    this.ships = {
      carrier: {
        name: 'carrier',
        size: 5,
        status: 'active',
        position: [],
        image: './assets/images/carrier.png',
      },
      battleship: {
        name: 'battleship',
        size: 4,
        status: 'active',
        position: [],
        image: './assets/images/battleship.png',
      },
      submarine: {
        name: 'submarine',
        size: 3,
        status: 'active',
        position: [],
        image: './assets/images/submarine.png',
      },
      cruiser: {
        name: 'cruiser',
        size: 3,
        status: 'active',
        position: [],
        image: './assets/images/cruiser.png',
      },
      destroyer: {
        name: 'destroyer',
        size: 2,
        status: 'active',
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
    return this.currentShip
  }

  getNextShip() {
    const unused = Object.keys(this.ships).filter((ship) => this.ships[ship].position.length === 0)
    if (unused.length === 0) return false
    return this.ships[unused[0]]
  }

  // ****************** //
  // Position functions //
  // ****************** //

  addShipPosition(positionArray, shipName) {
    if (positionArray.length <= this.ships[shipName].size) {
      this.ships[shipName].position = positionArray
    }
  }

  getShipsPosition(shipName) {
    return this.ships[shipName].position
  }

  allShipPositions() {
    const positions = []
    Object.keys(this.ships).forEach((ship) => {
      if (ship.positions) positions[positions.length] = ship.positions
    })
    return positions
  }

  // *************** //
  // Image functions //
  // *************** //

  getImagePath(shipName) {
    return this.ships[shipName].image
  }
}

module.exports = Player
