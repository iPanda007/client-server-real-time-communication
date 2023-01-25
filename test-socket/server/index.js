
import { Server } from "socket.io";


const io = new Server({
    cors:{
        origin: "http://localhost:3000",
        methods:["GET","POST"]
    }
});

io.on('connection',(socket)=>{
  
    socket.on("sendRoom",(data)=>{
         socket.join(data)
    })

   socket.on('sendMessage',({room,message})=>{
      socket.to(room).emit("receive-message",message)
   })
});

io.listen(7000);
