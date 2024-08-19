   // IIFE
const registroDeAnimales = (() => {
  // arreglo que almacena los animales registrados
  const animalesRegistrados = [];

  // función asíncrona  que llama a la API
  async function obtenerDatosJson(nombre) {
    try {
      const respuesta = await fetch("animales.json");
      const data = await respuesta.json(); 
      const animalData = data.animales.find(animal => animal.name === nombre);
      return animalData;
    } catch (error) {
      console.error('Error al obtener los datos del animal:', error);
    }
  }

  function agregarAnimal(animal) {
    animalesRegistrados.push(animal);
  }
   // funcion para la cards
  function mostrarCardsAnimales(animales, idElemento) {

    const cards = animales.map(animal => {
      console.log(animal )
      return `
      <div class="card my-2">
      <img src="./assets/imgs/${animal.img}" alt="${animal.nombre}" class="card-img-top">
      <div class="card-body text-center">
        <i class="fa fa-volume-up sonido" onclick="document.getElementById('${animal.nombre}-audio').play()"></i>
        <audio id="${animal.nombre}-audio" src="./assets/sounds/${animal.sonido}" type="audio/mpeg"></audio>
      </div>
    </div>
      `;
    }).join('');

    document.getElementById(idElemento).innerHTML = cards;
  }
  // limpiar los campos 
  function limpiarFormulario() {
    document.getElementById('preview').innerHTML = '';
    document.getElementById('animal').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('comentarios').value = '';
  }

  return {
    obtenerDatosJson,
    agregarAnimal,
    mostrarCardsAnimales,
    limpiarFormulario,
    animalesRegistrados
  };
})();

export { registroDeAnimales };
