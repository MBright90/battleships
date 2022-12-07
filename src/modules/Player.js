class Player {
  constructor(boardName) {
    this.moves = []
    this.boardName = boardName
    this.ships = {
      carrier: {
        size: 5,
        status: 'active',
        position: [],
        image: './assets/images/carrier.jpg',
      },
      battleship: {
        size: 4,
        status: 'active',
        position: [],
        image: './assets/images/battleship.jpg',
      },
      submarine: {
        size: 3,
        status: 'active',
        position: [],
        image: './assets/images/submarine.jpg',
      },
      cruiser: {
        size: 3,
        status: 'active',
        position: [],
        image: './assets/images/cruiser.jpg',
      },
      destroyer: {
        size: 2,
        status: 'active',
        position: [],
        image: './assets/images/destroyer.jpg',
      },
    }
  }

  getBoardName() {
    return this.boardName
  }

  getNextShip() {
    const unused = Object.keys(this.ships).filter((ship) => this.ships[ship].position.length === 0)
    if (unused.length === 0) return false
    return unused[0]
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
      positions[positions.length - 1] = ship.positions
    })
  }

  // *************** //
  // Image functions //
  // *************** //

  getImagePath(shipName) {
    return this.ships[shipName].image
  }
}

module.exports = Player
