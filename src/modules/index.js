import "../stylesheets/css/main.css"
import { pubsub } from './pubsub'

// test implementation
let eventHandler = pubsub()
eventHandler.subscribe("logData", logData)
eventHandler.publish("logData", "the data")

function logData(data) {
  console.log(data)
}