import "./stylesheets/css/main.css"
import { pubsub, project, todo, DOM } from './modules'

const app = (() => {
  const eventHandler = pubsub()
  const dom = DOM()
  let focusedProject
  let projects = [], 
      todos    = [];

  // Set up pub/sub subscriptions
  let data = [
    ["startApp", dom.createTodoForm],
    ["startApp", dom.createProjectForm],
    ["startApp", _setProjectButtonListeners],
    ["startApp", _createDefaultList],
    ["startApp", _setTodoListeners],
    ["newProject", dom.showProjectForm],
    ["newProject", dom.toggleSidebarAndNav],
  ]

  data.forEach(sub => {
    eventHandler.subscribe(sub[0], sub[1])
  })

  function setFocus(project) {
    focusedProject = project
  }
  function getFocus() { return focusedProject }

  function _setProjectButtonListeners() {
    _projectSubmit()
    _projectCancel()
  }
  function _projectSubmit() {
    const btn = dom.$('.project-submit')
    btn.addEventListener('click', () => {
      let proj = _buildProject()
      setFocus(proj)
      dom.changeViewOnSubmit(proj["project"])
      attachClickListenerToProject(proj["project"], proj["elem"])
    })
  }
  function _projectCancel() {
    dom.$('.project-cancel').addEventListener('click', () => {
      dom.clearProjectForm()
      dom.hideProjectForm()
    })
  }
  function _buildProject() {
    let data = dom.returnInfoFromProjectForm()
    let proj = project(data)
    let elem = dom.printProjectToSidebar(proj)
    return projects[projects.push({project: proj, elem: elem}) - 1]
  }
  function attachClickListenerToProject(project, elem) {
    elem.addEventListener('click', () => {
      setFocus(project)
      dom.toggleSidebarAndNav()
      let todoElems = dom.printProjectToFocus(project)
      if (!todoElems) return
      attachClickListenerToProjectTodos(todoElems)
    })
  }
  function attachClickListenerToProjectTodos(todoElems) {
    todoElems.forEach(todo => {
      todo.addEventListener('click', () => {
        dom.toggleAttr(todo.lastChild, 'data-todo-active')
      })
    })
  }
  function _setTodoListeners() {
    _addListenerToMakeTodoButton()
    _todoSubmit()
    _todoCancel()
  }
  function _todoSubmit() {
    dom.$('.todo-submit').addEventListener('click', () => {
      let data = dom.returnInfoFromTodoForm()
      let newTodo = todo(data)
      getFocus().addTodo(newTodo)
      let elems = dom.printProjectToFocus(getFocus())
      attachClickListenerToProjectTodos([elems[elems.length - 1]])
    })
  }
  function _todoCancel() {
    dom.$('.todo-cancel').addEventListener('click', () => {
      dom.hideTodoForm()
      dom.clearTodoForm()
    })
  }
  function _addListenerToMakeTodoButton() {
    dom.$('.new-todo').addEventListener('click', dom.showTodoForm)
  }
  // Adds a 'starter' list with some todos
  function _createDefaultList() {
    const defaultTodo = todo({
      todoTitle: "Make another todo",
      description: "add a description to each todo.",
      dueDate: "12/25/2020",
      priority: "high",
    })
    const defaultTodo2 = todo({
      todoTitle: "Delete the first todo",
      description: "which would then make this the first todo...",
      dueDate: "3/14/2021",
      priority: "medium",
    })
    const defaultProject = project({
      projectTitle: "Make a todo list",
      todos: [defaultTodo, defaultTodo2],
    })
    const projObj = {
      project: defaultProject,
      elem: dom.printProjectToSidebar(defaultProject)
    }  
    setFocus(defaultProject)
    dom.printProjectToFocus(projObj["project"])
    attachClickListenerToProject(projObj.project, projObj.elem)
  }

  dom.$('.nav').addEventListener('click', dom.toggleSidebarAndNav)
  dom.id('createProject').addEventListener('click', eventHandler.publish.bind(this, "newProject"))
  eventHandler.publish("startApp")
  
  document.querySelectorAll('.todo').forEach(todo => {
    let info = todo.lastChild
    todo.addEventListener('click', () => {
      dom.toggleAttr(info, 'data-todo-active')
    })
  })
})()