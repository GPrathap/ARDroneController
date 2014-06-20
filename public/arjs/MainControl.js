var clearthread;
	function startArDroneController(){
				
                var socket = io.connect('http://localhost:3002');
                socket.on('connect', function () { 
                    console.log("Connection Successful");

                });

                socket.on('event', function (data) {
					/*if(data.name=='video'){
						 $("#video1").html(data.value);
					}*/
                    if(data.name=="battery"){
                        $("#betteryprogressbar").progressbar({value:data.value});
						//alert(data.value);
                    }
                    if(data.name=="navdata"){
                    	$("#Velocityx").html(data.demo.xVelocity);
                    	$("#Velocityy").html(data.demo.yVelocity);
                    	$("#Velocityz").html(data.demo.zVelocity);
                    	var frontBackDegrees=data.demo.frontBackDegrees,
        				    leftRightDegrees=data.demo.leftRightDegrees,
        				    clockwiseDegrees=data.demo.clockwiseDegrees;
        				    canvasApp(frontBackDegrees);
        			$("#Accelerometersx").html(data.rawMeasures.accelerometers.x);
        			$("#Accelerometersy").html(data.rawMeasures.accelerometers.y);
        			$("#Accelerometersz").html(data.rawMeasures.accelerometers.z);
        			
        			$("#gyrometersx").html(data.rawMeasures.gyrometers.x);
        			$("#gyrometersy").html(data.rawMeasures.gyrometers.y);
        			$("#gyrometersz").html(data.rawMeasures.gyrometers.z);
        				    
                    }
                });
                 
		$('#selector3').change(function(){
					
					socket.emit('event',{name:$("#selector3").find("option:selected").attr('value'),id:'animation',duration:$('#slider1').slider("option", "value")});
		});
		$('#selector4').change(function(){
					
					socket.emit('event',{name:$("#selector4").find("option:selected").attr('value'),id:'animationled',duration:$('#slider2').slider("option", "value")});
				});
                $("#takeoff").click(function(){
                    console.log("Asking Server to send takeoff command to Ar Drone");
                    socket.emit('event',{name:"takeoff"});
                });
                $("#land").click(function(){
                    console.log("Asking Server to send takeoff command to Ar Drone");
                    socket.emit('event',{name:"land"});
                });
                $("#up").click(function(){
					clearTimeout(clearthread);
                	//if($("#selector").find("option:selected").attr('value')=='up'){
  						socket.emit('event',{name:"up",speed:$("#speed2").val(),duration:$("#slider").slider( "option", "value" )});
                	//}else{
                		//alert("please select correct one...!!!");
                		//return;
                	//}
					
                	clearthread=setTimeout(function(){
                		socket.emit('event',{name:"stop"});
                	},parseInt($("#slider").slider( "option", "value" ),10)*1000);
                	//setTimeout(socket.emit('event',{name:"up",speed:0},1000*parseInt($("#speed2").val(),10)));
                    //console.log("Asking Server to send spin command to Ar Drone");
                    
                    
                });
                $("#down").click(function(){
					clearTimeout(clearthread);
                	//if($("#selector").find("option:selected").attr('value')=='down'){
  						socket.emit('event',{name:"down",speed:$("#speed2").val(),duration:$("#slider").slider( "option", "value" )});
                	//}else{
                		//alert("please select correct one...!!!");
                		//return;
                	//}
					
                	clearthread=setTimeout(function(){
                		socket.emit('event',{name:"stop"});
                	},parseInt($("#slider").slider( "option", "value" ),10)*1000);
                    
                });
                $("#left").click(function(){
					clearTimeout(clearthread);
                  // if($("#selector").find("option:selected").attr('value')=='left'){
  						socket.emit('event',{name:"left",speed:$("#speed2").val(),duration:$("#slider").slider( "option", "value" )});
                	//}else{
                		//alert("please select correct one...!!!");
                		//return;
                	//}
					
                	clearthread=setTimeout(function(){
                		socket.emit('event',{name:"stop"});
                	},parseInt($("#slider").slider( "option", "value" ),10)*1000);
                   
                });
                $("#right").click(function(){
					clearTimeout(clearthread);
                   //if($("#selector").find("option:selected").attr('value')=='right'){
  						socket.emit('event',{name:"right",speed:$("#speed2").val(),duration:$("#slider").slider( "option", "value" )});
                	/*}else{
                		alert("please select correct one...!!!");
                		return;
                	}*/
					
                	clearthread=setTimeout(function(){
                		socket.emit('event',{name:"stop"});
                	},parseInt($("#slider").slider( "option", "value" ),10)*1000);
                });
                $("#front").click(function(){
					clearTimeout(clearthread);
                   //if($("#selector").find("option:selected").attr('value')=='front'){
  						socket.emit('event',{name:"front",speed:$("#speed2").val(),duration:$("#slider").slider( "option", "value" )});
                	/*}else{
                		alert("please select correct one...!!!");
                		return;
                	}*/
					
                	clearthread=setTimeout(function(){
                		socket.emit('event',{name:"stop"});
                	},parseInt($("#slider").slider( "option", "value" ),10)*1000);
                   
                });
                $("#back").click(function(){
						clearTimeout(clearthread);
                   // if($("#selector").find("option:selected").attr('value')=='back'){
  						socket.emit('event',{name:"back",speed:$("#speed2").val(),duration:$("#slider").slider( "option", "value" )});
                	/*}else{
                		alert("please select correct one...!!!");
                		return;
                	}*/
					
                	clearthread=setTimeout(function(){
                		socket.emit('event',{name:"stop"});
                	},parseInt($("#slider").slider( "option", "value" ),10)*1000);
                });
                $("#clockwise").click(function(){
					clearTimeout(clearthread);
                    //if($("#selector").find("option:selected").attr('value')=='clockwise'){
  						socket.emit('event',{name:"clockwise",speed:$("#speed2").val(),duration:$("#slider").slider( "option", "value" )});
                	/*}else{alert("please select correct one...!!!");
                		return;
                	}*/
					
                	clearthread=setTimeout(function(){
                		socket.emit('event',{name:"stop"});
                	},parseInt($("#slider").slider( "option", "value" ),10)*1000);
                });
                $("#counter-clockwise").click(function(){
					clearTimeout(clearthread);
                   //if($("#selector").find("option:selected").attr('value')=='counter-clockwise'){
  						socket.emit('event',{name:"counter-clockwise",speed:$("#speed2").val(),duration:$("#slider").slider( "option", "value" )});
                	/*}else{alert("please select correct one...!!!");
                		return;
                	}*/
					
                	clearthread=setTimeout(function(){
                		socket.emit('event',{name:"stop"});
                	},parseInt($("#slider").slider( "option", "value" ),10)*1000);
                });
                $("#recover").click(function(){
                    
                    
                    socket.emit('event',{name:"stop"});
                });
               

            }
