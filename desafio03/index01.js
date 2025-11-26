// SOLID - L: Princípio da Substituição de Liskov

class Animal {
  fazerSom() {
    throw new Error("Método 'fazerSom()' deve ser implementado.");
  }
}

class Cachorro extends Animal {
  fazerSom() {
    return "Au au!";
  }
}

class Gato extends Animal {
  fazerSom() {
    return "Miau!";
  }
}

function emitirSomDoAnimal(animal) {
  console.log(animal.fazerSom());
}

const dog = new Cachorro();
const cat = new Gato();

emitirSomDoAnimal(dog);
emitirSomDoAnimal(cat);
