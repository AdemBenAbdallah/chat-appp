import React, { useRef } from "react";
import img from "../img/adem.jpg"


const Message = ({ message }) => {


  const ref = useRef();


  return (
    <div
      ref={ref}
      // className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={img}
          alt=""
        />
      </div>
      <div className="messageContent">
        <p>i go to home call me back!</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
