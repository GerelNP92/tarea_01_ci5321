// Implementación con Three.js
// Instalar: npm install three @types/three
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ 
  canvas: document.getElementById('canvas') as HTMLCanvasElement,
  antialias: true 
});
renderer.setSize(800, 600);
renderer.setClearColor(0x1a1a1a, 1.0); // Fondo oscuro pero no negro

// Geometría del triángulo
const geometry = new THREE.BufferGeometry();

// Vértices del triángulo equilátero
// Coordenadas según especificación: -0.50, 0.50, 0.87
const vertices = new Float32Array([
  -0.50, -0.50, 0.0,  // Vértice inferior izquierdo
   0.50, -0.50, 0.0,  // Vértice inferior derecho
   0.00,  0.87, 0.0   // Vértice superior
]);

// Colores por vértice en RGB normalizado
const colors = new Float32Array([
  0.0, 1.0, 0.0,  // Verde - #00ff00
  0.0, 0.0, 1.0,  // Azul - #0000ff
  1.0, 0.0, 0.0   // Rojo - #ff0000
]);

geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

// Material con colores por vértice
const material = new THREE.MeshBasicMaterial({ 
  vertexColors: true,
  side: THREE.DoubleSide
});

const triangle = new THREE.Mesh(geometry, material);
scene.add(triangle);

// Renderizar
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();