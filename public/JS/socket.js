var socket = io();

socket.on('connect',function(){
    console.log(`User connected with SOCKET ID : ${socket.id}`)

    socket.on('newMessage',function(msg){
        console.log(msg);
    })

    socket.on('newUser',function(user){
        console.log(user);
    })
});

socket.on('disconnect',function(){
    console.log(`User disconnected`);
});