var socket = io.connect();

socket.on('message', function(data){
    console.log(data.message);
});

$(document).ready(function(){
    $( "#btnFindShelter" ).click(function() {
	socket.emit('client_data',
	  {'ZipCode': $('#txtZipCode').val(),
	  'MedicalAssistance':$('#chkMedicalAssist').is(':checked'),
	  'ForeignLanguageAssistance':$('#chkForeignLangAssist').is(':checked'),
	  'FireAndRescueAssist':$('#chkFireAndRescueAssist').is(':checked')});
    });
  });