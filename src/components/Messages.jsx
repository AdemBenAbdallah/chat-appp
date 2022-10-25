import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([{id : 3 , text : "adem sleep"}]);
  



  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
