/* eslint-disable no-use-before-define */
import './style/style.css'
import dom from './modules/domIndex'
import Umpire from './modules/Umpire'
import Player from './modules/Player'

document.body.appendChild(dom.initPage())
const playerOne = new Player('player-one-board')
const playerTwo = new Player('player-two-board')
const umpire = new Umpire(playerOne, playerTwo)
let axis = 'x'

// ********* //
// Callbacks //
// ********* //

// cell.addEventListener('click', (e) => {
//   if (umpire.isAvailable(e.target, player, ship, currentPositions, axis)) {
//     removeHoverListeners(player, boardName, ship, currentPositions)
//     dom.placeShip(e.target, ship, axis)
//   }
// })

function placeShipCallback(e) {
  const player = umpire.getCurrentPlayer()
  const ship = player.getCurrentShip()
  const currentPositions = player.allShipPositions()

  if (umpire.isAvailable(e.target, player, ship, currentPositions, axis)) {
    console.log('success')
    removeHoverListeners(player, player.getBoardName(), ship, currentPositions)
    dom.placeShip(e.target, ship, axis)
  }
}

function boardHoverCallback(e) {
  const player = umpire.getCurrentPlayer()
  const ship = player.getCurrentShip()
  const currentPositions = player.allShipPositions()

  dom.boardHover(e, player.getBoardName(), ship.size, axis, currentPositions)
}

// ***************************** //
// Game setup Listener functions //
// ***************************** //

function changeAxisListener() {
  const axisCallback = () => {
    if (axis === 'x') axis = 'y'
    else axis = 'x'
  }

  const axisButton = document.querySelector('.axis-button')
  axisButton.addEventListener('click', axisCallback)
}

function removeHoverListeners(player, boardName, ship, currentPositions) {
  const boardCells = document.querySelectorAll(`.${boardName} .row .cell`)
  console.log('in removal')
  boardCells.forEach((cell) => {
    if (cell.style.backgroundColor === 'rgba(180, 180, 180, 0.5)') cell.style.backgroundColor = ''
    cell.removeEventListener('mouseover', boardHoverCallback)
    cell.removeEventListener('mouseout', boardHoverCallback)
    cell.removeEventListener('click', (e) => {
      if (umpire.isAvailable(e.target, player, ship, currentPositions, axis)) {
        removeHoverListeners(boardName, ship, currentPositions)
        dom.placeShip(e.target, ship, axis)
      }
    })
  })
}

// function placeShip(e, player, currentShip) { // WORK ON THIS NEXT
//   dom.placeShip(e.target, currentShip, axis)
//   player.addShipPosition()
// }

function addHoverListeners(player) {
  // const boardName = player.getBoardName()
  // const ship = player.getNextShip()
  const boardCells = document.querySelectorAll(`.${player.getBoardName()} .row .cell`)
  // const currentPositions = player.allShipPositions()
  boardCells.forEach((cell) => {
    cell.addEventListener('mouseover', boardHoverCallback)
    cell.addEventListener('mouseout', boardHoverCallback)

    cell.addEventListener('click', placeShipCallback)
    //   if (umpire.isAvailable(e.target, player, ship, currentPositions, axis)) {
    //     removeHoverListeners(player, boardName, ship, currentPositions)
    //     dom.placeShip(e.target, ship, axis)
    //   }
    // })
  })
}

function gameSetupListeners() {
  const buttons = document.querySelectorAll('.choices-container button')

  const setupButtonCallback = (event) => {
    buttons.forEach((button) => button.remove())
    umpire.setOpponent(event.target.dataset.choice.toLowerCase())
    dom.createBoards()
    changeAxisListener()
    addHoverListeners(umpire.getCurrentPlayer())
  }

  buttons.forEach((button) => button.addEventListener('click', setupButtonCallback))
}

gameSetupListeners()
