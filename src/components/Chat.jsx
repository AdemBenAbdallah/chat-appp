import React from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { useDispatch } from "react-redux";
import  { handleOpen } from "../store/sideBarSlice";


const Chat = () => {
  const dispatch = useDispatch()

  
  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" onClick={() => dispatch(handleOpen())}/>
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
