var socket = io.connect();

socket.on('message', function(data){
    console.log(data.message);
});

$(document).ready(function(){
    $( "#btnFindShelter" ).click(function() {
		alert($('#txtZipCode').val());
		alert($('#chkMedicalAssist').val());
		alert($('#chkForeignLangAssist').val());
		alert($('#chkFireAndRescueAssist').val());
      socket.emit('client_data', {'letter': String.fromCharCode(a)});
    });
  });