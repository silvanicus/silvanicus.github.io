
$(function(){

	$.getJSON( "http://silvanicus.github.io/assets/json/app.json", function( data ) {
	  var items = [];
	  $.each( data, function( key, val ) {
	    items.push( "<li id='" + key + "'>" + val + "</li>" );
	  });
	 
	  $( "<ul/>", {
	    "class": "my-new-list",
	    html: items.join( "" )
	  }).appendTo( "body" );
	});

	//Preload images + spinner
    $(window).load(function(){
        $('.cover').fadeOut(5000);
    })

}); 