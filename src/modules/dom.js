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
  const addAttr = (elem, attr, value) => elem.setAttribute(attr, value)

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

  const clearForm = form => {
    form.value = ""
  }

  const clearChildForms = elem => {
    elem.childNodes.forEach(child => {
      if (child.nodeName === 'DIV') {
        if (child.childNodes.length > 1) {
          clearChildForms(child)
        }
      }
      if (child.nodeName == 'INPUT') {
        clearForm(child)
      }
    })
  }

  const returnInfoFromProjectForm = () => {
    return {
      projectTitle: $('#projectTitle').value
    }
  }

  const returnInfoFromTodoForm = () => {
    return {
      todoTitle: $('#todoTitle').value,
      description: $('#todoDesc').value,
      dueDate: $('#dueDate').value,
      priority: $('#todoPriority').value,
    }
  }

  const showProjectForm = () => show($('.project-form'))
  const showTodoForm = () => show($('.todo-form-container'))

  const createProjectForm = () => {
    const body = $('body')
    const formContainer = createWith('div', {class: "project-form"})
    const header = create("h2")
    const inputContainer = createWith('div', {class: 'form-wrapper'})
    const projNameLabel = createWith('label', {for: 'projectTitle', class: 'project-label'})
    const projNameForm = createWith('input', {type: 'text', class: 'project-title', id: 'projectTitle', name: 'Project: '})
    const btnContainer = createWith('div', {class: 'btn-container'})
    const submitButton = createWith('button', {class: 'btn project-submit'})
    const cancelButton = createWith('button', {class: 'btn project-cancel'})

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
    const formContainer = createWith('div', {class: 'todo-form'})
    const header = create("h2")
    const todoContainer = createWith('div', {class: 'title-info'})
    const todoLabel = createWith('label', {for: 'todoTitle', class: 'todo-label'})
    const todoInput = createWith('input', {type: 'text', id: 'todoTitle', class: 'todo-input', placeholder: 'I need to make a sandwich...'})
    const descContainer = createWith('div', {class: 'desc-info'})
    const descLabel = createWith('label', {for: 'todoDesc', class: 'todo-label'})
    const descInput = createWith('input', {type: 'text', id: 'todoDesc', class: 'todo-input', placeholder: 'It will be a peanut butter & jelly sandwich.'})
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
    const submitButton = createWith('button', {class: 'btn todo-submit'})
    const cancelButton = createWith('button', {class: 'btn todo-cancel'})

    setText(header, "Create a new todo")
    setText(todoLabel, "Todo")
    setText(descLabel, "Desription")
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
      [formContainer, descContainer],
      [descContainer, descLabel],
      [descContainer, descInput],
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
  const clearFocusTitle = () => $('.focused-title').innerText = ""
  const clearTodos = () => {
    const todos = $('.todos')
    while (todos.firstChild) {
      todos.firstChild.remove()
    }
  }
  const clearFocus = () => {
    clearFocusTitle()
    clearTodos()
  }

  const printTodos = todos => {
    clearTodos()

    todos.forEach((todo, idx) => {
      const todoContainer = $('.todos')
      const newTodo = createWith('div', {class: 'todo'})
      
      append(todoContainer, newTodo)
      addAttr(newTodo, 'id', idx)

      for (let prop in todo) {
        let element = createWith('h4', {class: `${prop}`})
        setText(element, todo[prop])
        append(newTodo, element)
      }
    })
  }

  const printProjectToSidebar = project => {
    const projectContainer = $('.projects')
    const newProject = createWith('div', {class: 'project'})
    const title = createWith('h3', {class: 'project-title', id: `${project['projectTitle']}`})
    
    setText(title, project["projectTitle"])
    append(projectContainer, newProject)
    append(newProject, title)

    return newProject
  }

  const printProjectToFocus = project => {
    const focus = $('.focused-title')

    setText(focus, project['projectTitle'])

    printTodos(project["todos"])
  }

  return {
    clearFocus,
    printProjectToFocus,
    printProjectToSidebar,
    printTodos,
    showProjectForm,
    showTodoForm,
    clearChildForms,
    returnInfoFromTodoForm,
    returnInfoFromProjectForm,
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