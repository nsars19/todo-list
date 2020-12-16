export const DOM = () => {
  const $ = (elem) => document.querySelector(elem)

  const create = elem => document.createElement(elem)

  const addAttributes = (elem, attrs) => {
    for (let attr in attrs) {
      elem.setAttribute(attr, attrs[attr])
    }
    return elem
  }
  const addAttr = (elem, attr) => elem.addAttribute(attr)

  const toggleAttr = (elem, attr) => {
    elem.getAttribute(attr) == "true" ? elem.setAttribute(attr, false) : elem.setAttribute(attr, true)
  }

  const createWith = (elem, attrs) => {
    let element = create(elem)
    return addAttributes(element, attrs)
  }

  const addClass = (elem, klass) => elem.classList.add(klass)
  const removeClass = (elem, klass) => elem.classList.remove(klass)
  
  const append = (parent, child) => parent.appendChild(child)
  const removeChildren = node => {
    while (node.firstChild) {
      node.firstChild.remove()
    }
  }
  const setText = (elem, text) => elem.innerText = text

  return {
    $,
    create,
    addAttributes,
    addAttr,
    toggleAttr,
    createWith,
    addClass,
    removeClass,
    append,
    removeChildren,
    setText,
  }
}