import startOfToday from 'date-fns/startOfToday'

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
  const hide = elem => elem.style.display = 'none'
  const show = elem => elem.style.display = ''

  const createProjectForm = () => {
    const body = $('body')
    const formContainer = createWith('div', {class: "project-form"})
    const header = create("h2")
    const inputContainer = createWith('div', {class: 'form-wrapper'})
    const projNameLabel = createWith('label', {for: 'projectTitle', class: 'project-label'})
    const projNameForm = createWith('input', {type: 'text', class: 'project-title', id: 'projectTitle', name: 'Project: '})
    const btnContainer = createWith('div', {class: 'btn-container'})
    const submitButton = createWith('button', {class: 'btn btn-submit'})
    const cancelButton = createWith('button', {class: 'btn btn-cancel'})

    setText(header, "Create a new project")
    setText(projNameLabel, "Project Title")
    setText(submitButton, "Submit")
    setText(cancelButton, "Cancel")

    const layout = [
      [body, formContainer],
      [formContainer, header],
      [formContainer, inputContainer],
      [inputContainer, projNameLabel],
      [inputContainer, projNameForm],
      [formContainer, btnContainer],
      [btnContainer, submitButton],
      [btnContainer, cancelButton],
    ]
    
    layout.forEach(pair => append(pair[0], pair[1]))
    hide(formContainer)
  }

  const createTodoForm = () => {
    const body = $('body')
    const formContainer = createWith('div', {class: 'todo-form-container'})
    const header = create("h2")
    const todoContainer = createWith('div', {class: 'title-info'})
    const todoLabel = createWith('label', {for: 'todoForm', class: 'todo-label'})
    const todoInput = createWith('input', {type: 'text', id: 'todoForm', class: 'todo-form', placeholder: 'I need to make a sandwich...'})
    const descContainer = createWith('div', {class: 'desc-info'})
    const descLabel = createWith('label', {for: 'todoDesc', class: 'todo-label'})
    const descInput = createWith('input', {type: 'text', id: 'todoDesc', class: 'todo-form', placeholder: 'It will be a peanut butter & jelly sandwich.'})
    const priorityContainer = createWith('div', {class: 'priority-container'})
    const priorityLabel = createWith('label', {for: 'todoPriority', class: 'todo-label'})
    const prioritySelect = createWith('select', {name: 'priority', id: 'todoPriority'})
    const lowPri = createWith('option', {value: 'low', selected: "selected"})
    const medPri = createWith('option', {value: 'medium'})
    const highPri = createWith('option', {value: 'high'})
    const dueDateContainer = createWith('div', {class: 'duedate-container'})
    const dueDateLabel = createWith('label', {for: 'dueDate', class: 'todo-label'})
    const dueDate = createWith('input', {id: 'dueDate', class: 'todo-form', type: 'date', value: startOfToday(), min: startOfToday()})
    const btnContainer = createWith('div', {class: 'btn-container'})
    const submitButton = createWith('button', {class: 'btn btn-submit'})
    const cancelButton = createWith('button', {class: 'btn btn-cancel'})

    setText(header, "Create a new todo")
    setText(todoLabel, "Todo")
    setText(priorityLabel, "Priority")
    setText(prioritySelect, "Priority")
    setText(lowPri, "Low")
    setText(medPri, "Medium")
    setText(highPri, "High")
    setText(dueDateLabel, "Due Date")
    setText(submitButton, "Submit")
    setText(cancelButton, "Cancel")

    const layout = [
      [body, formContainer],
      [formContainer, header],
      [formContainer, todoContainer],
      [todoContainer, todoLabel],
      [todoContainer, todoInput],
      [formContainer, priorityContainer],
      [priorityContainer, priorityLabel],
      [priorityContainer, prioritySelect],
      [prioritySelect, lowPri],
      [prioritySelect, medPri],
      [prioritySelect, highPri],
      [formContainer, dueDateContainer],
      [dueDateContainer, dueDateLabel],
      [dueDateContainer, dueDate],
      [formContainer, btnContainer],
      [btnContainer, submitButton],
      [btnContainer, cancelButton],
    ]

    layout.forEach(pair => append(pair[0], pair[1]))
    hide(formContainer)
  }
  return {
    createProjectForm,
    createTodoForm,
    hide,
    show,
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