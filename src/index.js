import './style/style.css'
import dom from './modules/domIndex'

document.body.appendChild(dom.initPage())

// ****************** //
// Listener functions //
// ****************** //

function gameSetupListeners() {
  const buttons = document.querySelectorAll('.choices-container button')

  const setupButtonCallback = (event) => {
    console.log(`clicked ${event.target.dataset.choice}`)
    buttons.forEach((button) => button.remove())
    dom.createBoards()
  }

  buttons.forEach((button) => button.addEventListener('click', setupButtonCallback))
}

gameSetupListeners()
