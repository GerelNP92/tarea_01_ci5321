# Proyecto: Triángulo Equilátero con APIs Gráficas

**Estudiante:** Gerel Negreira Peruzzi  
**Carnet:** 09-11163

## Descripción
Implementación de un triángulo equilátero con degradado de colores utilizando tres APIs gráficas distintas que operan a diferentes niveles de abstracción:
- **WebGL 2**: API de bajo nivel
- **TWGL**: Librería helper para simplificar WebGL
- **Three.js**: API de alto nivel

## Especificaciones del Triángulo
- **Forma**: Triángulo equilátero
- **Colores**: 
  - Vértice inferior izquierdo: Verde (#00ff00)
  - Vértice inferior derecho: Azul (#0000ff)
  - Vértice superior: Rojo (#ff0000)
- **Coordenadas de vértices**:
  - (-0.50, -0.50)
  - (0.50, -0.50)
  - (0.00, 0.87)
- **Fondo**: Oscuro pero no negro
- **Degradado**: Suave entre los vértices de colores

## Requisitos Previos
- Node.js (versión 16 o superior)
- npm (viene con Node.js)

## Instalación

1. Descargar o clonar este proyecto

2. Abrir una terminal en la carpeta del proyecto

3. Instalar las dependencias:
```bash
npm install
```

## Ejecución

Para iniciar el servidor de desarrollo:
```bash
npm run dev
```

Esto abrirá el proyecto en tu navegador (generalmente en `http://localhost:5173`).

Puedes cambiar entre las diferentes implementaciones haciendo clic en los botones:
- **WebGL 2**: Implementación pura sin librerías adicionales
- **TWGL**: Usando la librería TWGL para simplificar el código
- **Three.js**: Usando la librería de alto nivel Three.js

## Estructura del Proyecto

```
proyecto-triangulo/
├── src/
│   ├── webgl2.ts       # Implementación con WebGL 2 puro
│   ├── twgl.ts         # Implementación con TWGL
│   └── threejs.ts      # Implementación con Three.js
├── index.html          # Página principal
├── package.json        # Dependencias del proyecto
├── tsconfig.json       # Configuración de TypeScript
└── README.md          # Este archivo
```

## Tecnologías Utilizadas
- TypeScript
- WebGL 2
- TWGL.js
- Three.js
- Vite (bundler y servidor de desarrollo)

## Notas Adicionales
- Todas las implementaciones producen el mismo resultado visual
- El código está comentado para facilitar su comprensión
- Cada implementación demuestra un nivel diferente de abstracción de las APIs gráficas

## Autor
Proyecto desarrollado como parte del curso de Gráficos por Computadora