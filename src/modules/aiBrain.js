/* eslint-disable prefer-destructuring */

class Brain {
  constructor() {
    this.currentlyHunting = false
    this.currentHuntHits = []
    this.currentHuntAxis = null
  }

  // Brain utilities

  #generateRandom(maxNum) {
    if (maxNum === 0) return 0
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
  }

  getHuntHits() {
    return this.currentHuntHits
  }

  removeHuntHit(hit) {
    const hitIndex = this.currentHuntHits.indexOf(hit)
    this.currentHuntHits.splice(hitIndex, 1)
  }

  endHuntCheck(sunkShip) {
    this.currentHuntAxis = null
    // Remove all huntHits associated with a sunk ship
    sunkShip.forEach((position) => {
      if (this.currentHuntHits.includes(position)) {
        this.removeHuntHit(position)
      }
    })

    // If huntHits are now empty, end the hunt
    if (this.currentHuntHits.length <= 0) this.currentlyHunting = false
  }

  #checkAxisMatch(arrayIndex, hit) {
    // Return if the element at arrayIndex and hit are the same
    if (this.currentHuntHits[arrayIndex] === hit) return false

    // Convert dataset positions to integer to allow easy comparison
    const currentX = parseInt(this.currentHuntHits[arrayIndex].dataset.xPos, 10)
    const currentY = parseInt(this.currentHuntHits[arrayIndex].dataset.yPos, 10)
    const hitX = parseInt(hit.dataset.xPos, 10)
    const hitY = parseInt(hit.dataset.yPos, 10)

    // Check whether the base case and the current case match in x or y axis value and are beside
    // each other. If they do return true
    if ((currentX === hitX && (currentY === hitY + 1 || currentY === hitY - 1))
    || (currentY === hitY && (currentX === hitX + 1 || currentX === hitX - 1))) return true
    return false
  }

  #recursiveAxisCheck(arrayIndex) {
    const result = this.currentHuntHits.find((hit) => this.#checkAxisMatch(arrayIndex, hit))
    const resultIndex = this.currentHuntHits.indexOf(result)
    // If two hunt hits have been found beside each other, set the axis to match
    if (resultIndex) {
      if (this.currentHuntHits[arrayIndex].dataset.yPos === this.currentHuntHits[resultIndex].dataset.yPos) return 'x'
      if (this.currentHuntHits[arrayIndex].dataset.xPos === this.currentHuntHits[resultIndex].dataset.xPos) return 'y'
    }

    // Recursive case - No matches have been found and so an axis is not yet set.
    if (this.currentHuntHits.length >= arrayIndex + 2) this.#recursiveAxisCheck(arrayIndex + 1)
    return null
  }

  #checkHuntAxis() {
    if (!this.currentHuntAxis) {
      if (this.currentHuntHits.length >= 2) {
        // Compare all huntHits to find one which includes at least two beside each other that have
        // at least one further space in line
        this.currentHuntAxis = this.#recursiveAxisCheck(0)
      }
    }
    return this.currentHuntAxis
  }

  #swapAxis() {
    // Is called when a ship comes across two or more ships besides each other and
    // cannot find a full ship
    if (this.currentHuntAxis === 'x') this.currentHuntAxis = 'y'
    else this.currentHuntAxis = 'x'
  }

  #filterTakenSpaces(arr) {
    return arr.filter((item) => item !== null)
  }

  #searchCell(cell, board, unavailableSpaces) {
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
        if (!unavailableSpaces.includes(newCell)) return newCell
        return null
      })
    }

    // Repeat above for y axis movements
    let yCells = []
    if (huntAxis !== 'x') {
      yCells = manipulationArr.map((manipulation) => {
        const newCoord = yCoord + manipulation
        const newCell = this.#findCell(board, xCoord, newCoord)
        if (!unavailableSpaces.includes(newCell)) return newCell
        return null
      })
    }

    // Amalgamate the xCells and yCells
    const availableSpaces = this.#unpackSearchArrays(xCells, yCells)
    return availableSpaces
  }

  huntShipSpace(board, unavailableSpaces) {
    const emptyTargetSpaces = []
    while (emptyTargetSpaces.length <= 0) {
      this.currentHuntHits.forEach((hit) => {
        const availableSpaces = this.#searchCell(hit, board, unavailableSpaces)
        const filteredSpaces = this.#filterTakenSpaces(availableSpaces)
        // If there are any spaces available, add to the targets list
        if (filteredSpaces.length > 0) {
          filteredSpaces.forEach((space) => {
            emptyTargetSpaces.push(space)
          })
          // if there are not spaces available swap axis and try again
        } else {
          this.#swapAxis()
        }
      })
    }
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
