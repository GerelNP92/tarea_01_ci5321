export function init() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const gl = canvas.getContext('webgl2');

  if (!gl) {
    console.error('WebGL 2 not available');
    throw new Error('WebGL 2 required');
  }

  gl.viewport(0, 0, canvas.width, canvas.height);

  // Vertex shader: procesa cada vértice del triángulo
  const vertexShaderSource = `#version 300 es
in vec2 position;
in vec3 color;
out vec3 vertexColor;

void main() {
  gl_Position = vec4(position, 0.0, 1.0);
  vertexColor = color;
}
`;

  // Fragment shader: procesa cada pixel del triángulo
  const fragmentShaderSource = `#version 300 es
precision highp float;
in vec3 vertexColor;
out vec4 fragColor;

void main() {
  fragColor = vec4(vertexColor, 1.0);
}
`;

  // Compila un shader desde código fuente
  function compileShader(gl: WebGL2RenderingContext, type: number, source: string): WebGLShader {
    const shader = gl.createShader(type);
    if (!shader) throw new Error('Failed to create shader');
    
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      throw new Error('Shader compilation failed');
    }
    
    return shader;
  }

  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

  // Crea y enlaza el programa de shaders
  const program = gl.createProgram();
  if (!program) throw new Error('Failed to create program');

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(program));
    throw new Error('Program link failed');
  }

  gl.useProgram(program);

  // Coordenadas de los vértices del triángulo equilátero
  const vertices = new Float32Array([
    -0.50, -0.50,
     0.50, -0.50,
     0.00,  0.87
  ]);

  // Colores RGB para cada vértice
  const colors = new Float32Array([
    0.0, 1.0, 0.0,
    0.0, 0.0, 1.0,
    1.0, 0.0, 0.0
  ]);

  // Crea VAO para almacenar la configuración de atributos
  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);

  // Buffer de posiciones
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  const positionLocation = gl.getAttribLocation(program, 'position');
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

  // Buffer de colores
  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);

  const colorLocation = gl.getAttribLocation(program, 'color');
  gl.enableVertexAttribArray(colorLocation);
  gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 0, 0);

  // Renderiza el triángulo
  gl.clearColor(0.1, 0.1, 0.1, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
  
  gl.bindVertexArray(null);
}

// Limpia recursos de WebGL al cambiar de implementación
export function cleanup() {
  // El canvas será reemplazado, no necesita cleanup explícito
}ram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Error enlazando programa:', gl.getProgramInfoLog(program));
    throw new Error('Error en enlace de programa');
  }

  gl.useProgram(program);

  // Vértices del triángulo equilátero
  // Valores según especificación: -0.50, 0.50, 0.87
  const vertices = new Float32Array([
    -0.50, -0.50,  // Vértice inferior izquierdo
     0.50, -0.50,  // Vértice inferior derecho
     0.00,  0.87   // Vértice superior
  ]);

  // Colores en RGB normalizado
  // Verde: #00ff00, Azul: #0000ff, Rojo: #ff0000
  const colors = new Float32Array([
    0.0, 1.0, 0.0,  // Verde (inferior izquierdo)
    0.0, 0.0, 1.0,  // Azul (inferior derecho)
    1.0, 0.0, 0.0   // Rojo (superior)
  ]);

  // Buffer de posiciones
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  const positionLocation = gl.getAttribLocation(program, 'position');
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

  // Buffer de colores
  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);

  const colorLocation = gl.getAttribLocation(program, 'color');
  gl.enableVertexAttribArray(colorLocation);
  gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 0, 0);

  // Limpiar y renderizar
  gl.clearColor(0.1, 0.1, 0.1, 1.0); // Fondo oscuro pero no negro
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}

export function cleanup() {
  // Cleanup si es necesario
}
