const dom = (() => {
  // ***************** //
  // Utility functions //
  // ***************** //
  function createClassElement(newElement, ...classes) {
    const element = document.createElement(newElement)
    classes.forEach((className) => element.classlist.add(className))
    return element
  }

  function createTextElement(newElement, text) {
    const element = document.createElement(newElement)
    element.textContent = text
    return element
  }

  // HTMLElement.appendChildren
  HTMLElement.prototype.appendChildren = function appendChildren(...children) {
    children.forEach((child) => this.appendChild(child))
  }

  // HTMLElement.setAttributes
  // Parses an array of attributes where each attribute is a key/value object
  HTMLElement.prototype.setAttributes = function setAttributes(...attributes) {
    Object.keys(attributes).forEach((key) => this.setAttribute(key, attributes[key]))
  }

  // *************************** //
  // Board creation/manipulation //
  // *************************** //

  function newBoard(boardClassName) {
    const boardRow = (rowNumber) => {
      const currentRow = document.createElement('div')
      currentRow.classList.add('row')
      for (let i = 1; i <= this.boardLengthHeight; i += 1) {
        const boardCell = document.createElement('div')
        boardCell.classList.add('cell')
        boardCell.dataset.xPos = i
        boardCell.dataset.yPos = rowNumber
        currentRow.appendChild(boardCell)
      }
      return currentRow
    }

    const boardWrapper = document.createElement('div', 'game-board', boardClassName)
    for (let i = 1; i <= this.boardLengthHeight; i += 1) boardWrapper.appendChild(boardRow(i))
    return boardWrapper
  }

  // ********************* //
  // Initial page creation //
  // ********************* //

  function initPage() {
    const layoutWrapper = createClassElement('div', 'layout-wrapper')

    // Create header
    const header = document.createElement('header')
    const headerTitle = createTextElement('h1', 'Battleships')
    header.appendChild(headerTitle)

    // Create main
    const main = document.createElement('main')
    main.appendChildren(
      newBoard('player-one'),
      newBoard('player-two'),
    )

    // Create footer
    const footer = document.createElement('footer')
    footer.appendChild(
      createTextElement('p', 'MBright90'),
    )

    // Append all to layout wrapper
    layoutWrapper.appendChildren(
      header,
      main,
      footer,
    )
    return layoutWrapper
  }

  return initPage
})()

export default { dom }
