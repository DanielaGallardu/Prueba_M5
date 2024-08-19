// modal
function mostrarDetalleAnimal(animal) {
  // selecciono ventana modal
  const modal = document.getElementById('Modal');
  const modalBody = modal.querySelector('.modal-body');

  // limpiar contenido
  modalBody.innerHTML = '';

  // contenido  del modal
  const modalContent = `
  <h3 class="text-center mb-3">${animal.nombre}</h3>
    <img src="../assets/imgs/${animal.img}" class="img-fluid rounded mx-auto d-block" alt="${animal.nombre}">
    <p class="mt-3">${animal.edad}</p>
    <h5>Comentarios</h5>
    <p>${animal.comentarios}</p>
  `;

  //  contenido en el cuerpo del modal
  modalBody.innerHTML = modalContent;

  // mostrar el modal
  $(modal).modal('show');
}

export { mostrarDetalleAnimal };
