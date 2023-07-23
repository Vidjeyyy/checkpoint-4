import React from "react";
import Message from "../Message/Message";
import BarreDeChat from "../BarreDeChat/BarreDeChat";
import "./Chat.scss";

export default function Chat() {
  return (
    <div className="body">
      <div>Talk with yourself</div>
      <div className="chat">
        <Message />
        <BarreDeChat />
      </div>
    </div>
  );
}
