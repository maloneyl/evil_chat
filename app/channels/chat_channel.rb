class ChatChannel < ApplicationCable::Channel
  # Called once the connection is authenticated
  def subscribed
    stream_from "chat"
  end

  # Called when message-form contents are received by the server
  def send_message(payload)
    message = Message.new(author: current_user, text: payload["message"])

    if message.save
      # Render the message partial and broadcast the resulting HTML
      ActionCable.server.broadcast "chat", message: render(message)
    end
  end

  private

  def render(message)
    ApplicationController.new.helpers.c("message", message: message)
  end
end
