const utilities = (() => {
  function createCellArray(cell, boardName, shipLength, axis) {
    const cellArray = []
    for (let i = 0; i < shipLength; i += 1) {
      let currentCell
      if (axis === 'x') currentCell = document.querySelector(`.${boardName} .cell[data-x-pos="${parseInt(cell.dataset.xPos, 10) + i}"][data-y-pos="${cell.dataset.yPos}"]`)
      if (axis === 'y') currentCell = document.querySelector(`.${boardName} .cell[data-x-pos="${cell.dataset.xPos}"][data-y-pos="${parseInt(cell.dataset.yPos, 10) + i}"]`)
      if (currentCell) cellArray[cellArray.length] = currentCell
    }
    return cellArray
  }

  return { createCellArray }
})()

module.exports = utilities
