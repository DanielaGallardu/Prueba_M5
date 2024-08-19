import { Aguila } from "../Clases/Aguila.mjs";
import { Leon } from "../Clases/Leon.mjs";
import { Lobo } from "../Clases/Lobo.mjs";
import { Oso } from "../Clases/Oso.mjs";
import { Serpiente } from "../Clases/Serpiente.mjs";
import { mostrarDetalleAnimal } from "../Modulo/modal.mjs";
import { registroDeAnimales } from "../Modulo/registro.mjs";

const instanciadorAnimales = { Aguila, Leon, Lobo, Oso, Serpiente };

document.getElementById('btnRegistrar').addEventListener('click', async () => {
  // captura de valores ingresados 
  const nombreHTML = document.getElementById('animal');
  const edadHTML = document.getElementById('edad');
  const comentariosHTML = document.getElementById('comentarios');
  // llamar a la funcion que llama a la Api
  const { imagen, sonido } = await registroDeAnimales.obtenerDatosJson(nombreHTML.value);
  // validacion del formulario
  if (!nombreHTML.value || !edadHTML.value || !comentariosHTML.value) {
    alert('Por favor, complete todos los campos.');
    return;
  }
  // instanciardor 
  const ClaseAnimal = instanciadorAnimales[nombreHTML.value];
  let animal = new ClaseAnimal(
    nombreHTML.value, 
    edadHTML.value,
    imagen,
    comentariosHTML.value,
    sonido
  );

  registroDeAnimales.agregarAnimal(animal);
  registroDeAnimales.mostrarCardsAnimales(registroDeAnimales.animalesRegistrados, 'Animales');
  registroDeAnimales.limpiarFormulario();

  // mostrar el modal al hacer clic en la imagen del animal
  document.querySelectorAll('#Animales .card img').forEach(img => {
    img.addEventListener('click', () => {
      const animal = registroDeAnimales.animalesRegistrados.find(a => a.nombre === img.alt);
      mostrarDetalleAnimal(animal);
    });
  });
});
  //  manejar el cambio en la selección de animales en el formulario
document.getElementById('animal').addEventListener("change", async (event) => {
 
  // Obtener la imagen del animal seleccionado
  const { imagen } = await registroDeAnimales.obtenerDatosJson(event.target.value);
  const nombreAnimal = event.target.value;
  
  //previsualización del animal seleccionado 
  const preview = document.getElementById('preview');
  preview.innerHTML = '';

  const img = document.createElement('img');
  img.src = `../assets/imgs/${imagen}`;
  img.className = "img-fluid rounded";
  img.alt = nombreAnimal;
  preview.appendChild(img);
});
