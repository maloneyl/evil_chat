import { sendMessage } from "client/chat";
import "./message-form.css";

function submitMessage(input) {
  sendMessage(input.value);

  input.value = ""; // eslint-disable-line no-param-reassign
  input.focus();
}

const form = document.querySelector(".js-message-form");

if (form) {
  const input = form.querySelector(".js-message-form--input");
  const submit = form.querySelector(".js-message-form--submit");

  input.addEventListener("keydown", event => {
    if (event.metaKey && event.keyCode === 13) {
      // Cmd/Ctrl+Enter
      event.preventDefault();
      submitMessage(input);
    }
  });

  submit.addEventListener("click", event => {
    event.preventDefault();
    submitMessage(input);
  });
}
