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

socket.on('newLocationMessage',function(message){
    var li = jQuery('<li></li>');
    var a = jQuery('<a target="_blank">My current location<a>')

    li.text(`${message.from} : `);
    a.attr('href',message.url);
    li.append(a);
    jQuery('#messages').append(li);
})

jQuery('#message-form').on('submit',function(e){
    e.preventDefault();
    
    socket.emit('createMessage',{
        from:'User',
        text:jQuery('[name=message]').val()
    },function(data){
        console.log(data)
    });
});

var locationbtn = jQuery('#send-loc');
locationbtn.on('click',function(){
    if(!navigator.geolocation)
    {
        alert('Your browser does not support geolocation');
    }

    navigator.geolocation.getCurrentPosition(function(position){
        socket.emit('createlocation',{
            latitude : position.coords.latitude,
            longitude : position.coords.longitude
        })
    },function(){
        alert('Unable to fetch location');
    })
})