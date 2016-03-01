console.log('boom');
(function(){
	function clock(){
		var now = new Date();
		var ctx = document.getElementById("clock-canvas").getContext('2d');


		ctx.translate(75,75);
		ctx.scale(0.4,0.4);
		ctx.rotate(-Math.PI/2);
		ctx.strokeStyle = "black";
		ctx.fillStyle = "white";


		ctx.save();

		//hours marks
		for(var i = 0 ; i < 12 ; i++){
			ctx.beginPath();
			ctx.rotate(Math.PI/6);
			ctx.moveTo(100,0);
			ctx.lineTo(120,0);
			ctx.stroke();
		}

		ctx.restore();
		//minutes marks
		for(var i = 0 ; i < 60 ; i++){

			//draw if does not intersect hours marks
			if(i % 5 != 0){
				ctx.beginPath();
				ctx.moveTo(117,0);
				ctx.lineTo(120,0);
				ctx.stroke();	
			}

			ctx.rotate(Math.PI/30);

		}

		ctx.restore();


		//current time
		var sec = now.getSeconds();
		var min = now.getMinutes();
		var hr = now.getHours();
		hr = hr > 12 ? hr - 12 : hr;

		ctx.fillStyle = "black";

		//write hours
		ctx.save();
		ctx.rotate(hr * (Math.PI/6) + (Math.PI/3600) * min + (Math.PI/1800) * sec);
		ctx.beginPath();
		ctx.moveTo(-28,0);
		ctx.lineTo(128,0);
		ctx.stroke();
		ctx.restore();

	}


	window.requestAnimationFrame(clock);
})();





