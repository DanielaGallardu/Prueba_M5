import { Animal } from "./animal.mjs";

class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido)
  }
  Rugir() {
    return 'Grrrr 🦁'
  }
}
export { Leon }
