const dom = (() => {
  // Utility functions
  function createClassElement(newElement, ...classes) {
    const element = document.createElement(newElement)
    classes.forEach((className) => element.classlist.add(className))
    return element
  }

  HTMLElement.prototype.appendChildren = function appendChildren(...children) {
    children.forEach((child) => this.appendChild(child))
  }

  // Parses an array of attributes where each attribute is a key/value object
  HTMLElement.prototype.setAttributes = function setAttributes(...attributes) {
    attributes.forEach((attribute) => )
  }

  // Initial page creation
})()

export default { dom }
