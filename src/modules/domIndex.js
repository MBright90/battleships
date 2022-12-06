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

  function createCellArray(cell, shipLength, axis) {
    const cellArray = []
    for (let i = 0; i < shipLength; i += 1) {
      let currentCell
      if (axis === 'x') currentCell = document.querySelector(`[data-x-pos="${parseInt(cell.dataset.xPos, 10) + i}"][data-y-pos="${cell.dataset.yPos}"]`)
      if (axis === 'y') currentCell = document.querySelector(`[data-x-pos="${cell.dataset.xPos}"][data-y-pos="${parseInt(cell.dataset.yPos, 10) + i}"]`)
      if (currentCell) cellArray[cellArray.length] = currentCell
    }
    return cellArray
  }

  // *************************** //
  // Board creation/manipulation //
  // *************************** //

  function createBoards() {
    function newBoard(boardClassName, size) {
      const boardRow = (rowNumber) => {
        const currentRow = document.createElement('div')
        currentRow.classList.add('row')
        for (let i = 1; i <= size; i += 1) {
          const boardCell = createClassElement('div', 'cell')
          setAttributes(
            boardCell,
            [
              { 'data-x-pos': i },
              { 'data-y-pos': rowNumber },
            ],
          )
          currentRow.appendChild(boardCell)
        }
        return currentRow
      }

      const boardDiv = createClassElement('div', 'game-board', boardClassName)
      for (let i = 1; i <= size; i += 1) boardDiv.appendChild(boardRow(i))
      return boardDiv
    }

    function createDescriptionSpace() {
      const descriptionContainer = createClassElement('div', 'description-container')
      const axisButton = createClassElement('button', 'axis-button')
      axisButton.textContent = 'Axis'
      return appendChildren(descriptionContainer, axisButton)
    }

    const main = document.querySelector('main')
    main.childNodes.forEach((node) => node.remove())
    const boardWrapper = createClassElement('div', 'board-wrapper')
    appendChildren(
      boardWrapper,
      newBoard('player-one-board', 10),
      newBoard('player-two-board', 10),
      createDescriptionSpace(),
    )
    main.appendChild(boardWrapper)
  }

  function createImage(shipName, shipImage) {
    const image = createClassElement('img', shipName)
    image.src = shipImage
    return image
  }

  function boardHoverCallback(event, shipLength, axis, currentPositions) {
    shipLength = shipLength || 1
    axis = axis || 'x'
    currentPositions = currentPositions || []

    const cellArray = createCellArray(event.target, shipLength, axis)
    if (cellArray.length === shipLength
      || cellArray.some((cell) => currentPositions.includes(cell))
    ) {
      cellArray.forEach((cell) => {
        if (!cell.style.backgroundColor) cell.style.backgroundColor = 'rgba(180, 180, 180, 0.5)'
        else cell.style.backgroundColor = ''
      })
    } else {
      cellArray.forEach((cell) => {
        if (!cell.style.backgroundColor) cell.style.backgroundColor = 'rgba(200, 95, 95, 0.7)'
        else cell.style.backgroundColor = ''
      })
    }
  }

  function placeShipCallback(event, ship, axis, available) {
    if (available) {
      event.target.appendChild(createImage(ship))
    }
  }

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

  function showCell(e) {
    const cell = e.target
    // const i = 1
    console.log(createCellArray(cell, 1, 'x'))
  }

  return {
    initPage,

    createBoards,
    boardHoverCallback,
    placeShipCallback,
    showCell,

    removeElements,
  }
})()

export default dom
