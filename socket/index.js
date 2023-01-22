import { Server } from "socket.io";

const io = new Server({ 
    cors: {
        origin:"http://127.0.0.1:5173  "
    }
});

let onlineUsers = [];
const addNewUser = (username, socketId) => {
    !onlineUsers.some(user=>user.username === username ) && onlineUsers.push({username,socketId})
}


io.on("connection", (socket) => {
    io.emit("firstEvent", "Hello this is test");

    socket.on("disconnect", () => {
        console.log("someone has left")
    })
});

io.listen(7000);