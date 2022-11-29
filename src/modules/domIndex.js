const dom = (() => {
  // ***************** //
  // Utility functions //
  // ***************** //
  function createClassElement(newElement, ...classes) {
    const element = document.createElement(newElement)
    classes.forEach((className) => element.classlist.add(className))
    return element
  }

  function createTextElement(newElement, text) {
    const element = document.createElement(newElement)
    element.textContent = text
    return element
  }

  // HTMLElement.appendChildren
  HTMLElement.prototype.appendChildren = function appendChildren(...children) {
    children.forEach((child) => this.appendChild(child))
  }

  // HTMLElement.setAttributes
  // Parses an array of attributes where each attribute is a key/value object
  HTMLElement.prototype.setAttributes = function setAttributes(...attributes) {
    Object.keys(attributes).forEach((key) => this.setAttribute(key, attributes[key]))
  }

  // ********************* //
  // Initial page creation //
  // ********************* //

  const layoutWrapper = createClassElement('div', 'layout-wrapper')

  // Create header
  const header = document.createElement('header')
  const headerTitle = createTextElement('h1', 'Battleships')
  header.appendChild(headerTitle)

  // Create main
  const main = document.createElement('main')
  main.appendChildren(
    createClassElement('div', 'player-board'),
    createClassElement('div', 'opponent-board'),
  )

  // Create footer
  const footer = document.createElement('footer')
  footer.appendChild(
    createTextElement('p', 'MBright90'),
  )

  // Append all layout wrapper
  layoutWrapper.appendChildren(
    header,
    main,
    footer,
  )
})()

export default { dom }
