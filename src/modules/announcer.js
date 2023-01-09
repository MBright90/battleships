// A class to handle the running commentary of the game, particularly to make
// ai game play more immersive

export default class Announcer {
  constructor(container) {
    this.container = container
  }

  #removePrevAnnouncement() {
    if (this.container.childNode) this.container.childNode.remove()
  }

  #createEl(playerName, announcement) {
    const newAnnouncementEl = document.createElement('p')
    newAnnouncementEl.classList.add('announcement')
    newAnnouncementEl.textContent = `${playerName}${announcement}`
  }

  announcePlacingShips(playerName) {
    this.#removePrevAnnouncement()
    return this.#createEl(playerName, ' is placing ships...')
  }

  announceThinking(playerName) {
    this.#removePrevAnnouncement()
    return this.#createEl(playerName, ' is thinking...')
  }

  announceTurnOutcome(playerName, turnOutcome) {
    this.#removePrevAnnouncement()
    const outcome = turnOutcome ? 'hit!' : 'miss!'
    return this.#createEl(playerName, `'s torpedo results in a ${outcome}`)
  }

  announceWin(playerName, opponent) {
    this.#removePrevAnnouncement()
    return this.#createEl(playerName, ` has sunk all if ${opponent}'s battleships`)
  }
}
