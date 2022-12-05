import './style/style.css'
import dom from './modules/domIndex'
import Umpire from './modules/umpire'

document.body.appendChild(dom.initPage())
const umpire = new Umpire('player')

// ************* //
// Image library //
// ************* //

const shipImages = {
  carrier: {
    size: 5,
    image: './assets/images/carrier.jpg',
  },
  battleship: {
    size: 4,
    image: './assets/images/battleship.jpg',
  },
  submarine: {
    size: 3,
    image: './assets/images/submarine.jpg',
  },
  cruiser: {
    size: 3,
    image: './assets/images/cruiser.jpg',
  },
  destroyer: {
    size: 2,
    image: './assets/images/destroyer.jpg',
  },
}

// ****************** //
// Listener functions //
// ****************** //

function removeHoverListeners(e) {
  e.target.style.backgroundColor = ''
  const boardCells = document.querySelectorAll('.row .cell')
  boardCells.forEach((cell) => cell.removeEventListener('mouseover', dom.boardHoverCallback))
  boardCells.forEach((cell) => cell.removeEventListener('mouseout', dom.boardHoverCallback))
  boardCells.forEach((cell) => cell.removeEventListener('click', removeHoverListeners))
}

function addHoverListeners(boardName) {
  const boardCells = document.querySelectorAll(`.${boardName} .row .cell`)
  boardCells.forEach((cell) => cell.addEventListener('mouseover', dom.boardHoverCallback))
  boardCells.forEach((cell) => cell.addEventListener('mouseout', dom.boardHoverCallback))
  boardCells.forEach((cell) => cell.addEventListener('click', removeHoverListeners))
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
