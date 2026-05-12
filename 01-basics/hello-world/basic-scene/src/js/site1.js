console.log("hello this is new code");
import * as THREE from "three";
console.log(THREE);

const canvas = document.querySelector("#canvas");
// SCENE
const scene = new THREE.Scene();
// geometry
const geometry = new THREE.CapsuleGeometry(0.7, 2.8, 10, 24);
const material = new THREE.MeshBasicMaterial({
    color: "#226CA8",
    // wireframe: true
});
const capsule = new THREE.Mesh(geometry, material);
scene.add(capsule);
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
scene.add(camera);
camera.position.z = 7;
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
