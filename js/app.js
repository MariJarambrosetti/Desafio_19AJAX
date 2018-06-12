$(function(){

	// variables de los selectores 
	 var mapa = $('#mapa');
	 var resumen = $('#resumen'); 
	 var img = $('#img'); 


	 // variables de la api
	var url1 = 'https://api.darksky.net/forecast/';
	var url2 = 'https://maps.googleapis.com/maps/api/js?key=';
	var key_D = '3e3b1362e590c96df786f9fd07ad3436';
	var key_G = 'AIzaSyA-2p4CqmLAA8cTArCQfLlOh6WW-ILuK9w';
	var coords = {
		san: '-33.592281, -71.605512',
		conce: '-36.8201352, -73.0443904',
		stgo: '-33.4488897, -70.6692655'
		};

	// variables queryparams
	var queryParams = ['exclude=[minutely,hourly,daily,alerts,flags]','lang=es','units=auto'];
	var imagenes = {
		'rain': 'LINKKKK',
		'partly-cloudy-night': 'liiiiiiink'
		}

	// funcion de ajax
	$('#select').on('change', function(){
		$.ajax({
			url: url1 + key_D +'/'+ coords[$(this).val()] + '?' + queryParams[0] + '&' + queryParams[1] + '&' + queryParams[2],
			url: url2 + key_G + '&callback=initMap',	
			type: 'GET'
				}).then(function(data){
					console.log(data);
					})
		
	})

	// llamados de datos a los selectores 



})