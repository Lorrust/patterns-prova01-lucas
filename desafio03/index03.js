// GRASP - P: Princípio do Polimorfimo

class Forma {
  area() {
    throw new Error("Método area() deve ser implementado na subclasse.");
  }
}

class Circulo extends Forma {
  constructor(raio) {
    super();
    this.raio = raio;
  }

  area() {
    return Math.PI * this.raio * this.raio;
  }
}

class Retangulo extends Forma {
  constructor(largura, altura) {
    super();
    this.largura = largura;
    this.altura = altura;
  }

  area() {
    return this.largura * this.altura;
  }
}

class Triangulo extends Forma {
  constructor(base, altura) {
    super();
    this.base = base;
    this.altura = altura;
  }

  area() {
    return (this.base * this.altura) / 2;
  }
}

function imprimirArea(forma) {
  console.log("Área:", forma.area());
}

imprimirArea(new Circulo(5));
imprimirArea(new Retangulo(4, 3));
imprimirArea(new Triangulo(6, 2));
