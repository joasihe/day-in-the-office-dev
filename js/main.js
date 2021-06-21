var canvas = document.getElementById("canvas");
var engine = new BABYLON.Engine(canvas, true);

// here the doc for Load function: //doc.babylonjs.com/typedoc/classes/babylon.sceneloader#load
BABYLON.SceneLoader.Load("", "assets/bierensroom.babylon", engine, function (scene) {



  // Parameters : name, position, scene
  var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 1, 10), scene);

  // Targets the camera to a particular position. In this case the scene origin
  camera.setTarget(BABYLON.Vector3.Zero());

  // Attach the camera to the canvas
  camera.applyGravity = false;
  camera.ellipsoid = new BABYLON.Vector3(.4, .8, .4);
  camera.checkCollisions = true;
  camera.attachControl(canvas, true); 
  camera.speed = 0.6;

  //Set the ellipsoid around the camera (e.g. your player's size)
  // camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
  // scene.clearColor = new BABYLON.Color3(1, 1, 1);
  // scene.ambientColor = new BABYLON.Color3.White();


  var light = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(5, 10, 15), scene);

  engine.runRenderLoop(function () {
    camera.position.y=1 
    scene.render();
  });

  window.addEventListener("resize", function () {
    engine.resize();
  });
});
