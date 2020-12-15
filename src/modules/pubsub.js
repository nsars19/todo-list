export const pubsub = () => {
  let subscribers = {};

  const subscribe = (event, callback) => {
      if (!subscribers[event]) {
        subscribers[event] = []
      }

      let index;
      index = subscribers[event].push(callback) - 1

      return {
        unload() {
          subscribers[event].splice(index, 1)
        }
      }
  }

  const publish = (event, data) => {
    if (!subscribers[event]) { return }

    subscribers[event].forEach(callback => {
      callback(data)
    })
  }

  return {
    publish,
    subscribe,
  }
}