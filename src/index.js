import './style/style.css'
import dom from './modules/domIndex'
import Umpire from './modules/umpire'

document.body.appendChild(dom.initPage())
const umpire = new Umpire('player')

// ****************** //
// Listener functions //
// ****************** //

function addHoverListeners(boardName) {
  const boardCells = document.querySelectorAll(`.${boardName} .row .cell`)
  boardCells.forEach((cell) => cell.addEventListener('mouseover', dom.boardHoverCallback))
  boardCells.forEach((cell) => cell.addEventListener('mouseout', dom.boardHoverCallback))
}

function removeHoverListeners(boardName) {
  const boardCells = document.querySelectorAll(`.${boardName} .row .cell`)
  boardCells.forEach((cell) => cell.removeEventListener('mouseover', dom.boardHoverCallback))
  boardCells.forEach((cell) => cell.removeEventListener('mouseout', dom.boardHoverCallback))
}

function gameSetupListeners() {
  const buttons = document.querySelectorAll('.choices-container button')

  const setupButtonCallback = (event) => {
    buttons.forEach((button) => button.remove())
    umpire.setOpponent(event.target.dataset.choice.toLowerCase())
    dom.createBoards()
    addHoverListeners('player-one-board')
  }

  buttons.forEach((button) => button.addEventListener('click', setupButtonCallback))
}

gameSetupListeners()
