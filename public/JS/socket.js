var socket = io();

socket.on('connect',function(){
    console.log(`User connected with SOCKET ID : ${socket.id}`)
});

socket.on('disconnect',function(){
    console.log(`User disconnected`);
});