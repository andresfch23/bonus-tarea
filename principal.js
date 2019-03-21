const datos = require('./datos');
const express = require('express');
const app = express();

const { opciones } = datos;

const argv = require('yargs')
.command('inscribir', 'inscripcion a uno de los cursos', opciones)
.argv;

const { cursos, mostrarCursos } = datos;
const { id, nombreAlumno, cedula } = argv;

if (id && nombreAlumno && cedula) {
  const curso = cursos.find(curso => id === curso.id);
  
  if (curso) {
    const { nombre, duracion, valor } = curso;

    const text = 
    `El estudiante ${nombreAlumno} con cedula ${cedula},
    se ha matriculado en el Curso de ${nombre}
    con duracion de ${duracion} y un valor de ${valor}`;

    app.get('/', function(req, res) {
      res.send(text)
    });

    app.listen(3000)

    console.log(`El estudiante se ha inscrito con exito , mira en el navegador en localhost:3000`);
  } else {
    console.log("Ha ingresado un id que no pertenece a ningun curso , porfavor mire la lista de abajo para mas detalles:")
    mostrarCursos(cursos, true)
  }
} else {
  mostrarCursos(cursos);
}
 