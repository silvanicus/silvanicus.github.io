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

	
	// Render shows

	var $tvContainer = $('#app-body').find('.tv-shows');

	function renderShows(shows){

		shows.forEach(function(show){
			var article = template
				.replace(':name:', show.name)
				.replace(':img:', show.image.medium)
				.replace(':summary:', show.summary)
				.replace(':img alt:', show.name + 'logo');

				var $article = $(article);
					
				$tvContainer.append($article);

		})
	}

	
	// submit search form

	$('#app-body')
		.find('form')
		.submit(function onSubmit (ev) {
			event.preventDefault();
			var busqueda = $(this)
				.find('input[type="text"]')
				.val();

			$tvContainer.find('.tv-show').remove();

			var $loader = $('<div class="loader"></div>');

			$loader.appendTo($tvContainer);

			$.ajax({
				url: "http://api.tvmaze.com/search/shows",
				data: { q : busqueda },
				success: function(res, textStatus, xhr){
					
					$loader.remove();
					var shows = res.map(function(el){
						return el.show;
					})

					renderShows(shows);
							
				}
			})
		})

	// Working with template
	
	var template = '<article class="tv-show">' +
					'<div class="left img-container">' +
						'<img src=":img:" alt=":img alt:" class="tv-show-img">' +
					'</div>' +

					'<div class="right info">' +
						'<h1>:name:</h1>' +
						'<p>:summary:</p>' +
					'</div>' +
					'</article>';	

	// Working with AJAX

	$.ajax({
		url: "http://api.tvmaze.com/shows", // Donde va a hacer el request de los datos
		success: function(shows, textStatus, xhr){
			$tvContainer.find('.loader').remove();
			renderShows(shows);
		
		} // Qué parametros devuelve si se pudo acceder a la data. Permite 3 parámtros, entre esos toda la data del server.

	})

})