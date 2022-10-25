import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import img from "../img/adem.jpg";
import { deleteUser } from "../store/userSlice";



const Navbar = () => {
  const dispatch = useDispatch()
  let user = useSelector((state) => state.user.value);
  
  const handle = () => {
    signOut(auth)
    dispatch(deleteUser())
  }
  user = JSON.parse(user)

  return (
    <div className="navbar">
      <div className="user">
        <div>
          <img src={user.photoURL} alt="" />
          <span>{user.displayName}</span>
        </div>
        <button onClick={() => handle()}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
