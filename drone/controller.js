
var io = require('socket.io').listen(3002);
//io.sockets.setMaxListeners(100);
//var emiter=require('events');
//emiter.setMaxListeners(0);
var batteryLevel=0;
//io.set('log level', 1);

io.sockets.on('connection', function (socket) {
    var arDrone = require('ar-drone');
    var client = arDrone.createClient();
    client.config('general:navdata_demo', 'FALSE');
	/*setInterval(function(){
		 socket.emit('event', { name: 'video',value:function(){return client.getVideoStream();}});

	},200);*/
    setInterval(function(){
        batteryLevel = client.battery();
		console.log("batterylevel :--->"+batteryLevel);
		
        socket.emit('event', { name: 'battery',value: batteryLevel});
	//client.animateLeds('green', 5, 2);
    //},1000);
	//setInterval(function(){
		/*client.on('general:navdata',function(data){
			navdata=data;
			 socket.emit('event', { name: 'navdata',value:navdata});
			
			var batteryLevel =navdata.demo.batteryPercentage,
				frontBackDegrees=navdata.demo.frontBackDegrees,
        		leftRightDegrees=navdata.demo.leftRightDegrees,
        		clockwiseDegrees=navdata.demo.clockwiseDegrees,
        		altitudeMeters=navdata.demo.altitudeMeters,
        		xVelocity=navdata.demo.xVelocity,
        		yVelocity=navdata.demo.yVelocity,
        		zVelocity=navdata.demo.zVelocity;
			console.log("------>"+navdata.demo.zVelocity);
		});*/
        
       
        socket.emit('event', { name: 'battery',value: batteryLevel});
	//client.animateLeds('blinkRed', 5, 2);
    },1000);
    socket.on('event', function (data) {
        if(data.name=="takeoff"){
            console.log("Browser asked Ar Drone to Take Off");
            client.takeoff();
        }
        if(data.name=="up"){
            console.log("Browser asked Ar Drone to up by :"+data.speed+"m/s  duration : "+data.duration+"s");
            client.up(data.speed);
        }
        if(data.id=="animation"){
        	console.log("Browser asked Ar Drone to animate NAME:" +data.name.toString()+" TIME: "+data.duration);
            client.animate(data.name.toString(),data.duration);
        }
        if(data.id=="animationled"){
        	console.log("Browser asked Ar Drone to animateled NAME:" +data.name.toString()+" TIME: "+data.duration);
            client.animateLeds(data.name.toString(),5,data.duration);
        }
        if(data.name=="stop"){
        	console.log("Browser asked Ar Drone to stop");
            client.stop();
        }
        if(data.name=="land"){
            console.log("Browser asked Ar Drone to Land");
            client.land();
        }
        //------------------------------------------------------------------
         if(data.name=="down"){
            console.log("Browser asked Ar Drone to down :"+data.speed+"m/s  duration : "+data.duration+"s");
            client.down(data.speed);
        }
        if(data.name=="left"){
            console.log("Browser asked Ar Drone to left by :"+data.speed+"m/s  duration : "+data.duration+"s");
            client.left(data.speed);
        }
        if(data.name=="right"){
           console.log("Browser asked Ar Drone to right  by :"+data.speed+"m/s  duration : "+data.duration+"s");
            client.right(data.speed);
        }
        if(data.name=="front"){
            console.log("Browser asked Ar Drone to front   by :"+data.speed+"m/s  duration : "+data.duration+"s");
            client.front(data.speed);
        }
         if(data.name=="back"){
            console.log("Browser asked Ar Drone to back  by :"+data.speed+"m/s  duration : "+data.duration+"s");
            client.back(data.speed);
        }
        if(data.name=="clockwise"){
            console.log("Browser asked Ar Drone to clockwise  by :"+data.speed+"m/s  duration : "+data.duration+"s");
            client.clockwise(data.speed);
        }
        if(data.name=="counter-clockwise"){
            console.log("Browser asked Ar Drone to counter-clockwise  by :"+data.speed+"m/s  duration : "+data.duration+"s");
            client.counterClockwise(data.speed);
        }
        if(data.name=="recover"){
            console.log("Browser asked Ar Drone to recover");
            client.stop();
        }

    });
});

