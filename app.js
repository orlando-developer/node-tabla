const { crearArchivo } = require("./helpers/multiplicar");
const colors = require("colors");
const argv = require("./config/yargs");

console.clear();

crearArchivo(argv.base, argv.l, argv.h)
  .then((nombreArchivo) =>
    console.log(nombreArchivo.rainbow, "creado exitosamente"),
  )
  .catch((err) => console.log(err));
