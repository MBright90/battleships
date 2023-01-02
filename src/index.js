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

// ************ //
// ai functions //
// ************ //

function aiPlaceShip(player) {
  const currentShip = player.getCurrentShip()
  const currentPositions = player.allShipPositions()

  let spaceAvailable = false
  while (!spaceAvailable) {
    const placementArr = player.simulateShipPlacement(player.getBoardName()) // [cell, axis]
    const cell = placementArr[0]
    const simulatedAxis = placementArr[1]

    if (umpire.isAvailable(cell, player, currentShip, currentPositions, simulatedAxis)) {
      const cellPositions = dom.placeShip(player, cell, currentShip, simulatedAxis, 'ai')
      player.addShipPosition(cellPositions, currentShip.name)
      spaceAvailable = true
    }
  }
  startNextPlacement()
}

function aiTakeTurn(currentTargetBoard, player) {
  let spaceAvailable = false
  while (!spaceAvailable) {
    const cell = player.simulateAiTurn(currentTargetBoard)
    if (!cell.classList.contains('chosen')) {
      spaceAvailable = true

      // Checks whether the turn has hit a ship space and sets hunting to true if that is the case
      const opponent = umpire.getCurrentOpponent()
      const shipPositions = opponent.allShipPositions()
      const turnOutcome = umpire.checkHit(cell, shipPositions)

      if (turnOutcome) player.setHuntStatus(cell)
      if (player.checkHunting()) player.addHuntPlacement(cell)
      placeTarget(cell)
    }
  }
}

// ********* //
// Callbacks //
// ********* //

function beginGame(player) {
  dom.hideShips(player.getBoardName())
  umpire.switchPlayers()
  beginNextTurn()
}

function placePlayerTwoShips(player) {
  if (player.getPlayerType() === 'human') dom.hideShips(player.getBoardName())
  umpire.switchPlayers()
  startNextPlacement()
}

function checkHitOutcome(cell) {
  const player = umpire.getCurrentPlayer()
  const opponent = umpire.getCurrentOpponent()
  const ship = opponent.findTargetShip(cell)
  // Check if ship is complete, if true, shipStatus becomes the head cell of the ship
  const shipStatus = opponent.checkShipStatus(ship, player.getMoves())
  if (shipStatus) dom.revealShip(shipStatus)
  if (shipStatus && player.getPlayerType() === 'ai') player.endHunt()
}

function startNextPlacement() {
  const player = umpire.getCurrentPlayer()
  // If there are still current player ships to place, begin process
  if (player.getNextShip() && player.getPlayerType() === 'human') addHoverListeners(player)
  else if (player.getNextShip()) aiPlaceShip(player)
  else if (player === playerTwo) {
    // If player two has placed all ships, start game
    beginGame(player)
  } else {
    // If player one has placed all ships, change to player two, reset axis and hide ships
    // if second player is human
    axis = 'x'
    placePlayerTwoShips(player)
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
  const cell = e.target
  placeTarget(cell)
}

function placeTarget(cell) {
  // Check where the ships are and whether the chosen cell has hit a ship
  const shipPositions = umpire.getCurrentOpponent().allShipPositions()
  const turnOutcome = umpire.checkHit(cell, shipPositions)
  // Change the color of the chosen cell based on the turn outcome and add the move to the players
  // move list
  dom.placeTakenTurn(cell, turnOutcome)
  umpire.getCurrentPlayer().addMove(cell)
  if (turnOutcome) checkHitOutcome(cell)
  if (umpire.checkVictoryConditions()) console.log('game is won')
  else {
    umpire.switchPlayers()
    beginNextTurn()
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
    cell.classList.remove('hovered', 'unavailable')
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
    playerTwo.setPlayerType(event.target.dataset.choice.toLowerCase())
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

function beginNextTurn() {
  const currentTargetBoard = umpire.getCurrentOpponent().getBoardName()
  const player = umpire.getCurrentPlayer()
  if (umpire.getCurrentPlayer().getPlayerType() === 'human') takeTurn(currentTargetBoard)
  else aiTakeTurn(currentTargetBoard, player)
}

function takeTurn(currentTargetBoard) {
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
