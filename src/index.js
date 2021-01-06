import "./stylesheets/css/main.css"
import { pubsub, project, todo, DOM, storage } from './modules'

const app = (() => {
  const eventHandler = pubsub()
  const dom = DOM()
  const store = storage()
  let focusedProject
  let projects = [], 
      todos    = [];

  // Set up pub/sub subscriptions
  let data = [
    ["startApp", dom.createTodoForm],
    ["startApp", dom.createProjectForm],
    ["startApp", _setProjectButtonListeners],
    ["startApp", _createDefaultList],
    ["startApp", _setControlListeners],
    ["startApp", _setTodoListeners],
    ["startApp", _loadSavedProjectsFromStorage],
    ["startApp", _saveOnPageClose],
    ["newProject", dom.showProjectForm],
    ["newProject", dom.toggleSidebarAndNav],
  ]

  data.forEach(sub => {
    eventHandler.subscribe(sub[0], sub[1])
  })

  function _setTodoListeners() {
    _todoSubmit()
    _todoCancel()
  }
  function _setControlListeners() {
    _addListenerToMakeTodoButton()
    _addListenerToCompleteAllTodos()
    _addListenerToDeleteAllTodos()
  }
  function _setProjectButtonListeners() {
    _projectSubmit()
    _projectCancel()
  }
  function _attachTodoControlListeners(todo) {
    _markTodoComplete(todo)
    _removeTodo(todo)
    _editTodo(todo)
  }
  function setFocus(project) {
    focusedProject = project
  }
  function getFocus() { return focusedProject }

  function _projectSubmit() {
    const btn = dom.$('.project-submit')
    btn.addEventListener('click', () => {
      let proj = _buildProject()
      setFocus(proj["project"])
      dom.changeViewOnSubmit(proj["project"])
      attachClickListenerToProject(proj["project"], proj["elem"])
      attachClickListenerToDelete(proj["project"], proj["elem"])
      _saveProjectToStorage(proj["project"])
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
    elem.firstChild.addEventListener('click', () => {
      setFocus(project)
      dom.toggleSidebarAndNav()
      let todoElems = dom.printProjectToFocus(project)
      if (!todoElems) return
      attachClickListenerToProjectTodos(todoElems)
      _attachTodoControlListeners(todoElems)
    })
  }
  function attachClickListenerToDelete(project, elem) {
    const deleteBtn = elem.lastChild
    let idx = projects.findIndex(prj => prj["project"] == project)
    
    deleteBtn.addEventListener('click', () => {
      projects.splice(idx, 1)
      elem.remove()

      if (getFocus() == project) {
        dom.clearFocus()
        setFocus(null)
      }
    })
  }
  function attachClickListenerToProjectTodos(todoElems) {
    todoElems.forEach(todo => {
      todo.firstChild.addEventListener('click', () => {
        dom.toggleAttr(todo.lastChild, 'data-todo-active')
      })
      _attachTodoControlListeners(todo)
    })
  }

  function _addListenerToCompleteAllTodos() {
    dom.$(".complete-all").addEventListener('click', dom.completeAllTodos)
  }
  function _addListenerToDeleteAllTodos() {
    dom.$(".delete-all").addEventListener('click', () => {
      if (getFocus().todos.length == 0) return
      if (confirm("are you sure?")) {
        getFocus().todos = []
        dom.printProjectToFocus(getFocus())
      } else {
        return
      }
    })
  }
  function _attachWarningListener() {
    dom.$('.warning-btn').addEventListener('click', dom.hideWarning)
  }

  function _todoSubmit() {
    dom.$('.todo-submit').addEventListener('click', () => {
      let data = dom.returnInfoFromTodoForm()
      let newTodo = todo(data)
      // return if there is no project in focus to submit the todo to
      if (!getFocus()) {
        dom.hideTodoForm()
        dom.showWarning()
        _attachWarningListener()
        return
      }

      getFocus().addTodo(newTodo)
      let elems = dom.printProjectToFocus(getFocus())
      attachClickListenerToProjectTodos(elems)
      dom.hideTodoForm()
      dom.clearTodoForm()
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
  function _markTodoComplete(todo) {
    if (!todo.children) return

    todo.children[1].lastChild.firstChild.addEventListener('click', () => {
      dom.addCompletedClassToTodoElements(todo)
      let todoInfo = dom.getTodoInnerText(todo)
      let todoIdx = findTodoIndex(todoInfo, getFocus().todos)
      getFocus().todos[todoIdx]["completed"] = true
    })
  }
  function _editTodo(_todo) {
    if (!_todo.children) return

    const edit = _todo.children[1].lastChild.children[1]
    
    edit.addEventListener('click', () => {
      const innerInfo = dom.getTodoInnerText(_todo)
      const idx = findTodoIndex(innerInfo, getFocus().todos)

      dom.showEditForm()
      dom.populateTodoForm(innerInfo)

      dom.$('.todo-edit-submit').onclick = () => {
        let newTodo = todo(dom.returnInfoFromTodoForm())
        getFocus().todos.splice(idx, 1, newTodo)

        let elems = dom.printProjectToFocus(getFocus())
        attachClickListenerToProjectTodos(elems)

        dom.hideEditForm()
        dom.clearTodoForm()
      }

      dom.$('.todo-edit-cancel').onclick = dom.hideEditForm
    })
  }
  function _removeTodo(todo) {
    if (!todo.children) return

    let todoInfo = dom.getTodoInnerText(todo)

    todo.children[1].lastChild.lastChild.addEventListener('click', () => {      
      let todoIdx = findTodoIndex(todoInfo, getFocus().todos)
      getFocus().removeTodo(todoIdx)
      todo.remove()
    })
  }
  function findTodoIndex(info, todos) {
    let foundIdx
    todos.forEach((todo, idx) => {
      if (isSameInfo(info, todo)) {
        foundIdx = idx
      }
    })
    return foundIdx
  }
  function isSameInfo(info, todo) {
    return (todo.todoTitle   == info.todoTitle   && 
    todo.description == info.description &&
    todo.dueDate     == info.dueDate     &&
    todo.priority    == info.priority)
  }

  function _loadSavedProjectsFromStorage() {
    const loadedProjects = store.loadProjects()
    loadedProjects.forEach(_project => {
      const newProject = project(_project)

      newProject.todos = _project.todos.map(_todo => todo(_todo))

      let projObj = projects[projects.push({
        project: newProject,
        elem: dom.printProjectToSidebar(newProject)
      }) - 1]

      attachClickListenerToProject(projObj.project, projObj.elem)
      attachClickListenerToDelete(projObj.project, projObj.elem)
    })
  }

  function _saveProjectToStorage(project) {
    store.writeProject(project)
  }

  function _saveOnPageClose() {
    window.onbeforeunload = updateProjectSaveData
  }

  function updateProjectSaveData() {
    // Set count back to 0 for overwriting project data
    // prevents duplicate save data
    store.setProjectCount(0)
    
    projects.forEach(_project => _saveProjectToStorage(_project.project))

    return null
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
    attachClickListenerToDelete(projObj.project, projObj.elem)
  }

  dom.$('.nav').addEventListener('click', dom.toggleSidebarAndNav)
  dom.id('createProject').addEventListener('click', eventHandler.publish.bind(this, "newProject"))
  eventHandler.publish("startApp")
  
  document.querySelectorAll('.todo').forEach(todo => {
    todo.firstChild.addEventListener('click', () => {
      dom.toggleAttr(todo.lastChild, 'data-todo-active')
    })
    _attachTodoControlListeners(todo)
  })
})()