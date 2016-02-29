console.log('boom');
(function(){
	function clock(){
		var now = new Date();
		var ctx = document.getElementById("clock-canvas").getContext('2d');


		ctx.translate(75,75);
		ctx.scale(0.4,0.4);

		ctx.strokeStyle = "black";
		ctx.fillStyle = "white";


		ctx.save();

		//hours
		for(var i = 0 ; i < 12 ; i++){
			ctx.beginPath();
			ctx.rotate(Math.PI/6);
			ctx.moveTo(100,0);
			ctx.lineTo(120,0);
			ctx.stroke();
		}

		ctx.restore();
		//minutes
		for(var i = 0 ; i < 60 ; i++){

		}
	}


	window.requestAnimationFrame(clock);
})();





