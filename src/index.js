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

let testTodo = todo({
  description: "a descriptor",
  dueDate: "12/25/2020",
  priority: "high",
  notes: ["super important", "make sure it's done well!"]
})
let testTodo2 = todo({
  description: "another todo",
  dueDate: "12/12/2020",
  priority: "low",
  notes: ["get to it eventually", "don't spend too much time on this one"]
})

const createTodo = eventHandler.subscribe("createTodo", todo)
let todos = [
  eventHandler.publish("createTodo", testTodo),
  eventHandler.publish("createTodo", testTodo2)
]

let testProject = {
  title: "new project",
  todos: todos,
}
const proj = project(testProject)
console.log(proj)

function toggleNotes() {
  let notes = dom.$('.todo-notes')
  dom.toggleAttr(notes, "data-note-active")
}  
document.getElementById("1").addEventListener('click', toggleNotes)