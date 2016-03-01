console.log('boom');
(function(){
	function clock(){
		var now = new Date();
		var ctx = document.getElementById("clock-canvas").getContext('2d');
		ctx.save();
		ctx.clearRect(0,0,150,150);
		ctx.translate(75,75);
		ctx.scale(0.4,0.4);
		ctx.rotate(-Math.PI/2);
		ctx.strokeStyle = "black";
		ctx.fillStyle = "white";
		ctx.lineCap = "round";	

		//hours marks
		ctx.save();
		for(var i = 0 ; i < 12 ; i++){
			ctx.beginPath();
			ctx.rotate(Math.PI/6);
			ctx.moveTo(100,0);
			ctx.lineTo(120,0);
			ctx.stroke();
		}
		ctx.restore();

		//minutes marks
		ctx.save();
		ctx.lineWidth = 5;
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
		ctx.lineWidth = 14;
		ctx.beginPath();
		ctx.moveTo(-20,0);
		ctx.lineTo(80,0);
		ctx.stroke();
		ctx.restore();

		//write minutes
		ctx.save();
	  	ctx.rotate(sec * Math.PI/30);
	  	ctx.strokeStyle = "#D40000";
	  	ctx.fillStyle = "#D40000";
	  	ctx.lineWidth = 6;
	  	ctx.beginPath();
	  	ctx.moveTo(-30,0);
	  	ctx.lineTo(83,0);
	  	ctx.stroke();
	  	ctx.beginPath();
	  	ctx.arc(0,0,10,0,Math.PI*2,true);
	  	ctx.fill();
	  	ctx.beginPath();
	  	ctx.arc(95,0,10,0,Math.PI*2,true);
	  	ctx.stroke();
	  	ctx.fillStyle = "rgba(0,0,0,0)";
	  	ctx.arc(0,0,3,0,Math.PI*2,true);
	  	ctx.fill();
	  	ctx.restore();

	  	ctx.beginPath();
  		ctx.lineWidth = 14;
  		ctx.strokeStyle = '#325FA2';
  		ctx.arc(0,0,142,0,Math.PI*2,true);
  		ctx.stroke();

  		ctx.restore();

		window.requestAnimationFrame(clock);
	}


	window.requestAnimationFrame(clock);
})();





