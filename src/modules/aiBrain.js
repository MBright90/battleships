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
    this.currentHuntPositions = []
  }

  huntShipSpace() {
  }

  // General position choosing functions //

  chooseSpace(board) {
    let cell
    if (this.currentlyHunting) cell = this.huntShipPosition()
    else {
      const randomX = generateRandom(10)
      const randomY = generateRandom(10)
      cell = findCell(board, randomX, randomY)
    }

    return cell
  }

  chooseShipPosition(board) {
    const axisArray = ['x', 'y']
    const cell = this.chooseSpace(board)
    const randomAxis = axisArray[generateRandom(2) - 1]
    return [cell, randomAxis]
  }
}

module.exports = Brain
