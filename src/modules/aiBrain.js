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
    this.previousTurn = null
    this.axisArray = ['x', 'y']
  }

  chooseSpace(board) {
    const randomX = generateRandom(10)
    const randomY = generateRandom(10)
    return findCell(board, randomX, randomY)
  }

  chooseShipPosition(board) {
    const cell = this.chooseSpace(board)
    const randomAxis = this.axisArray[generateRandom(2)]
    return [cell, randomAxis]
  }

  setPreviousTurn(cell) {
    this.previousTurn = cell
  }
}

module.exports = Brain
