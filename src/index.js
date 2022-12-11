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

// ****************** //
// Game play functions //
// ****************** //

function startGame() {
  console.log('GAME HAS STARTED')
}

// ********* //
// Callbacks //
// ********* //

function startNextPlacement() {
  const player = umpire.getCurrentPlayer()
  if (player.getNextShip()) addHoverListeners(player)
  // If player two has placed all ships, start game
  else if (player === playerTwo) startGame()
  // If player one has placed all ships, change to player two
  else {
    umpire.switchCurrentPlayer(playerTwo)
    startNextPlacement()
  }
}

function placeShipCallback(e) {
  const player = umpire.getCurrentPlayer()
  const ship = player.getCurrentShip()
  const currentPositions = player.allShipPositions()

  if (umpire.isAvailable(e.target, player, ship, currentPositions, axis)) {
    removeHoverListeners(player, player.getBoardName(), ship, currentPositions)
    const cellPositions = dom.placeShip(player, e.target, ship, axis)
    player.addShipPosition(cellPositions, ship.name)
    startNextPlacement()
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

function removeHoverListeners(player) {
  const boardCells = document.querySelectorAll(`.${player.getBoardName()} .row .cell`)
  boardCells.forEach((cell) => {
    if (cell.style.backgroundColor === 'rgba(180, 180, 180, 0.5)') cell.style.backgroundColor = ''
    cell.removeEventListener('mouseover', boardHoverCallback)
    cell.removeEventListener('mouseout', boardHoverCallback)
    cell.removeEventListener('click', placeShipCallback)
  })
}

function addHoverListeners(player) {
  const boardCells = document.querySelectorAll(`.${player.getBoardName()} .row .cell`)
  boardCells.forEach((cell) => {
    cell.addEventListener('mouseover', boardHoverCallback)
    cell.addEventListener('mouseout', boardHoverCallback)
    cell.addEventListener('click', placeShipCallback)
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
