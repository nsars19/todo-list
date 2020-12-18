import "./stylesheets/css/main.css"
import { pubsub, project, todo, DOM } from './modules'


let eventHandler = pubsub()

const dom = DOM()

dom.$('.nav').addEventListener('click', () => {
  let toggle = eventHandler.subscribe("toggleNav", toggleNav)
  eventHandler.publish("toggleNav")
  toggle.unsubscribe()
  let sidebar = eventHandler.subscribe("toggleSidebar", toggleSidebar)
  eventHandler.publish("toggleSidebar")
  sidebar.unsubscribe()
})

function toggleNav() {
  let nav = dom.$('.nav')
  nav.classList.length === 2 ? dom.removeClass(nav, 'nav-selected') 
                             : dom.addClass(nav, 'nav-selected')
}
function toggleSidebar() {
  let sidebar = dom.$('.sidebar')
  dom.toggleAttr(sidebar, "data-sidebar-active")
}

function toggleNotes() {
  let notes = dom.$('.todo-desc')
  dom.toggleAttr(notes, "data-note-active")
}

let testTodo = todo({
  todoTitle: "make a title",
  description: "a descriptor",
  dueDate: "12/25/2020",
  priority: "high",
})
let testTodo2 = todo({
  description: "another todo",
  dueDate: "12/12/2020",
  priority: "low",
  notes: ["get to it eventually", "don't spend too much time on this one"]
})
let testTodo3 = todo({
  description: "get cheese ingredients",
  dueDate: "12/11/2020",
  priority: "low",
})
let testTodo4 = todo({
  description: "eatCHEESE and then get app running",
  dueDate: "12/12/2020",
  priority: "low",
})
const createTodo = eventHandler.subscribe("createTodo", todo)

let project1 = project({
  projectTitle: "Make some cheese",
  todos: [testTodo3, testTodo4]
})
let project2 = project({
  projectTitle: "Something else!",
  todos: [testTodo, testTodo2]
})

let projects = [
  {obj: project1, elem: dom.printProjectToSidebar(project1)},
  {obj: project2, elem: dom.printProjectToSidebar(project2)}
]

projects.forEach(proj => {
  proj["elem"].addEventListener('click', () => {
    dom.clearFocus()
    dom.printProjectToFocus(proj["obj"])
    toggleSidebar()
  })
})