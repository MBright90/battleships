import './style/style.css'
import dom from './modules/domIndex'
import Umpire from './modules/umpire'

document.body.appendChild(dom.initPage())
const umpire = new Umpire('player')

// ****************** //
// Listener functions //
// ****************** //

function gameSetupListeners() {
  const buttons = document.querySelectorAll('.choices-container button')

  const setupButtonCallback = (event) => {
    console.log(`clicked ${event.target.dataset.choice}`)
    buttons.forEach((button) => button.remove())
    umpire.setOpponent(event.target.dataset.choice)
    dom.createBoards()
  }

  buttons.forEach((button) => button.addEventListener('click', setupButtonCallback))
}

function addBoardHover(boardName) {
  const boardCells = document.querySelectorAll(`${boardName}`)
}

gameSetupListeners()
