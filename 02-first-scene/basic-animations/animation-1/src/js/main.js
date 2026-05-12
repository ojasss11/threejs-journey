import * as THREE from "three";

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
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial({
  color: 0xff6b6b,
  metalness: 0.1,
  roughness: 0.7,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

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

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.015;
  renderer.render(scene, camera);
}
renderer.render(scene, camera);

// animate();

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    renderer.dispose();
    // canvas is static in HTML → no removeChild needed
  });
}
const time = Date.now();
const animate2 = () => {
  renderer.render(scene, camera);
  //   cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  window.requestAnimationFrame(animate2);
};
// animate2();

const animate3 = () => {
  renderer.render(scene, camera);
  cube.rotation.z += 0.001;
  window.requestAnimationFrame(animate3);
};
// animate3();

const ticker = () => {
  console.log("tickling");
  window.requestAnimationFrame(ticker);
};
// ticker();
const clock = new THREE.Clock();
// cube.rotation.order = "YXZ";
const tickNew = () => {
  const elapsedTime = clock.getElapsedTime();
  console.log(elapsedTime);

  cube.rotation.y = elapsedTime * 2;
  window.requestAnimationFrame(tickNew);
  renderer.render(scene, camera);
};
tickNew();
