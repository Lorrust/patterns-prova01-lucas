// Adapter Pattern

class LegacyPaymentSystem {
  makePayment(amount) {
    console.log(`Pagando R$${amount} com sistema legado.`);
  }
}

class ModernPaymentAPI {
  process(amountInCents) {
    console.log(`Pagamento de R$${amountInCents / 100} via API moderna.`);
  }
}

class ModernPaymentAdapter {
  constructor(modernAPI) {
    this.modernAPI = modernAPI;
  }

  makePayment(amountInCents) {
    const amount = amountInCents * 100;
    this.modernAPI.process(amount);
  }
}

class PaymentProcessor {
  constructor(system) {
    this.system = system;
  }

  pay(amount) {
    this.system.makePayment(amount);
  }
}

// Cliente

const legacy = new LegacyPaymentSystem();
const legacyProcessor = new PaymentProcessor(legacy);
legacyProcessor.pay(100);

const modernAPI = new ModernPaymentAPI();
const adaptedAPI = new ModernPaymentAdapter(modernAPI);
const modernProcessor = new PaymentProcessor(adaptedAPI);
modernProcessor.pay(250);
