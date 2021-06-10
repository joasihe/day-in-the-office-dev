var canvas = document.getElementById("canvas");
var engine = new BABYLON.Engine(canvas, true);

// here the doc for Load function: //doc.babylonjs.com/typedoc/classes/babylon.sceneloader#load
BABYLON.SceneLoader.Load("", "assets/room.babylon", engine, function (scene) {
  // Need a free camera for collisions
  var camera = new BABYLON.UniversalCamera(
    "FreeCamera",
    new BABYLON.Vector3(0, 10, 0),
    scene
  );
  camera.attachControl(canvas, true);
  camera.speed = 0.2;

  //Set gravity for the scene (G force like, on Y-axis)
  scene.gravity = new BABYLON.Vector3(0, -0.9, 0);

  // Enable Collisions
  scene.collisionsEnabled = true;

  //Then apply collisions and gravity to the active camera
  camera.checkCollisions = true;
  camera.applyGravity = true;

  //Set the ellipsoid around the camera (e.g. your player's size)
  camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
  scene.clearColor = new BABYLON.Color3(1, 1, 1);
  scene.ambientColor = new BABYLON.Color3.White();

  var light = new BABYLON.HemisphericLight(
    "hemiLight",
    new BABYLON.Vector3(0, 0, 100),
    scene
  );

  // var dirLight = new BABYLON.DirectionalLight(
  //   "dirLight",
  //   new BABYLON.Vector3(1, -1, 1),
  //   scene
  // );
  // dirLight.diffuse = new BABYLON.Color3(1, 1, 0.98);
  // dirLight.position = new BABYLON.Vector3(-100, 100, -100);

  engine.runRenderLoop(function () {
    scene.render();
  });

  window.addEventListener("resize", function () {
    engine.resize();
  });
});
