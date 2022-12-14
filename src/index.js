/* eslint-disable no-use-before-define */
import './style/style.css'
import dom from './modules/domIndex'
import Umpire from './modules/Umpire'
import Player from './modules/Player'
import Announcer from './modules/Announcer'

document.body.appendChild(dom.initPage())
const playerOne = new Player('player-one-board', 'Player One')
const playerTwo = new Player('player-two-board', 'Player Two')
const umpire = new Umpire(playerOne, playerTwo)

let axis = 'x'
let announcer
let currentTimeout

// ************ //
// ai functions //
// ************ //

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

async function aiPlaceShip(player) {
  const currentShip = player.getCurrentShip()
  const currentPositions = player.allShipPositions()

  let spaceAvailable = false
  while (!spaceAvailable) {
    const placementArr = player.simulateShipPlacement(player.getBoardName())
    const cell = placementArr[0]
    const simulatedAxis = placementArr[1]

    if (umpire.isAvailable(cell, player, currentShip, currentPositions, simulatedAxis)) {
      const cellPositions = dom.placeShip(player, cell, currentShip, simulatedAxis, 'ai')
      player.addShipPosition(cellPositions, currentShip.name)
      spaceAvailable = true
    }
  }
  await delay(500)
  startNextPlacement()
}

async function aiTakeTurn(currentTargetBoard, player) {
  let cell
  let spaceAvailable = false
  while (!spaceAvailable) {
    cell = player.simulateAiTurn(currentTargetBoard)
    if (!cell.classList.contains('chosen')) {
      spaceAvailable = true

      // Checks whether the turn has hit a ship space and sets hunting to true if that is the case
      const opponent = umpire.getCurrentOpponent()
      const shipPositions = opponent.allShipPositions()
      const turnOutcome = umpire.checkHit(cell, shipPositions)

      if (turnOutcome) player.setHuntStatus(cell)
    }
  }
  await delay(1000)
  placeTarget(cell)
}

// ********* //
// Callbacks //
// ********* //

function resetGame() {
  // If active timeout in place for ai, clear timeout
  clearTimeout(currentTimeout)

  // Reset boards to player choice
  dom.resetGameBoards(
    playerOne.getPlayerName(),
    playerTwo.getPlayerName(),
  )
  gameSetupListeners()

  // Reset players/umpire
  playerOne.resetPlayer()
  playerTwo.resetPlayer()
}

function beginGame(player) {
  dom.hideShips(player.getBoardName())
  // set one second wait if ai is playing
  umpire.switchPlayers()
  // Convert axis button into reset button
  const resetButton = dom.initResetButton()
  resetButton.addEventListener('click', () => {
    resetGame()
  })
  delay(1000).then(beginNextTurn())
}

function placePlayerTwoShips(player) {
  if (player.getPlayerType() === 'human') dom.hideShips(player.getBoardName())
  umpire.switchPlayers()
  announcer.announcePlacingShips(umpire.getCurrentPlayer().getPlayerName())
  delay(1000)
  startNextPlacement()
}

function checkHitOutcome(cell) {
  const player = umpire.getCurrentPlayer()
  const opponent = umpire.getCurrentOpponent()
  const ship = opponent.findTargetShip(cell)
  // Check if ship is complete, if true, shipStatus becomes the head cell of the ship
  const shipStatus = opponent.checkShipStatus(ship, player.getMoves())
  if (shipStatus) dom.revealShip(shipStatus)
  if (shipStatus && player.getPlayerType() === 'ai') {
    const shipPositions = opponent.getShipsPosition(ship)
    player.endHunt(shipPositions)
  }
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

async function placeTarget(cell) {
  // Check where the ships are and whether the chosen cell has hit a ship
  const player = umpire.getCurrentPlayer()
  const opponent = umpire.getCurrentOpponent()
  const shipPositions = opponent.allShipPositions()
  const turnOutcome = umpire.checkHit(cell, shipPositions)
  // Change the color of the chosen cell based on the turn outcome and add the move to the players
  // move list
  dom.placeTakenTurn(cell, turnOutcome)
  player.addMove(cell)
  if (turnOutcome) checkHitOutcome(cell)
  announcer.announceTurnOutcome(player.getPlayerName(), turnOutcome)
  await delay(1000)
  if (umpire.checkVictoryConditions()) {
    announcer.announceWin(
      player.getPlayerName(),
      opponent.getPlayerName(),
    )
  } else {
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

    // Set player names to field values
    const playerOneField = document.querySelector('#player-one-field')
    playerOne.setPlayerName(playerOneField.value)
    const playerTwoField = document.querySelector('#player-two-field')
    playerTwo.setPlayerName(playerTwoField.value)

    // Convert dom to game play ui
    dom.clearMain()
    const announcementContainer = dom.createAnnouncementContainer()
    announcer = new Announcer(announcementContainer)
    dom.createBoards()
    changeAxisListener()
    announcer.announcePlacingShips(umpire.getCurrentPlayer().getPlayerName())
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
  announcer.announceThinking(player.getPlayerName())
  if (player.getPlayerType() === 'human') takeTurn(currentTargetBoard)
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
