var data = {
    "personalData":[{
            "name":"Silvana",
            "lastName":"Ramirez",
            "Age":"31",
            "City":"Bogotá",
            "Country":"Colombia"
        }
    ],
    "dev":[{
            "Graphics":"Photoshop, Illustrator, After Effects",
            "Basic":"HTML5 + CSS3",
            "Preprocessor":"Sass",
            "Js":"Vanilla + jquery",
            "Responsive framework":"bootstrap",
            "Version Control":"svn + git (github)",
            "Task Runner":"Gulp",
            "Packages":"NPM"
        }
    ],
    "linkSocial":[{
            "facebook":"#",
            "twitter":"#"
        }
    ]
}

$(function(){

	// $.getJSON( "http://silvanicus.github.io/assets/json/app.json", function( data ) {
	//   var items = [];
	//   $.each( data, function( key, val ) {
	//     items.push( "<li id='" + key + "'>" + val + "</li>" );
	//   });
	//
	//   $( "<ul/>", {
	//     "class": "my-new-list",
	//     html: items.join( "" )
	//   }).appendTo( "body" );
	// });

	//Preload images + spinner
    $(window).load(function(){
        $('.cover').fadeOut(5000);
    })

});
