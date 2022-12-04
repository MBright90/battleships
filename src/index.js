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
    buttons.forEach((button) => button.remove())
    umpire.setOpponent(event.target.dataset.choice.toLowerCase())
    dom.createBoards()
    dom.addBoardHover('player-one-board')
  }

  buttons.forEach((button) => button.addEventListener('click', setupButtonCallback))
}

gameSetupListeners()
