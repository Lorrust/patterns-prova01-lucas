// Classes concretas
class DebitCard {
  pay(type, amount) {
    console.log(`Pagando com ${type} no valor de R$ ${amount}`);
  }
}

class CreditCard {
  pay(type, amount) {
    console.log(`Pagando com ${type} no valor de R$ ${amount}`);
  }
}

// Usando Factory Method
class CardFactory {
  static types = {
    débito: DebitCard,
    crédito: CreditCard,
  };

  static createCard(type) {
    const CardClass = this.types[type];
    if (!CardClass) {
      throw new Error("Tipo de cartão ainda não suportado");
    }
    return new CardClass();
  }
}

// Código do cliente
function main() {
  const cards = ["débito", "crédito"];
  try {
    cards.forEach((type) => {
      const card = CardFactory.createCard(type);
      card.pay(`${type}`, "R$ 500,00");
    });
  } catch (err) {
    console.error("Erro ao processar...", err.message);
  }
}

main();
