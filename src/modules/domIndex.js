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

  function appendChildren(element, ...children) {
    children.forEach((child) => element.appendChild(child))
    return element
  }

  // Parses an array of attributes where each attribute is a key/value object
  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach((key) => element.setAttribute(key, attributes[key]))
    return element
  }

  // *************************** //
  // Board creation/manipulation //
  // *************************** //

  function newBoard(boardClassName) {
    const boardRow = (rowNumber) => {
      const currentRow = document.createElement('div')
      currentRow.classList.add('row')
      for (let i = 1; i <= this.boardLengthHeight; i += 1) {
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

    const boardWrapper = document.createElement('div', 'game-board', boardClassName)
    for (let i = 1; i <= this.boardLengthHeight; i += 1) boardWrapper.appendChild(boardRow(i))
    return boardWrapper
  }

  function createBoards() {
    const main = document.querySelector('main')
    main.childNodes.forEach((node) => node.remove())
    appendChildren(
      main,
      newBoard('player-one-board'),
      newBoard('player-two-board'),
    )
  }

  // function placeShip(shipSize, direction, sizeQueue) { if (sizeQueue.length == 0) return }

  // **************** //
  // Dom manipulation //
  // **************** //

  function createOppositionChoices() {
    const createChoiceButton = (choice) => {
      const button = createTextElement('button', choice)
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
  }
})()

export default dom
