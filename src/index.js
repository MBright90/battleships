import './style/style.css'
import dom from './modules/domIndex'
import Umpire from './modules/Umpire'

document.body.appendChild(dom.initPage())
const umpire = new Umpire('player')
const axis = 'x'

// ****************** //
// Listener functions //
// ****************** //

function placeShipListeners(boardName, shipLength) {
  const boardCells = document.querySelectorAll(`.${boardName} .row .cell`)
  boardCells.forEach((cell) => cell.addEventListener('click', (e) => {
    dom.placeShipCallback(e, shipLength, axis)
  }))
}

function removeHoverListeners() {
  const boardCells = document.querySelectorAll('.row .cell')
  boardCells.forEach((cell) => {
    if (cell.style.backgroundColor === 'rgba(180, 180, 180, 0.5)') cell.style.backgroundColor = ''
    cell.removeEventListener('mouseover', dom.boardHoverCallback)
    cell.removeEventListener('mouseout', dom.boardHoverCallback)
    cell.removeEventListener('click', removeHoverListeners)
  })
}

function addHoverListeners(boardName) {
  const boardCells = document.querySelectorAll(`.${boardName} .row .cell`)
  boardCells.forEach((cell) => cell.addEventListener('mouseover', dom.boardHoverCallback))
  boardCells.forEach((cell) => cell.addEventListener('mouseout', dom.boardHoverCallback))
  boardCells.forEach((cell) => cell.addEventListener('click', (e) => {
    removeHoverListeners(e)
    placeShipListeners()
  }))
}

function gameSetupListeners() {
  const buttons = document.querySelectorAll('.choices-container button')

  const setupButtonCallback = (event) => {
    buttons.forEach((button) => button.remove())
    umpire.setOpponent(event.target.dataset.choice.toLowerCase())
    dom.createBoards()
    // logCell('player-one-board')
    addHoverListeners('player-one-board')
  }

  buttons.forEach((button) => button.addEventListener('click', setupButtonCallback))
}

gameSetupListeners()
