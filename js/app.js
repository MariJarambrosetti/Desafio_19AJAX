		// como google la carga en un script en el html primero, 
		// se carga la funcion antes de que se carge la página completa para que el html, al llamarla, 
		// la reconozca 

		function initMap(){
			// variable con las coordenadas de los mapas
			var chile = {'lat': -33.4390438, 'lng': -70.6180208};	
			var san = {'lat': -33.592281, 'lng': -71.605512};
			var conce = {'lat': -36.8201352, 'lng': -73.0443904};
			var stgo = {'lat': -33.4488897, 'lng': -70.6692655};

			map = new google.maps.Map(document.getElementById('map'), {
			center: chile, 
			zoom: 13
			});

			// map.setCenter(chile);

			$('#select').on('change', function(){

				map = new google.maps.Map(document.getElementById('map'), {
					center: chile, 
					zoom: 13
				});

				if ($(this).val()=='san') {
					map.setCenter(san);
				}
				if ($(this).val()=='conce') {
					map.setCenter(conce);
				}
				if ($(this).val()=='stgo') {
					map.setCenter(stgo);
				}
			});	
		};
		

		



$(function(){

	// variables de los selectores 
	 var mapa = $('#map');
	 var resumen = $('#resumen'); 
	 var img = $('#img'); 


	 // variables de la api
	var url1 = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/';
	var url2 = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/js?key=';
	var key_D = '3e3b1362e590c96df786f9fd07ad3436';
	var key_G = 'AIzaSyCprm_doTsPZeWpS6HaRYmFUFJ49T6MbAI';
	var coords = {
		san: '-33.592281, -71.605512',
		conce: '-36.8201352, -73.0443904',
		stgo: '-33.4488897, -70.6692655',
		};


	// variables queryparams
	var queryParams = ['exclude=[minutely,hourly,daily,alerts,flags]','lang=es','units=auto'];
	var imagenes = {
		'rain': 'https://www.vectorportal.com/thumb_new/rainy3_7188.jpg',
		'partly-cloudy-night': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR3xvizYvWpMm1z_O1tI3heqdl8JELzJNb7obDKTF6KzSSnYfkbw',
		'clear-day': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Emoji_u2600.svg/2000px-Emoji_u2600.svg.png',
		'clear-night': 'https://image.flaticon.com/icons/svg/56/56162.svg',
		'fog': 'http://icons.iconarchive.com/icons/custom-icon-design/lovely-weather/512/fog-icon.png',
		'cloudy':'http://icon-park.com/imagefiles/simple_weather_icons_cloudy.png',
		'partly-cloudy-day': 'http://icon-park.com/imagefiles/simple_weather_icons_partly_cloudy.png'
	}


	
	$('#select').on('change', function(){

		// funcion de ajax para darksky
		$.ajax({
			url: url1 + key_D +'/'+ coords[$(this).val()] + '?' + queryParams[0] + '&' + queryParams[1] + '&' + queryParams[2],	
			type: 'GET'
		})
		.then(function(data){
					console.log(data);
						resumen.text(parseInt(data.currently.temperature) + '°' + data.currently.summary);
						img.attr('src', imagenes [data.currently.icon]); 
		});		
	});
});