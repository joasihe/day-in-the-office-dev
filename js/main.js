var canvas = document.getElementById("canvas");
var engine = new BABYLON.Engine(canvas, true);

// here the doc for Load function: //doc.babylonjs.com/typedoc/classes/babylon.sceneloader#load
BABYLON.SceneLoader.Load(
  "",
  "assets/sanderroom.babylon",
  engine,
  function (scene) {
    // Need a free camera for collisions
    var camera = new BABYLON.UniversalCamera(
      "FreeCamera",
      new BABYLON.Vector3(-40, 10, 10),
      scene
    );
    camera.attachControl(canvas, true);
    camera.speed = 0.6;

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
      new BABYLON.Vector3(1, 10, 15),
      scene
    );

    engine.runRenderLoop(function () {
      camera.position.y = 1;
      scene.render();
    });

    window.addEventListener("resize", function () {
      engine.resize();
    });

    // scene.debugLayer.show();

    // ================================================= OBJECT KLIKBAAR  =================================================

    // zorgen dat de pagina niet refresht na het aanpassen van de visibility
    var xFullPath = window.location.pathname;
    var xPageName = xFullPath.substring(xFullPath.lastIndexOf("/") + 1);

    scene.onPointerUp = (evt, pickinfo) => {
      if (pickinfo.hit) var objectInfo = pickinfo.pickedMesh.name;
      document.getElementById("HUD").innerHTML = "Naam object: " + objectInfo;

      if (xPageName !== "index.html") {
        window.location.replace("../index.html");
      }

      // zwaard = =fully klikbaar (behalve 'Cube' en 'zwaard1')
      if (
        objectInfo == "zwaard1" ||
        objectInfo == "zwaard2" ||
        objectInfo == "Icosahedron" ||
        objectInfo == "Sphere" ||
        objectInfo == "Cube"
      ) {
        $("#Sphere").modal();
      } else {
      }

      // volleybal  = fully klikbaar
      if (objectInfo == "volleybal.001") {
        $("#volleybal").modal();
      } else {
      }

      // wereldbol  = fully klikbaar
      if (
        objectInfo == "wereldbol.001" ||
        objectInfo == "Cylinder 3" ||
        objectInfo == "Cylinder 4" ||
        objectInfo == "Torus"
      ) {
        $("#Torus").modal();
      } else {
      }

      // schilderij = fully klikbaar
      if (
        objectInfo == "Group_002" ||
        objectInfo == "Group_004" ||
        objectInfo == "schilderij.001" ||
        objectInfo == "Group_001" ||
        objectInfo == "Group_013" ||
        objectInfo == "Group_003"
      ) {
        $("#schilderij").modal();
      } else {
      }

      // prullenbak = fullt klikbaar
      if (objectInfo == "prul1" || objectInfo == "prul2") {
        $("#bin").modal();
      } else {
      }

      // glazen bol = fully klikbaar
      if (
        objectInfo == "klantreview.001" ||
        objectInfo == "klantreview2" ||
        objectInfo == "Cube.001" ||
        objectInfo == "Cube.002" ||
        objectInfo == "Cube.003" ||
        objectInfo == "Cube.004"
      ) {
        $("#glasbol").modal();
      } else {
      }

      // magic formula = fully klikbaar
      if (
        objectInfo == "Flask_Cone" ||
        objectInfo == "Beaker_Cylinder" ||
        objectInfo == "lab2"
      ) {
        $("#lab2").modal();
      } else {
      }

      // dossier =  fully klikbaar
      if (
        objectInfo == "group_0_16768282" ||
        objectInfo == "group_0_15277357.001" ||
        objectInfo == "bierensdocument.001" ||
        objectInfo == "bierensdocument2"
      ) {
        $("#bierensdocument").modal();
      } else {
      }

      // boek = fully klikbaar
      if (
        objectInfo == "group_0_14860437" ||
        objectInfo == "group_0_16448250" ||
        objectInfo == "bierensboek" ||
        objectInfo == "group_0_16766720"
      ) {
        $("#bierensboek").modal();
      } else {
      }

      // cola + burger = fully klikbaar
      if (
        objectInfo == "cola" ||
        objectInfo == "lettuce" ||
        objectInfo == "meat" ||
        objectInfo == "ketchup" ||
        objectInfo == "botton BUN" ||
        objectInfo == "burger.001"
      ) {
        $("#burger").modal();
      } else {
      }
    };
  }
);

//pop up fade - neel
//
