import React, { useEffect, useState } from "react";
import "./navbar.css";
import Notification from "../../img/notification.svg";
import Message from "../../img/message.svg";
import Setting from "../../img/settings.svg";
const Navbar = ({ socket }: any) => {
  const [notifications, setNotifcations] = useState<any>([]);
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    socket.on("getNotification", (data: any) => {
      setNotifcations((prev: any) => [...prev, data]);
      console.log(data);
    });
  }, [socket]);

  console.log(notifications)

  const DisplayNotification = ({ senderName, type }: any) => {
    let action;
    if (type === 1) {
      action = "liked";
    } else if (type === 2) {
      action = "commented";
    } else {
      action = "shared";
    }
    return <span>{`${senderName} ${action} your post`}</span>;
  };

  return (
    <div>
      <div className="navbar">
        <span className="logo">Mi App</span>
        <div className="icons">
          <div className="icon" onClick={()=>setOpen(!open)}>
            <img className="iconImg" src={Notification} alt="" />
            <div className="counter">{notifications.length}</div>
          </div>
          <div className="icon">
            <img className="iconImg" src={Message} alt="" />
            <div className="counter">2</div>
          </div>
          <div className="icon">
            <img className="iconImg" src={Setting} alt="" />
            <div className="counter">2</div>
          </div>
          {open && (
            <div className="notifications">
              {notifications.map((n: any) => DisplayNotification(n))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
