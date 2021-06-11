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



  // code sander

    // scene.debugLayer.show();

    // ================================================= OBJECT KLIKBAAR  =================================================

    // zorgen dat de pagina niet refresht na het aanpassen van de visibility
      var xFullPath = window.location.pathname;
      var xPageName = xFullPath.substring(xFullPath.lastIndexOf("/") + 1);
    

    scene.onPointerUp = (evt, pickinfo) => {
      if (pickinfo.hit)
        // alert("dit is een: " + pickinfo.pickedMesh.name);
        var objectInfo = pickinfo.pickedMesh.name;
          document.getElementById("HUD").innerHTML = "Naam object: " + objectInfo;

          if (xPageName !== "index.html")
          {
            window.location.replace("../index.html");
          }

          var sword = scene.getMeshByName("Sword");

        if (objectInfo == "Cylinder.001"){
          document.getElementById('Zwaard').style.visibility = 'visible';
        } else {
          document.getElementById('Zwaard').style.visibility = 'hidden';
        }

        if (objectInfo == "Cube 2"){
          document.getElementById('Stoel').style.visibility = 'visible';
        } else {
          document.getElementById('Stoel').style.visibility = 'hidden';
        }
        if (objectInfo == "Sphere.001"){
          document.getElementById('Kom').style.visibility = 'visible';
        } else {
          document.getElementById('Kom').style.visibility = 'hidden';
        }
        if (objectInfo == "Cube.001"){
          document.getElementById('Tafel').style.visibility = 'visible';
        } else {
          document.getElementById('Tafel').style.visibility = 'hidden';
        }
    };	


     // ========================= clickable BABYLONJS OBJECT   ========================= =========================
            
     var urlList = [
      "https://fontys.nl/Studeren/Aanmelden/Uitschrijven.htm",
      "https://fontys.nl/Studeren/Aanmelden/Uitschrijven.htm",
      "https://fontys.nl/Studeren/Aanmelden/Uitschrijven.htm",
  ];

  var textures = [
      "https://thumbs.dreamstime.com/b/seamless-football-pattern-soccer-ball-texture-banner-186742659.jpg",
      "https://i.imgur.com/Pox1X97.png",
      "https://upload.wikimedia.org/wikipedia/commons/1/10/IC_engine.JPG"

  ];

  // this is function that is called on each cylinder pick
  var pickCylinder = function(meshEvent) {
      var pickedMesh = meshEvent.meshUnderPointer; 

      window.open(urlList[Number(pickedMesh.name)]);
  }


    var pikCylinder = function() {
      window.open('https://thumbs.dreamstime.com/b/seamless-football-pattern-soccer-ball-texture-banner-186742659.jpg');
  }

  // cylinder generator with actionManagers on each
  var angle = 0;
  for (var index = 0; index < 3; index++) {
      var cylinder  = BABYLON.MeshBuilder.CreateSphere(index, {radius: 0.5, height: 0.2}, scene);
      cylinder.position.y =  Math.sin(angle) +1;
      cylinder.position.x =  Math.cos(angle) -4;

      cylinder.material = new BABYLON.StandardMaterial("mat_"+ index, scene);
      cylinder.material.diffuseTexture = new BABYLON.Texture(textures[index]);
      // add actionManager on each cyl
      cylinder.actionManager = new BABYLON.ActionManager(scene);
      // register 'pickCylinder' as the handler function for cylinder picking action.
      cylinder.actionManager.registerAction(
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, pickCylinder)
      );

      logo.actionManager.registerAction(
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, pickCylinder)
      );

      angle += 2 * Math.PI / 3;
  } 
  }
);
