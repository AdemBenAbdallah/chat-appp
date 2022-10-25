import React from "react";
import img from "../img/adem.jpg";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={img} alt="" />
        <div className="userChatInfo">
          <span>adem</span>
          <p>how are you !!</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
