import './style/style.css'
import dom from './modules/domIndex'

document.body.appendChild(dom.initPage())

// ****************** //
// Listener functions //
// ****************** //

function gameSetupListeners() {
  const buttons = document.querySelectorAll('.choices-container button')

  buttons.forEach((button) => {
    if (button.textContent === 'Player') {
      button.addEventListener('click', () => {
        console.log('clicked player')
        buttons.forEach((choiceButton) => choiceButton.remove())
      })
    } else {
      button.addEventListener('click', () => {
        console.log('clicked ai')
        buttons.forEach((choiceButton) => choiceButton.remove())
      })
    }
  })
}

gameSetupListeners()
