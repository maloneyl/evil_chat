import createChannel from "client/cable";

let callback;

const chat = createChannel("ChatChannel", {
  // `received`: Action Cable standard callback;
  // called once the consumer receives a channel broadcast with the
  // broadcast data as an argument in the form of a JavaScript object
  // (Rails handles conversion between Ruby and JS objects)
  received({ message }) {
    // It will be the responsibility of our component that should know
    // how to handle the DOM according to its needs.
    // `setCallback` is invoked from the component, so `callback` here
    // will be whatever component-specific function we want to call.
    if (callback) callback.call(null, message);
  }
});

// Sending a message:
// `perform` calls a respective Ruby method defined in chat_channel.rb.
// This is a bridge between JS and Ruby.
function sendMessage(message) {
  chat.perform("send_message", { message });
}

// Getting a message:
// This callback will be invoked once we receive something over ChatChannel.
function setCallback(fn) {
  callback = fn;
}

export { sendMessage, setCallback };
