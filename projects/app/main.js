$(function() {

	////////////////////// EVENTSSSS & CALLBACKS

    
	// ************* Creating and event with vanilla javascripts
	// var button = document.getElementById('btn-test');
	// button.addEventListener('click', function(){
	// 	console.log('Me presionaron');
	// })

	// ************* Binding an event to a handler with jQuery (2 options)
	// var $form = $('form');
	// var $button = $('#btn-test');
	// $button.click(function(){
	// 	console.log('Me presionaron');
	// })
	// $button.on('click', function(){
	// 	console.log('Me presionaron');
	// })

	// ************* Binding multiple events in one handler in jQuery
	/*$button.on({
		'click': function(){ console.log('Me presionaron'); },
		'mouseover': function(){ console.log('MouseEncima'); }
	});*/

	// ************* OFF the binden element
	// $button.off('click');

	/*// ************* NAMESPACES: making our own events
	$button.on('click.myNameSpace', function(){  Code here }) // Creates the special event
	$button.off('click.myNameSpace'); // Removes the "click" special event
	$button.off('.myNameSpace'); // Removes ALL the special events with this name*/

	// ************* FORMS

	/*$form.on('submit', function(event) {

		// Prevent default: todos los formularios por default prevenir que haga post
		event.preventDefault();

		var action = $(this).attr('action');

		// Hacer request
		$.ajax(action, {
			/* Code here */
	// 	})

	// })*/

	// submit search form


	$('#app-body')
		.find('form')
		.submit(function onSubmit (ev) {
			event.preventDefault();
			var busqueda = $(this)
				.find('input[type="text"]')
				.val();

			alert('Hemos buscado' + ' ' + busqueda);
		})

	$.ajax({
		url: "http://api.tvmaze.com/shows",

	})

})