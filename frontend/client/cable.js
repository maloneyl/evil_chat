// Our `cable.js` module will hold a connection instance in the `consumer`
// internal variable and export the createChannel function that will
// either subscribe an existing consumer to our chat channel
// or create a new consumer instance before subscribing.

import cable from "actioncable";

let consumer;

function createChannel(...args) {
  if (!consumer) {
    consumer = cable.createConsumer();
  }

  return consumer.subscriptions.create(...args);
}

export default createChannel;
