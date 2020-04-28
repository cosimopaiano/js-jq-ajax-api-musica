/**
*Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali. 
*Servendoci di handlebars stampiamo tutto a schermo.
*In questo momento non è importante la parte grafica.
*Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz.
* In base a cosa scegliamo nella select vedremo i corrispondenti cd.
*/

$(document).ready(function () {

    var source = $('#select-template').html();
	var template = Handlebars.compile(source);
	var musicApi = 'https://flynn.boolean.careers/exercises/api/array/music';
    
    $.ajax({
        url: musicApi,
        method: 'GET',
        success: function(data) {
            var dati = data.response;
            for (var i = 0; i < data.response.length; i++) {
                var album = {
					immagine: dati[i].poster,
					titolo: dati[i].title,
					autore: dati[i].author,
					anno: dati[i].year,
                }
                var html = template(album);
			    $('.cds-container').append(html);

            } 
            
		},
		
        error: function() {
            alert('hai combinato qualche casino!');
		}

	});
	 
  
	
	
}); 
