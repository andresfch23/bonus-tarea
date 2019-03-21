const cursos = [
  {
    id: 1,
    nombre: "Node JS",
    duracion: "3 meses",
    valor: 250000
  },
  {
    id: 2,
    nombre: "React",
    duracion: "6 meses",
    valor: 500000
  },
  {
    id: 3,
    nombre: "Webpack",
    duracion: "4 meses",
    valor: 300000
  }
]

const opciones = {
  id: {
    demand: true,
    alias: 'i'
  },
  nombreAlumno : {
    demand: true,
    alias: 'n' 
  },
  cedula : {
    demand: true,
    alias: 'c' 
  }
}

const mostrarCursos = (cursos, interesado = false) => {
  let offset = 0;
  cursos.forEach(curso => {
    const { nombre, id, duracion, valor } = curso;
    const offsetDefault = interesado ? 0 : 2000;
    
    setTimeout(() => {
      console.log(`El curso llamado ${nombre} identificado con el numero ${id}, tiene una duracion de ${duracion} y un valor de ${valor} pesos`);
    }, offsetDefault + offset);

    offset += offsetDefault;
  })
}

module.exports = {
  cursos,
  mostrarCursos,
  opciones
};