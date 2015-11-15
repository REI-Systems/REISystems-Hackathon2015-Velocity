module.exports.respond = function(shelters,socket_io){
    socket_io.on('shleters', function(shelters){
       endpoint.emit('Hey shelters'); 
    });
    
}
