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

function checkHitOutcome(cell) {
  const player = umpire.getCurrentPlayer()
  const opponent = umpire.getCurrentOpponent()
  const ship = opponent.findTargetShip(cell)
  const shipStatus = opponent.checkShipStatus(ship, player.getMoves())
  if (shipStatus) cell.childNode.style.visibility = 'visible'
}

function startNextPlacement() {
  const player = umpire.getCurrentPlayer()
  if (player.getNextShip()) addHoverListeners(player)
  else if (player === playerTwo) {
    // If player two has placed all ships, start game
    dom.hideShips(player.getBoardName())
    takeTurn()
  } else {
    // If player one has placed all ships, change to player two and hide ships
    // if second player is human
    if (umpire.getOpponentType() === 'player') dom.hideShips(player.getBoardName())
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

function boardPlacementCallback(e) {
  const player = umpire.getCurrentPlayer()
  const ship = player.getCurrentShip()
  const currentPositions = player.allShipPositions()

  dom.boardHover(e, player.getBoardName(), ship.size, axis, currentPositions)
}

function targetHoverCallback(e) {
  const currentTargetBoard = umpire.getCurrentOpponent().getBoardName()
  dom.boardHover(e, currentTargetBoard)
}

function targetPlacementCallback(e) {
  removeTargetListeners()
  const shipPositions = umpire.getCurrentOpponent().allShipPositions()
  const turnOutcome = umpire.checkHit(e.target, shipPositions)
  dom.placeTakenTurn(e.target, turnOutcome)
  if (turnOutcome) checkHitOutcome(e.target)
  if (umpire.checkVictoryConditions()) console.log('game is won')
  else {
    console.log(umpire.getCurrentOpponent())
    umpire.switchPlayers()
    console.log(umpire.getCurrentOpponent())
    takeTurn()
  }
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
    if (cell.style.backgroundColor) cell.style.backgroundColor = ''
    cell.removeEventListener('mouseover', boardPlacementCallback)
    cell.removeEventListener('mouseout', boardPlacementCallback)
    cell.removeEventListener('click', placeShipCallback)
  })
}

function addHoverListeners(player) {
  const boardCells = document.querySelectorAll(`.${player.getBoardName()} .row .cell`)
  boardCells.forEach((cell) => {
    cell.addEventListener('mouseover', boardPlacementCallback)
    cell.addEventListener('mouseout', boardPlacementCallback)
    cell.addEventListener('click', placeShipCallback)
  })
}

function gameSetupListeners() {
  const buttons = document.querySelectorAll('.choices-container button')

  const setupButtonCallback = (event) => {
    buttons.forEach((button) => button.remove())
    umpire.setOpponentType(event.target.dataset.choice.toLowerCase())
    dom.createBoards()
    changeAxisListener()
    addHoverListeners(umpire.getCurrentPlayer())
  }

  buttons.forEach((button) => button.addEventListener('click', setupButtonCallback))
}

// ******************* //
// Game play functions //
// ******************* //

function removeTargetListeners() {
  const currentTargetBoard = umpire.getCurrentOpponent().getBoardName()
  const boardCells = document.querySelectorAll(`.${currentTargetBoard} .row .cell`)
  boardCells.forEach((cell) => {
    cell.removeEventListener('mouseover', targetHoverCallback)
    cell.removeEventListener('mouseout', targetHoverCallback)
    cell.removeEventListener('click', targetPlacementCallback)
  })
}

function takeTurn() {
  const currentTargetBoard = umpire.getCurrentOpponent().getBoardName()
  const boardCells = document.querySelectorAll(`.${currentTargetBoard} .row .cell`)
  boardCells.forEach((cell) => {
    if (!cell.classList.contains('chosen')) {
      cell.addEventListener('mouseover', targetHoverCallback)
      cell.addEventListener('mouseout', targetHoverCallback)
      cell.addEventListener('click', targetPlacementCallback)
    }
  })
}

gameSetupListeners()
