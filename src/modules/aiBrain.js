/* eslint-disable prefer-destructuring */

class Brain {
  constructor() {
    this.currentlyHunting = false
    this.currentHuntHits = []
    this.currentHuntPlacements = []
    this.currentHuntAxis = null
  }

  // Brain utilities

  #generateRandom(maxNum) {
  // + 1 ensures number can include max and disregard 0
    return Math.floor(Math.random() * maxNum) + 1
  }

  #findCell(boardName, x, y) {
    return document.querySelector(`.${boardName} .row .cell[data-x-pos="${x}"][data-y-pos="${y}"]`)
  }

  #unpackSearchArrays(...arrays) {
    const returnArr = []
    arrays.forEach((arr) => {
      arr.forEach((item) => returnArr.push(item))
    })
    return returnArr
  }

  // Ship hunting functions used when part of a ship is located //

  getHuntingStatus() {
    return this.currentlyHunting
  }

  setHuntingTrue() {
    this.currentlyHunting = true
  }

  addHuntHit(cell) {
    this.currentHuntHits[this.currentHuntHits.length] = cell
    console.log(this.currentHuntHits)
  }

  addHuntPosition(cell) {
    this.currentHuntPlacements[this.currentHuntPlacements.length] = cell
  }

  endCurrentHunt() {
    this.currentlyHunting = false
    this.currentHuntHits = []
    this.currentHuntPositions = []
  }

  #checkHuntAxis() {
    if (!this.currentHuntAxis) {
      console.log(this.currentHuntHits)
      if (this.currentHuntHits.length >= 2) {
        if (this.currentHuntHits[0].dataset.yPos === this.currentHuntHits[1].dataset.yPos) this.currentHuntAxis = 'x'
        else if (this.currentHuntHits[0].dataset.xPos === this.currentHuntHits[1].dataset.xPos) this.currentHuntAxis = 'y'
      }
    }
    console.log(this.currentHuntAxis)
    return this.currentHuntAxis
  }

  #filterTakenSpaces(arr) {
    return arr.filter((item) => item !== null)
  }

  #searchCell(cell, board) {
    const manipulationArr = [1, -1]
    const xCoord = parseInt(cell.dataset.xPos, 10)
    const yCoord = parseInt(cell.dataset.yPos, 10)
    const huntAxis = this.#checkHuntAxis()

    // Filter through the manipulation Arr to find cells for each manipulation in x axis
    let xCells = []
    if (huntAxis !== 'y') {
      xCells = manipulationArr.map((manipulation) => {
        const newCoord = xCoord + manipulation
        const newCell = this.#findCell(board, newCoord, yCoord)
        if (!this.currentHuntPlacements.includes(newCell)) return newCell
        return null
      })
    }

    // Repeat above for y axis movements
    let yCells = []
    if (huntAxis !== 'x') {
      yCells = manipulationArr.map((manipulation) => {
        const newCoord = yCoord + manipulation
        const newCell = this.#findCell(board, xCoord, newCoord)
        if (!this.currentHuntPlacements.includes(newCell)) return newCell
        return null
      })
    }

    // Amalgamate the xCells and yCells
    const availableSpaces = this.#unpackSearchArrays(xCells, yCells)
    return availableSpaces
  }

  huntShipSpace(board) {
    const emptyTargetSpaces = []
    this.currentHuntHits.forEach((hit) => {
      const availableSpaces = this.#searchCell(hit, board)
      const filteredSpaces = this.#filterTakenSpaces(availableSpaces)
      // If there are any spaces available, add to the targets list
      if (filteredSpaces.length > 0) {
        filteredSpaces.forEach((space) => {
          emptyTargetSpaces.push(space)
        })
      }
    })
    // Return a random choice from within the available choices
    return emptyTargetSpaces[this.#generateRandom(emptyTargetSpaces.length - 1)]
  }

  // General position choosing functions //

  chooseSpace(board) {
    const randomX = this.#generateRandom(10)
    const randomY = this.#generateRandom(10)
    return this.#findCell(board, randomX, randomY)
  }

  chooseShipPosition(board) {
    const axisArray = ['x', 'y']
    const cell = this.chooseSpace(board)
    const randomAxis = axisArray[this.#generateRandom(2) - 1]
    return [cell, randomAxis]
  }
}

module.exports = Brain
