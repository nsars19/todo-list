import "./stylesheets/css/main.css"
import { pubsub, project, todo, DOM } from './modules'

// test implementation
let eventHandler = pubsub()
// let subscription = eventHandler.subscribe("logData", logData)
// eventHandler.publish("logData", "the data")
// subscription.unsubscribe()

function logData(data) {
  console.log(data) 
}

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
  nav.classList.length === 2 ? nav.classList.remove('nav-selected') 
                             : nav.classList.add('nav-selected')
}
function toggleSidebar() {
  let sidebar = dom.$('.sidebar')
  dom.toggleAttr(sidebar, "data-sidebar-active")
}

