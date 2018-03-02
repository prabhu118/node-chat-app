const express               = require('express');
const socketIO              = require('socket.io');
const http                  = require('http');
const path                  = require('path');
const port                  = process.env.PORT || 3000;

const publicPath            = path.join(__dirname,'public');
const app                   = express();
const server                = http.createServer(app);
const io                    = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',function(socket){
    console.log(`User connected with SOCKET ID : ${socket.id}` )

    socket.on('disconnect',function(){
        console.log(`User disconnected with SOCKET ID : ${socket.id}`);
    })
})

server.listen(port, function(){
    console.log(`Server runnig on port : ${port}`);
})