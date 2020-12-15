import "./stylesheets/css/main.css"
import { pubsub, project, todo, DOM } from './modules'

// test implementation
let eventHandler = pubsub()
let subscription = eventHandler.subscribe("logData", logData)
eventHandler.publish("logData", "the data")
subscription.unsubscribe()

function logData(data) {
  console.log(data) 
}

const dom = DOM()

let newDiv = dom.createWith('div', {
  class: "divElem",
  id: "testDiv"
})
console.log(newDiv)