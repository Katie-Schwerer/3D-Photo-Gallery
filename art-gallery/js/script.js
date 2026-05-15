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
ambientLight.position.set(camera.position.x, camera.position.y, camera.position.z); // light follows camera
scene.add(ambientLight);

// Directional Light
let sunLight =  new THREE.DirectionalLight(0xdddddd, 1.0); // color, intensity
sunLight.position.y = 15; // position the light above the scene
scene.add(sunLight);

let geometry = new THREE.BoxGeometry(1, 1, 1); // BoxGeometry is the shape of the object
let material = new THREE.MeshBasicMaterial({ color: 0xff0000}); //  color of the object
let cube = new THREE.Mesh(geometry, material);

scene.add(cube); // add the mesh to the scene

// Controls
// Event Listener for when we press the keys
document.addEventListener('keydown', onKeyDown, false);

function onKeyDown(event) {
    let keycode = event.which;

    switch (keycode) {
        // right arrow key
        case 39:
            camera.translateX(-0.05);
            break;
        // left arrow key
        case 37:
            camera.translateX(0.05);
            break;
        // up arrow key
        case 38:
            camera.translateY(-0.05);
            break;
        // down arrow key
        case 40:
            camera.translateY(0.05);
            break;
        default:
            break;
    }
}

let renderLoop = function () {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera); // render the scene from the perspective of the camera

    requestAnimationFrame(renderLoop); // call renderLoop again on the next frame
}

renderLoop();