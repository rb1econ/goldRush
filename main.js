$(document).on('ready', function() {
	var Z =0;


  	$(document).on('click', function(event){
  		console.log('hello');
  		var x = event.pageX;
  		var y = event.pageY;
  	
  		$('<div id="marker'+Z+'" class="removal"></div>').appendTo($('.container'))
  			.css({
  				top: y-'60',
  				left: x-'23',
  				position: "relative"
  				// zIndex: "1"
  				})
  			



  		$('<img src="map-pin-green-hi-187x300.png">').appendTo($('#marker'+Z))
  			.css({
  				position: "absolute",
  				height: '60px',
  				width: '45px',
  				// zIndex: "1"
  				
  				});

  			$("<textarea rows='4' cols='5' type='text'>HELLO WORLD</textarea>").appendTo('#marker'+Z)
  				.css({
  					top: '-60px',
  					left: '4px',
  					position: 'absolute',
  					display: 'none'
  				})
  				
  			// console.log('coordinates:', x, y);
 

  			Z++;
  		$(document).on('click', 'textarea', function(event){
  			event.stopPropagation();
  	});
});
  	$(document).on('click', '.removal', function(event){
  		console.log('removal this: ', this)
  		$(this).remove();
  		event.stopPropagation();
  	});
  	
  $('img').hover(function(event){
  	$('textarea').toggle();
  	event.stopPropagation();
  });





});