import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

console.log("Three.js is running!");

// Get the existing canvas
const canvas = document.getElementById("app");

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75, // FOV
  window.innerWidth / window.innerHeight, // aspect
  0.1, // near
  1000, // far
);
camera.position.z = 10;

// Renderer – use existing canvas
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
// No appendChild needed anymore

// Cube
const geometry = new THREE.BoxGeometry(2, 2, 2, 100, 10, 10);
const material = new THREE.MeshStandardMaterial({
  color: 0xff6b6b,
  metalness: 0.1,
  roughness: 0.7,
});
const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshStandardMaterial({
    color: 0xff6b6b,
    metalness: 0.1,
    roughness: 0.7,
  }),
);
scene.add(cube1);
cube1.position.x = -3;
const geo2 = new THREE.TorusGeometry();
const edges = new THREE.Mesh(geo2, material);
scene.add(edges);
edges.position.x = 4;

// cube1.position.y = 2;

// Lighting (required for MeshStandardMaterial)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Handle resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Reordering the mesh
cube1.rotation.reorder("YXZ");
// Animation loop
function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
  // Rotate cube
  /*
   */
  // cube1.rotation.y += 0.01;
  // cube1.rotation.y += 0.015;
}

animate();
// cube.scale.x = 2;
// cube.scale.y = 2;
// cube.scale.z = 4;
// console.log(cube.position.length());
const controls = new OrbitControls(camera, renderer.domElement);

controls.update();
// axes helper
const axesHelper = new THREE.AxesHelper(10, 10, 10);
// scene.add(axesHelper);
if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    renderer.dispose();
    // canvas is static in HTML → no removeChild needed
  });
}
cube1.scale.x = 2;
console.log(
  "distance between cube and camera is:",
  cube1.position.distanceTo(camera.position),
);
