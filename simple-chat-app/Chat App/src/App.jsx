import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Chat from "./Chat";
import "./App.css";

const socketConnect = io("http://localhost:4000");

const App = () => {
  const [socket, setSocket] = useState(socketConnect);
  const [username, setUserName] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket?.emit("join_room", room);
      setShowChat(true)
    }
  };



  return (
    <div className="App ">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3> Join A Chat </h3>
          <input
            type={"text"}
            placeholder="john..."
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Romm Id"
            name=""
            id=""
            onChange={(e) => setRoom(e.target.value)}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
};

export default App;
