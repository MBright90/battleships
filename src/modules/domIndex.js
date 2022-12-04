const dom = (() => {
  // ***************** //
  // Utility functions //
  // ***************** //
  function createClassElement(newElement, ...classes) {
    const element = document.createElement(newElement)
    classes.forEach((className) => element.classList.add(className))
    return element
  }

  function createTextElement(newElement, text) {
    const element = document.createElement(newElement)
    element.textContent = text
    return element
  }

  function appendChildren(element, ...children) {
    children.forEach((child) => element.appendChild(child))
    return element
  }

  // Parses an array of attributes where each attribute is a key/value object
  function setAttributes(element, attributes) {
    attributes.forEach((object) => {
      Object.keys(object).forEach((key) => element.setAttribute(key, object[key]))
    })
    return element
  }

  // *************************** //
  // Board creation/manipulation //
  // *************************** //

  function newBoard(boardClassName, size) {
    const boardRow = (rowNumber) => {
      const currentRow = document.createElement('div')
      currentRow.classList.add('row')
      for (let i = 1; i <= size; i += 1) {
        const boardCell = createClassElement('div', 'cell')
        setAttributes(
          boardCell,
          [
            { 'dataset-x-pos': i },
            { 'dataset-y-pos': rowNumber },
          ],
        )
        currentRow.appendChild(boardCell)
      }
      return currentRow
    }

    const boardWrapper = createClassElement('div', 'game-board', boardClassName)
    for (let i = 1; i <= size; i += 1) boardWrapper.appendChild(boardRow(i))
    return boardWrapper
  }

  function createBoards() {
    const main = document.querySelector('main')
    main.childNodes.forEach((node) => node.remove())
    appendChildren(
      main,
      newBoard('player-one-board', 10),
      newBoard('player-two-board', 10),
    )
  }

  function addBoardHover(boardName) {
    const boardCells = document.querySelectorAll(`.${boardName} .row .cell`)
    boardCells.forEach((cell) => {
      cell.style.backgroundColor = '#eedefe'
    })
  }

  // function placeShip(shipSize, direction, sizeQueue) { if (sizeQueue.length == 0) return }

  // **************** //
  // Dom manipulation //
  // **************** //

  function createOppositionChoices() {
    const createChoiceButton = (choice) => {
      const button = createTextElement('button', choice)
      button.dataset.choice = choice
      return button
    }

    const choicesContainer = createClassElement('div', 'choices-container')
    const choicesPrompt = createTextElement('p', 'Choose Your Opponent')
    const choicesButtonContainer = createClassElement('div', 'choices-buttons-container')
    appendChildren(
      choicesButtonContainer,
      createChoiceButton('Player'),
      createChoiceButton('AI'),
    )
    return appendChildren(
      choicesContainer,
      choicesPrompt,
      choicesButtonContainer,
    )
  }

  function removeElements(...elements) {
    elements.forEach((element) => element.remove())
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
    main.appendChild(createOppositionChoices())

    // Create footer
    const footer = document.createElement('footer')
    footer.appendChild(
      createTextElement('p', 'MBright90'),
    )

    // Append all to layout wrapper
    appendChildren(
      layoutWrapper,
      header,
      main,
      footer,
    )
    return layoutWrapper
  }

  return {
    initPage,

    createBoards,
    addBoardHover,

    removeElements,
  }
})()

export default dom
