console.log("hello this is new code");
import * as THREE from "three";
console.log(THREE);

const canvas = document.querySelector("#canvas");
// SCENE
const scene = new THREE.Scene();
// geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
// material
const material = new THREE.MeshBasicMaterial({
  //   wireframe: true,
  color: 0xff0000,
});

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);
const sizes = {
  width: 800,
  height: 600,
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
scene.add(camera);
camera.position.z = 10;
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
