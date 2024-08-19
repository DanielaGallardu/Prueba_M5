// Clase constructora
class Animal {
  #nombre;
  #edad;
  #img;
  #comentarios;
  #sonido;

  constructor(nombre, edad, img, comentarios, sonido) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#img = img;
    this.#comentarios = comentarios;
    this.#sonido = sonido;
  }
// Getters y Setters
  get nombre() {
    return this.#nombre;
  }

  get edad() {
    return this.#edad;
  }

  get img() {
    return this.#img;
  }

  get comentarios() {
    return this.#comentarios;
  }

  get sonido() {
    return this.#sonido;
  }

  set comentarios(comentarios) {
    this.#comentarios = comentarios;
  }
}
export { Animal }