import "../stylesheets/css/main.css"
import { pubsub } from './pubsub'

// test implementation
let eventHandler = pubsub()
let subscription = eventHandler.subscribe("logData", logData)
eventHandler.publish("logData", "the data")
subscription.unsubscribe()

function logData(data) {
  console.log(data)
}