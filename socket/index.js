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

const removeUser = (socketId)=>{
   onlineUsers = onlineUsers.filter((user)=> user.socketId !== socketId)
}

const getUser = (username) => {
    return onlineUsers.find((user)=> user.username === username)
}

io.on("connection", (socket) => {
 io.emit("firstEvent", "Hello this is test");   

    socket.on("newUser",(username)=>{
        addNewUser(username,socket.id);
    });

    socket.on("sendNotification",({senderName,receiverName,type})=>{   
        const receiver = getUser(receiverName);
        io.to(receiver?.socketId).emit('getNotification',{
            senderName,
            type
        })
    });

    socket.on("disconnect", () => {
       removeUser(socket.id);
    });
     
});

io.listen(7000);