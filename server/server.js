const express               = require('express');
const socketIO              = require('socket.io');
const http                  = require('http');
const path                  = require('path');
const port                  = process.env.PORT || 3000;

const genMessage            = require('./utils/message');
const publicPath            = path.join(__dirname,'../public');
const app                   = express();
const server                = http.createServer(app);
const io                    = socketIO(server);
console.log(publicPath);
app.use(express.static(publicPath));

io.on('connection',function(socket){
    console.log(`User connected with SOCKET ID : ${socket.id}` )

    socket.emit('newUser',{
        from : 'Admin',
        txt : 'Welcome to chat app'
    });

    socket.broadcast.emit('newUser',{
        from : 'Admin',
        txt : 'New user joined'
    });

    socket.on('newMessage',function(msg){
        console.log('Message : '+ msg);
        io.emit('newMessage',genMessage(msg.from,msg.text));
    })

    socket.on('disconnect',function(){
        console.log(`User disconnected with SOCKET ID : ${socket.id}`);
    })
})

server.listen(port, function(){
    console.log(`Server runnig on port : ${port}`);
})