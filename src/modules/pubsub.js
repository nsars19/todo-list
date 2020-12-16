export const pubsub = () => {
  let subscribers = {};

  const subscribe = (event, callback) => {
      if (!subscribers[event]) {
        subscribers[event] = []
      }

      let index;
      index = subscribers[event].push(callback) - 1

      return {
        unsubscribe() {
          subscribers[event].splice(index, 1)
        }
      }
  }

  const publish = (event, data) => {
    if (!subscribers[event]) { return }

    let callbackReturns = []
    
    subscribers[event].forEach(callback => {
      callbackReturns.push(callback(data))
    })

    return callbackReturns
  }

  return {
    publish,
    subscribe,
  }
}