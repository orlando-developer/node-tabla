const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salidaTxt = ""; // 👈 ESCUDO 1: Para guardar en el archivo (Texto limpio)
    let salidaConsola = ""; // 👈 ESCUDO 2: Para mostrar en consola (Con colores)

    for (let i = 1; i <= hasta; i++) {
      // Almacenamos el texto plano sin alterar para el archivo físico
      salidaTxt += `${base} x ${i} = ${base * i}\n`;

      // Almacenamos la versión con esteroides visuales para la consola
      salidaConsola += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
    }

    if (listar) {
      console.log("======================".green);
      console.log("     Tabla del: ".green, colors.blue(base));
      console.log("======================".green);
      console.log(salidaConsola); // 👈 Imprimimos la que tiene colores
    }

    // Guardamos estrictamente la versión limpia para que el .txt sea perfecto
    await fs.promises.writeFile(`./salida/tabla-${base}.txt`, salidaTxt);

    return `./tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
