import { setCallback } from "client/chat";
import "components/message/message";
import "./messages.css";

function scrollToBottom(element) {
  element.scrollTop = element.scrollHeight; // eslint-disable-line no-param-reassign
}

const messages = document.querySelector(".js-messages");

if (messages) {
  const content = messages.querySelector(".js-messages--content");

  scrollToBottom(content);

  // Telling `chat.js` to call this piece of code whenever a new message is
  // received over ActionCable
  setCallback(message => {
    content.insertAdjacentHTML("beforeend", message);

    scrollToBottom(content);
  });
}
