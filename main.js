$(document).on('ready', function() {
	var Z =0;


  	var markerX = [];
	var markerY = [];


  	$(document).on('click', function(event){
  		var x = event.pageX;
  		var y = event.pageY;
  		// event.stopPropagation();


  			markerX[Z] = x;
  			markerY[Z] = y;


  		$('<img src="map-pin-green-hi-187x300.png" id="marker'+Z+'">').appendTo($('.container'))
  			.css({
  				top: markerY[Z]-'60',
  				left: markerX[Z]-'23',
  				position: "absolute",
  				height: '60px',
  				width: '45px',
  				zIndex: "1",
  				
  			});
  			console.log('coordinates:', markerX[Z], markerY[Z]);
  			Z++;

  	});



});