# 🧮 Node Tabla CLI

Una potente y robusta herramienta de línea de comandos (CLI) construida en Node.js para generar tablas de multiplicar personalizadas al instante. Diseñada con una arquitectura limpia, manejo defensivo de errores y salida de datos formateada tanto para la consola como para archivos físicos.

---

## 🚀 Características

- **Generación dinámica:** Crea tablas de cualquier base numérica y con el límite de multiplicación que desees.
- **Interfaz colorida:** Salida en terminal estilizada con colores interactivos para una legibilidad óptima.
- **Persistencia de datos:** Exporta automáticamente las tablas generadas a archivos de texto limpio (`.txt`) sin ensuciar el contenido con códigos ANSI.
- **Validación estricta:** Blindaje de argumentos con Yargs para evitar ingresos de datos corruptos o `NaN`.

---

## 📦 Tecnologías Utilizadas

* **Entorno de ejecución:** [Node.js](https://nodejs.org/) (CommonJS)
* **Procesamiento de argumentos:** [Yargs v16.2.0](https://www.npmjs.com/package/yargs)
* **Diseño de interfaz:** [Colors.js](https://www.npmjs.com/package/colors)
* **Gestor de paquetes:** [pnpm](https://pnpm.io/)

---

## 🛠️ Instalación y Configuración

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio:**
   ```bash
   git clone git@github.com:orlando-developer/node-tabla.git
   cd node-tabla
