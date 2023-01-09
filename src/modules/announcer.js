// A class to handle the running commentary of the game, particularly to make
// ai game play more immersive

export default class Announcer {
  constructor(container) {
    this.container = container
  }

  #removePrevAnnouncement() {
    if (this.container.firstChild) this.container.firstChild.remove()
  }

  #createEl(playerName, announcement) {
    const newAnnouncementEl = document.createElement('p')
    newAnnouncementEl.classList.add('announcement')
    newAnnouncementEl.textContent = `${playerName}${announcement}`
    return newAnnouncementEl
  }

  announcePlacingShips(playerName) {
    this.#removePrevAnnouncement()
    this.container.appendChild(this.#createEl(playerName, ' is placing ships...'))
  }

  announceThinking(playerName) {
    this.#removePrevAnnouncement()
    this.container.appendChild(this.#createEl(playerName, ' is thinking...'))
  }

  announceTurnOutcome(playerName, turnOutcome) {
    this.#removePrevAnnouncement()
    const outcome = turnOutcome ? 'hit!' : 'miss!'
    this.container.appendChild(this.#createEl(playerName, `'s torpedo results in a ${outcome}`))
  }

  announceWin(playerName, opponent) {
    this.#removePrevAnnouncement()
    this.container.appendChild(this.#createEl(playerName, ` has sunk all if ${opponent}'s battleships`))
  }
}
