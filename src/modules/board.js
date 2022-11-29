export default class Board {
  constructor(boardLengthHeight) {
    this.boardLengthHeight = boardLengthHeight || 10
    this.currentAxis = 'x'
  }

  #applyMultipleClasses(element, ...classNames) {
    classNames.forEach((className) => element.classList.add(className))
  }

  #boardRow = (rowNumber) => {
    const boardRow = document.createElement('div')
    boardRow.classList.add('row')
    for (let i = 1; i <= this.boardLengthHeight; i += 1) {
      const boardCell = document.createElement('div')
      boardCell.classList.add('cell')
      boardCell.dataset.xPos = i
      boardCell.dataset.yPos = rowNumber
      boardRow.appendChild(boardCell)
    }
    return boardRow
  }

  newBoard = (boardClassName) => {
    const boardWrapper = document.createElement('div')
    this.#applyMultipleClasses(boardWrapper, 'game-board', boardClassName)
    for (let i = 1; i <= this.boardLengthHeight; i += 1) boardWrapper.appendChild(this.#boardRow(i))
    return boardWrapper
  }

  // Show possible spaces function
}
