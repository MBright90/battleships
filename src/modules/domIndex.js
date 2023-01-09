import utilities from './utilities'

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

  function createAnnouncementContainer() {
    const announcementContainer = createClassElement('div', 'announcement-container')
    const main = document.querySelector('main')
    main.appendChild(announcementContainer)
    return announcementContainer
  }

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

    function createButtonSpace() {
      const descriptionContainer = createClassElement('div', 'button-container')
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
      createButtonSpace(),
    )
    main.appendChild(boardWrapper)
  }

  function boardHover(event, boardName, shipLength, axis, currentPositions) {
    shipLength = shipLength || 1
    axis = axis || 'x'
    currentPositions = currentPositions || []

    const cellArray = utilities.createCellArray(event.target, boardName, shipLength, axis)
    // Clear the array of colored cells when mouse leaves
    if (event.type === 'mouseout') cellArray.forEach((cell) => { cell.classList.remove('hovered', 'unavailable') })
    else if (cellArray.length === shipLength
      && !cellArray.some((cell) => currentPositions.includes(cell))
    ) {
      // Check that correct length and no taken spaces within the ships length worth of cells
      // If space is available color in gray
      cellArray.forEach((cell) => {
        if ((!cell.classList.contains('hovered') || !cell.classList.contains('unavailable'))
          && event.type === 'mouseover') cell.classList.add('hovered')
        else cell.classList.remove('hovered')
      })
    } else {
      // If the correct length is unavailable or there is a taken space within the ships length
      // worth of cells, color the array in red
      cellArray.forEach((cell) => {
        if (!cell.classList.contains('unavailable')) cell.classList.add('unavailable')
        else cell.classList.remove('unavailable')
      })
    }
  }

  function createImage(shipName, shipImage) {
    const image = createClassElement('img', shipName, 'ship')
    image.src = shipImage
    return image
  }

  function placeShip(player, cell, ship, axis, playerType) {
    const shipElement = createImage(ship.name, ship.image)
    if (axis === 'y') shipElement.style.transform = 'rotate(90deg)'
    if (playerType === 'ai') shipElement.style.visibility = 'hidden'
    cell.appendChild(shipElement)
    return utilities.createCellArray(cell, player.getBoardName(), ship.size, axis)
  }

  function hideShips(boardName) {
    const allShips = document.querySelectorAll(`.${boardName} .ship`)
    allShips.forEach((ship) => { ship.style.visibility = 'hidden' })
  }

  function revealShip(shipHead) {
    shipHead.children[0].style.visibility = 'visible'
  }

  function placeTakenTurn(cell, outcome) {
    cell.classList.add('chosen')
    if (outcome) cell.classList.add('hit')
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
      createChoiceButton('Human'),
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

  function createResetButton() {
    const resetButton = createClassElement('button', 'reset-button')
    resetButton.textContent = 'Reset'
    return resetButton
  }

  function removeButtons(buttonContainer) {
    buttonContainer.childNodes.forEach((node) => node.remove())
  }

  function initResetButton() {
    const buttonContainer = document.querySelector('.button-container')
    removeButtons(buttonContainer)
    const resetButton = createResetButton()
    buttonContainer.append(resetButton)
    return resetButton
  }

  function resetGameBoards() {
    const main = document.querySelector('main')
    while (main.childNodes.length >= 1) {
      main.childNodes[0].remove()
    }
    main.appendChild(createOppositionChoices())
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
    const gitHubTag = createTextElement('a', 'MBright90')
    gitHubTag.setAttribute('href', 'https://github.com/MBright90/battleships')
    footer.appendChild(gitHubTag)

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

    createAnnouncementContainer,
    createBoards,
    boardHover,
    placeShip,
    hideShips,
    revealShip,
    placeTakenTurn,

    createResetButton,
    removeButtons,
    initResetButton,
    resetGameBoards,

    removeElements,
  }
})()

export default dom
