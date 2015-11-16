
var socket = io.connect();
$(document).ready(function(){
    $( "#btnSignUp" ).click(function() {
	socket.emit('client_data',JSON.stringify(
	  {'FirstName': $('#txtFirstName').val(),
	  'LastName':$('#txtLastName').val(),
	  'EmailAddress':$('#txtEmailAddress').val(),
	  'PhoneNumber':$('#txtPhoneNumber').val(),
	  'ZipCode': $('#txtZipCode').val()
	  }));
	});
  });