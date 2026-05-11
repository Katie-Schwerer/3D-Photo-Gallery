import * as THREE from 'three';
console.log(THREE)

// Scene
const scene = new THREE.scene(); // create a new scene

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
camera.position.z = 5; // move the camera away from the origin