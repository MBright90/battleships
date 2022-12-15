// *************** //
// Brain utilities //
// *************** //

function generateRandom(maxNum) {
  return Math.floor(Math.random() * maxNum)
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
  }

  chooseSpace(board) {
    const randomX = generateRandom(10)
    const randomY = generateRandom(10)
    return findCell(board, randomX, randomY)
  }

  setPreviousTurn(cell) {
    this.previousTurn = cell
  }
}

module.exports = Brain
