// *************** //
// Brain utilities //
// *************** //

function generateRandom(maxNum) {
  // + 1 ensures number can include max and disregard 0
  return Math.floor(Math.random() * maxNum) + 1
}

function findCell(boardName, x, y) {
  return document.querySelector(`.${boardName} .row .cell[data-x-pos="${x}"][data-y-pos="${y}"]`)
}

// *********** //
// Brain class //
// *********** //

class Brain {
  constructor() {
    this.currentlyHunting = false
    this.currentHuntHits = []
    this.currentHuntPlacements = []
    this.currentHuntAxis = null
  }

  // Ship hunting functions used when part of a ship is located //

  getHuntingStatus() {
    return this.currentlyHunting
  }

  setHuntingTrue() {
    this.currentlyHunting = true
  }

  addHuntHit(cell) {
    this.currentHuntHits[this.currentHuntHits.length] = cell
  }

  addHuntPosition(cell) {
    this.currentHuntPlacements[this.currentHuntPlacements.length] = cell
  }

  endCurrentHunt() {
    this.currentlyHunting = false
    this.currentHuntHits = []
    this.currentHuntPositions = []
  }

  #checkHuntAxis() {
    if (!this.currentHuntAxis) {
      try {
        if (this.currentHuntHits[0].dataset.xPos === this.currentHuntHits[1].dataset.xPos) this.currentHuntAxis = 'x'
        if (this.currentHuntHits[0].dataset.yPos === this.currentHuntHits[1].dataset.yPos) this.currentHuntAxis = 'y'
      } catch {
        console.log('No axis set')
      }
    }
    return this.currentHuntAxis
  }

  #searchCell(cell, board) {
    const manipulationArr = [1, -1]
    const xCoord = cell.dataset.xPos
    const yCoord = cell.dataset.yPos

    const availableSpaces = []
    if (this.#checkHuntAxis() !== 'y') {
      manipulationArr.filter((manipulation) => {
        const newCoord = xCoord + manipulation
        const newCell = findCell(board, newCoord, yCoord)
        if (!this.currentHuntPlacements.includes(newCell)) return true
        return false
      })
    }

    if (this.#checkHuntAxis() !== 'x'
        && availableSpaces.length <= 0) {
      manipulationArr.filter((manipulation) => {
        const newCoord = yCoord + manipulation
        const newCell = findCell(board, xCoord, newCoord)
        if (!this.currentHuntPlacements.includes(newCell)) return true
        return false
      })
    }
    console.log(availableSpaces)
    return availableSpaces
  }

  huntShipSpace(board) {
    const nextShipSpace = null
    this.currentHuntHit.forEach((cell) => {
      const availableSpaces = this.#searchCell(cell, board)
    })
  }

  // General position choosing functions //

  chooseSpace(board) {
    const randomX = generateRandom(10)
    const randomY = generateRandom(10)
    return findCell(board, randomX, randomY)
  }

  chooseShipPosition(board) {
    const axisArray = ['x', 'y']
    const cell = this.chooseSpace(board)
    const randomAxis = axisArray[generateRandom(2) - 1]
    return [cell, randomAxis]
  }
}

module.exports = Brain
