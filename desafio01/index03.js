// Factory Pattern

class Bicicleta {
  move() {
    return "Pedalando a bicicleta no pátio da UNISATC";
  }
}

class Patinete {
  move() {
    return "Andando de patinete pelo estacionamento da UNISATC";
  }
}

class Onibus {
  move() {
    return "Andando de ônibus e chegando na UNISATC";
  }
}

class TransporteFactory {
  static types = {
    bicicleta: Bicicleta,
    patinete: Patinete,
    onibus: Onibus,
  };

  static createTransporte(type) {
    const TransporteClass = this.types[type];
    if (!TransporteClass) {
      throw new Error("Tipo de transporte inválido");
    }
    return new TransporteClass();
  }
}

const transportes = ["bicicleta", "patinete", "onibus"];
try {
  transportes.forEach((type) => {
    const transporte = TransporteFactory.createTransporte(type);
    console.log(transporte.move());
  });
} catch (err) {
  console.error("Erro ao criar transporte...", err.message);
}
