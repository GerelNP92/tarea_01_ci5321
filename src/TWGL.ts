// Implementación con TWGL
// Instalar: npm install twgl.js @types/twgl.js
import * as twgl from 'twgl.js';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const gl = canvas.getContext('webgl2');

if (!gl) {
  throw new Error('WebGL 2 no disponible');
}

canvas.width = 800;
canvas.height = 600;

// Shaders
const vertexShaderSource = `#version 300 es
in vec2 position;
in vec3 color;
out vec3 vertexColor;

void main() {
  gl_Position = vec4(position, 0.0, 1.0);
  vertexColor = color;
}
`;

const fragmentShaderSource = `#version 300 es
precision highp float;
in vec3 vertexColor;
out vec4 fragColor;

void main() {
  fragColor = vec4(vertexColor, 1.0);
}
`;

// Crear programa con TWGL (simplifica la creación)
const programInfo = twgl.createProgramInfo(gl, [vertexShaderSource, fragmentShaderSource]);

// Datos del triángulo usando la estructura de TWGL
const arrays = {
  position: {
    numComponents: 2,
    data: [
      -0.50, -0.50,  // Verde (inferior izquierdo)
       0.50, -0.50,  // Azul (inferior derecho)
       0.00,  0.87   // Rojo (superior)
    ]
  },
  color: {
    numComponents: 3,
    data: [
      0.0, 1.0, 0.0,  // Verde - #00ff00
      0.0, 0.0, 1.0,  // Azul - #0000ff
      1.0, 0.0, 0.0   // Rojo - #ff0000
    ]
  }
};

// TWGL crea automáticamente los buffers y VAO
const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

// Configurar viewport y limpiar
gl.viewport(0, 0, canvas.width, canvas.height);
gl.clearColor(0.1, 0.1, 0.1, 1.0); // Fondo oscuro pero no negro
gl.clear(gl.COLOR_BUFFER_BIT);

// Renderizar (TWGL simplifica todo el proceso)
gl.useProgram(programInfo.program);
twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
twgl.drawBufferInfo(gl, bufferInfo);