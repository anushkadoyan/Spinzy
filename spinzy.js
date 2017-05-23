$(document).ready( function() {
	
	document.ontouchmove = function(event){
    	
    	event.preventDefault();
	}

	var points = 0;
	var rate = 1/100;
	$('#points-value').text(0);
	
	$('#spinny').propeller({
		inertia: 0.995, 
		speed: 0,
		onRotate:function() {
			
			if(this.speed>0.01) {
				
				points += Math.abs(this.speed) * rate;
				
				$('#points-value').text(Math.round(points));

			}

		}
	});
});