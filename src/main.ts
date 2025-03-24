import { WebGLEngine } from "kgengine/Engine/VisualEngineConfigs/WebGLEngine.js"
import { DefaultCameraSettings } from "kgengine/Engine/Cameras/DefaultCameraSettings.js";
import { CreateScene } from "kgengine/Engine/OtherScripts/CreateScene.js";

import { BoxGeometry } from "kgengine/Engine/Objects/Geometry/BoxGeometry.js";
import { BasicMaterial } from "kgengine/Engine/Objects/Materials/BasicMaterial.js";

import CustomObject from "kgengine/Engine/Objects/Snippets/CustomObject.js";


const scene = new CreateScene();
const camera = DefaultCameraSettings({ x: 1, y: 1, z: 2 });

const renderer = WebGLEngine();

const cube = CustomObject(BoxGeometry(), BasicMaterial({ color: 0x00022 }));
camera.lookAt(cube.position);

document.body.appendChild(renderer.domElement);

const animate = () => {
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;
  cube.rotation.x += 0.01;
  renderer.render(scene.scene, camera);
  requestAnimationFrame(animate);
};

animate();