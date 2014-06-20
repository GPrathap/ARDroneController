

var camera, scene, renderer;
var cameraControls, effectController;
var clock = new THREE.Clock();

var ground = true;
var circle1,plate1;

function fillScene() {
	scene = new THREE.Scene();
	scene.fog = new THREE.Fog( 0x808080, 2000, 4000 );

	
	var ambientLight = new THREE.AmbientLight( 0x222222 );

	var light = new THREE.DirectionalLight( 0xFFFFFF, 1.0 );
	light.position.set( 200, 400, 500 );
	
	var light2 = new THREE.DirectionalLight( 0xFFFFFF, 1.0 );
	light2.position.set( -500, 250, -200 );

	scene.add(ambientLight);
	scene.add(light);
	scene.add(light2);

	if (ground) {
		Coordinates.drawGround({size:10000});		
	}
	
	
	var robotBaseMaterial = new THREE.MeshPhongMaterial( { color: 0x6E23BB, specular: 0x6E23BB, shininess: 20 } );
	var robotForearmMaterial = new THREE.MeshPhongMaterial( { color: 0xF4C154, specular: 0xF4C154, shininess: 100 } );
	var robotUpperArmMaterial = new THREE.MeshPhongMaterial( { color: 0x95E4FB, specular: 0x95E4FB, shininess: 100 } );
	
	
	circle1 = new THREE.Object3D();
	var circleLength=40;
	addCircles(circle1,circleLength,robotBaseMaterial);
	circle1.position.y=circleLength*2;
	scene.add(circle1);	
	
	plate1 = new THREE.Object3D();
	var plateLength=40;
	addPlates(plate1,plateLength,robotForearmMaterial);
	plate1.position.y=circleLength/8;
	circle1.add(plate1);
	
	
}
function addPlates(part,plateLength,material){
	var cylinder = new THREE.Mesh( 
		new THREE.CylinderGeometry( 5, 5, 40, 32 ), material );
	cylinder.rotation.x = 90 * Math.PI/180;
	cylinder.position.x = plateLength+15;
	part.add( cylinder );
	var cylinder = new THREE.Mesh( 
		new THREE.CylinderGeometry( 5, 5, 40, 32 ), material );
	cylinder.rotation.x = 90 * Math.PI/180;
	cylinder.rotation.z = 90 * Math.PI/180;
	cylinder.position.x = plateLength+15;
	part.add(cylinder);

	//
	var cylinder = new THREE.Mesh( 
		new THREE.CylinderGeometry( 5, 5, 40, 32 ), material );
	cylinder.rotation.x = 90 * Math.PI/180;
	cylinder.position.x = -plateLength-15;
	part.add( cylinder );
	var cylinder = new THREE.Mesh( 
		new THREE.CylinderGeometry( 5, 5, 40, 32 ), material );
	cylinder.rotation.x = 90 * Math.PI/180;
	cylinder.rotation.z = 90 * Math.PI/180;
	cylinder.position.x = -plateLength-15;
	part.add( cylinder );

	//
	var cylinder = new THREE.Mesh( 
		new THREE.CylinderGeometry( 5, 5, 40, 32 ), material );
	cylinder.rotation.x = 90 * Math.PI/180;
	cylinder.position.z = -plateLength-15;
	part.add( cylinder );
	var cylinder = new THREE.Mesh( 
		new THREE.CylinderGeometry( 5, 5, 40, 32 ), material );
	cylinder.rotation.x = 90 * Math.PI/180;
	cylinder.rotation.z = 90 * Math.PI/180;
	cylinder.position.z = -plateLength-15;
	part.add( cylinder );
	//
	var cylinder = new THREE.Mesh( 
		new THREE.CylinderGeometry( 5, 5, 40, 32 ), material );
	cylinder.rotation.x = 90 * Math.PI/180;
	cylinder.position.z = plateLength+15;
	part.add( cylinder );
	var cylinder = new THREE.Mesh( 
		new THREE.CylinderGeometry( 5, 5, 40, 32 ), material );
	cylinder.rotation.x = 90 * Math.PI/180;
	cylinder.rotation.z = 90 * Math.PI/180;
	cylinder.position.z = plateLength+15;
	part.add( cylinder );

	
}
function addCircles(part,circleLength,material){
	var circle = new THREE.Mesh(
		new THREE.TorusGeometry(40,10,40,20,6.3), material );
	circle.position.x = circleLength+10;
	circle.rotation.x= 90 * Math.PI/180;
	part.add(circle );
	var circle = new THREE.Mesh(
		new THREE.TorusGeometry(40,10,40,20,6.3), material );
	circle.position.x = -circleLength-10;
	circle.rotation.x= 90 * Math.PI/180;
	part.add(circle );
	var circle = new THREE.Mesh(
		new THREE.TorusGeometry(40,10,40,20,6.3), material );
	circle.position.z = -circleLength-10;
	circle.rotation.x= 90 * Math.PI/180;
	part.add(circle );
	var circle = new THREE.Mesh(
		new THREE.TorusGeometry(40,10,40,20,6.3), material );
	circle.position.z = circleLength+10;
	circle.rotation.x= 90 * Math.PI/180;
	part.add(circle );
}

function init() {
	var canvasWidth = 500;
	var canvasHeight = 500;
	var canvasRatio = 1;

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.gammaInput = true;
	renderer.gammaOutput = true;
	renderer.setSize(canvasWidth, canvasHeight);
	renderer.setClearColorHex( 0xAAAAAA, 1.0 );

	//var container = document.getElementById('container');
	//container.appendChild( renderer.domElement );
	$("#canvasOne").append(renderer.domElement);
	//$("ArmCanvas").add
	// CAMERA
	camera = new THREE.PerspectiveCamera( 30, canvasRatio, 1, 10000 );
	camera.position.set( -510, 240, 100 );
	// CONTROLS
	cameraControls = new THREE.OrbitAndPanControls(camera, renderer.domElement);
	cameraControls.target.set(0,100,0);
	
	fillScene();

}

function animate() {
	window.requestAnimationFrame(animate);
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);

	
	renderer.render(scene, camera);
}
init();
animate();

