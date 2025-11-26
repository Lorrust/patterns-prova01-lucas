// SOLID - O: Princípio Aberto-Fechado

class Desconto {
  aplicar(valor) {
    return valor;
  }
}

class DescontoPremium extends Desconto {
  aplicar(valor) {
    return valor * 0.8;
  }
}

class DescontoVip extends Desconto {
  aplicar(valor) {
    return valor * 0.7;
  }
}

class DescontoParceiro extends Desconto {
  aplicar(valor) {
    return valor * 0.5;
  }
}

class Cliente {
  constructor(nome, tipoDesconto) {
    this.nome = nome;
    this.tipoDesconto = tipoDesconto;
  }
}

class CalculadoraDeDesconto {
  calcular(cliente, valor) {
    return cliente.tipoDesconto.aplicar(valor);
  }
}

const calc = new CalculadoraDeDesconto();
const clientePremium = new Cliente("Lucas", new DescontoPremium());
const clienteVip = new Cliente("Jean", new DescontoVip());
const clienteNormal = new Cliente("Matheus", new Desconto());

console.log("Premium:", calc.calcular(clientePremium, 100));
console.log("VIP:", calc.calcular(clienteVip, 100));
console.log("Normal:", calc.calcular(clienteNormal, 100));
