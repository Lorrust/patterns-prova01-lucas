// Bridge Pattern

class TV {
  turnOn() {
    console.log("TV ligada.");
  }

  turnOff() {
    console.log("TV desligada.");
  }
}

class SamsungTV extends TV {
  turnOn() {
    console.log("TV Samsung ligada.");
  }

  turnOff() {
    console.log("TV Samsung desligada.");
  }
}

class SonyTV extends TV {
  turnOn() {
    console.log("TV Sony ligada.");
  }

  turnOff() {
    console.log("TV Sony desligada.");
  }
}

class RemoteControl {
  constructor(tv) {
    this.tv = tv;
  }

  turnOn() {
    this.tv.turnOn();
  }

  turnOff() {
    this.tv.turnOff();
  }
}

// Cliente

const samsung = new SamsungTV();
const samsungRemote = new RemoteControl(samsung);
samsungRemote.turnOn();
samsungRemote.turnOff();

const sony = new SonyTV();
const sonyRemote = new RemoteControl(sony);
sonyRemote.turnOn();
sonyRemote.turnOff();
