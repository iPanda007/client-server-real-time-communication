const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const cors = require('cors');

const app =express();

app.use(cors());


const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:"http://127.0.0.1:5173",
        methods: ["GET","POST"]
    }
});

io.on("connection",(socket)=>{
    socket.on("join_room",(data)=>{
        socket.join(data)
    });

    socket.on("send_message",(data)=>{
        socket.to(data.room).emit('receive-message',data)
    })

    socket.on("disconnect",()=>{
        console.log("user is disconnect",socket.id);
    })
})

server.listen(4000)
