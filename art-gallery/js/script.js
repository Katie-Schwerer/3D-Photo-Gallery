import * as THREE from 'three';
console.log(THREE)

// Scene
const scene = new THREE.Scene(); // create a new scene

/**
 * PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
 * fov — Camera frustum vertical field of view.
 * aspect — Camera frustum aspect ratio.
 * near — Camera frustum near plane.
 * far — Camera frustum far plane.
 */
const camera = new THREE.PerspectiveCamera(
    75, // field of view
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1, // near clipping plane
    1000 // far clipping plane
);

scene.add(camera);
camera.position.z = 5; // move the camera back units

// Renderer
const renderer = new THREE.WebGLRenderer({antialias: true}); // for smooth edges
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 1); // background color
document.body.appendChild(renderer.domElement); // Add the renderer to the HTML

// Light
// Ambient Light
let ambientLight = new THREE.AmbientLight(0x101010, 1.0); // color, intensity, distance, decoy
ambientLight.position = camera.position; // light follows camera
scene.add(ambientLight);

// Directional Light
let sunLight =  new THREE.DirectionalLight();