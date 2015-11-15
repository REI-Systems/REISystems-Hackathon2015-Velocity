$(document).ready(function(){
   var socket = io.connect('localhost:1337');
    socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
    });
});