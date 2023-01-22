

import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";
import { posts } from "./data";
import { io } from 'socket.io-client'

const App = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const socket = io("http://localhost:7000");
  // const [socket, setSocket] = useState(null);

  // useEffect(() => {
  //   setSocket(io("http://localhost:5000"));
  // }, []);

  // useEffect(() => {
  //   socket?.emit("newUser", user);
  // }, [socket, user]);

  useEffect(() => {
  

    console.log(socket.on("firstEvent", (data) => {
        console.log(data)
    }))
  }, [])

  return (
    <div className="container">
      {user ? (
        <>
          <Navbar />

          {
            posts.map((post) => (
              <Card key={post.id} post={post} />
            ))
          }

          <span className="username">{user}</span>
        </>
      ) : (
        <div className="login">
          <h2>Lama App</h2>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => setUser(username)}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;
