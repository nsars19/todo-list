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
      dom.printProjectToFocus(project)
      dom.toggleSidebarAndNav()
    })
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

    dom.printProjectToFocus(projObj["project"])
    attachClickListenerToProject(projObj.project, projObj.elem)
  }

  dom.$('.nav').addEventListener('click', dom.toggleSidebarAndNav)
  dom.id('createProject').addEventListener('click', eventHandler.publish.bind(this, "newProject"))
  eventHandler.publish("startApp")
})()
