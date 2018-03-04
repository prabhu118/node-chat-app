var socket = io();

socket.on('connect',function(){
    console.log(`User connected with SOCKET ID : ${socket.id}`)

    socket.on('newMessage',function(msg){
        console.log(msg);
        var li = jQuery('<li></li>');
        li.text(`${msg.from} : ${msg.text}`);
        jQuery('#messages').append(li);
    })
});

socket.on('disconnect',function(){
    console.log(`User disconnected`);
});

jQuery('#message-form').on('submit',function(e){
    e.preventDefault();
    
    socket.emit('createMessage',{
        from:'User',
        text:jQuery('[name=message]').val()
    },function(data){
        console.log(data)
    });
});