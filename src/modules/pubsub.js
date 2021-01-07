export const pubsub = () => {
  const subscribers = {};

  const subscribe = (event, callback) => {
    if (!subscribers[event]) {
      subscribers[event] = [];
    }

    let index;
    index = subscribers[event].push(callback) - 1;

    return {
      unsubscribe() {
        subscribers[event].splice(index, 1);
      },
    };
  };

  const publish = (event, data) => {
    if (!subscribers[event]) {
      return;
    }

    let callbackReturn;

    subscribers[event].forEach((callback) => {
      callbackReturn = callback(data);
    });

    return callbackReturn;
  };

  return {
    publish,
    subscribe,
  };
};
