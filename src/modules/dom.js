import startOfToday from 'date-fns/startOfToday'

export const DOM = () => {
  const $ = (elem) => document.querySelector(elem)
  const id = elem => document.getElementById(elem)
  const allInClass = elem => document.querySelectorAll(elem)
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

  const clearTodoForm = () => {
    allInClass('.todo-input').forEach(element => clearForm(element))
    id("dueDate").value = ""
    id("todoPriority").value = $("[selected='selected']").value
  }
  const clearProjectForm = () => clearForm($('#projectTitle'))
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
  const showTodoForm = () => show($('.todo-form'))

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
      [btnContainer, cancelButton],
      [btnContainer, submitButton],
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
    const dueDate = createWith('input', {id: 'dueDate', class: 'todo-date', type: 'date', value: startOfToday(), min: startOfToday()})
    const btnContainer = createWith('div', {class: 'btn-container'})
    const submitButton = createWith('button', {class: 'btn todo-submit'})
    const cancelButton = createWith('button', {class: 'btn todo-cancel'})

    setText(header, "Create a new todo")
    setText(todoLabel, "Todo")
    setText(descLabel, "Description")
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
      [btnContainer, cancelButton],
      [btnContainer, submitButton],
    ]

    layout.forEach(pair => append(pair[0], pair[1]))
    hide(formContainer)
  }

  function populateTodoForm(info) {
    id('todoTitle').value = info['todoTitle']
    id('todoDesc').value = info['description']
    id('todoPriority').value = info['priority']
    id('dueDate').value = new Date(Date.parse(info['dueDate'])).toISOString().substr(0, 10)
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

  function appendTodoControls() {
    let todos = allInClass('.todo')

    todos.forEach(todo => {
      const controls = createWith('div', {class: 'controls'})
      const complete = createWith('div', {class: 'todo-complete'})
      const remove = createWith('div', {class: 'todo-remove'})
      
      setText(complete, "✓")
      setText(remove, "X")

      append(controls, complete)
      append(controls, remove)
      append(todo, controls)
    })
  }

  function hideTodoInfo(idx, todoElement) {
    const infoContainer = createWith('div', {class: 'todo-info', id: `todo-${idx}`, 'data-todo-active': false})
    const desc = $(`.description-${idx}`)
    const dueDate = $(`.dueDate-${idx}`)
    const priority = $(`.priority-${idx}`)

    const elems = [desc, dueDate, priority]
    elems.forEach(elem => append(infoContainer, elem))

    append(todoElement, infoContainer)
  }

  const printTodos = todos => {
    clearTodos()

    if (todos.length == 0) return

    let elems = createTodoElements(todos)
    appendTodoControls()
    elems.forEach((elem, idx) => hideTodoInfo(idx, elem))

    return elems
  }

  function createTodoElements(todos) {
    const todoElements = []
    const todoContainer = $('.todos')

    todos.forEach((todo, idx) => {
      const newTodo = createWith('div', {class: `todo todo-${idx}`})
      
      append(todoContainer, newTodo)

      for (let prop in todo) {
        let element = createWith('h4', {class: `${prop}`})
        let header = createWith('h4', {class: `prop-header ${prop} ${prop}-${idx}`})
        setText(element, todo[prop])
        setText(header, populateTodoInfoHeaders(prop))
        append(newTodo, header)
        append(header, element)
      }

      todoElements.push(newTodo)
    })

    return todoElements
  }

  function populateTodoInfoHeaders(prop) {
    const titles = {
      todoTitle: "",
      description: "Description", 
      dueDate: "Due", 
      priority: "Priority",
    }
    return titles[prop]
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

    return printTodos(project["todos"])
  }

  function toggleNav() {
    let nav = $('.nav')
    nav.classList.length === 2 ? removeClass(nav, 'nav-selected') 
                               : addClass(nav, 'nav-selected')
  }
  function toggleSidebar() {
    let sidebar = $('.sidebar')
    toggleAttr(sidebar, "data-sidebar-active")
  }
  function toggleSidebarAndNav() {
    toggleNav()
    toggleSidebar()
  }

  function changeViewOnSubmit(proj) {
    clearFocus()
    clearProjectForm()
    hide($('.project-form'))
    printProjectToFocus(proj)
  }
  function hideProjectForm() {
    hide($('.project-form'))
  }
  function hideTodoForm() {
    hide($('.todo-form'))
  }
  function completeAllTodos() {
    allInClass(".todo").forEach(todo => addClass(todo, "completed"))
  }
  function getTodoInnerText(todo) {
    return {
      todoTitle: todo.firstChild.firstChild.innerText,
      description: todo.lastChild.children[0].lastChild.innerText,
      dueDate: todo.lastChild.children[1].lastChild.innerText,
      priority: todo.lastChild.children[2].lastChild.innerText,
    }
  }
  return {
    populateTodoForm,
    getTodoInnerText,
    toggleAttr,
    completeAllTodos,
    clearTodoForm,
    hideProjectForm,
    hideTodoForm,
    changeViewOnSubmit,
    toggleSidebarAndNav,
    clearProjectForm,
    id,
    clearFocus,
    printProjectToFocus,
    printProjectToSidebar,
    printTodos,
    createProjectForm,
    showProjectForm,
    createTodoForm,
    showTodoForm,
    returnInfoFromTodoForm,
    returnInfoFromProjectForm,
    $,
  }
}