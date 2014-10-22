$(document).ready(function() {
	document.write("test");
    $.getJSON( "database.json", function( data ) {
  $.each( data, function( key, val ) {
    	document.write(key + "|" + val);
  });
});

 
});