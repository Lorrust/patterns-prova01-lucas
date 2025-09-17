// Abstract Factory Pattern

class LightButton {
  render() {
    return "Botão branco criado";
  }
}
class DarkButton {
  render() {
    return "Botão preto criado";
  }
}

class LightWindow {
  render() {
    return "Janela clara aberta";
  }
}
class DarkWindow {
  render() {
    return "Janela escura aberta";
  }
}

class ComponentFactory {
  createButton() {
    throw new Error("Método abstrato deve ser implementado");
  }
  createWindow() {
    throw new Error("Método abstrato deve ser implementado");
  }
}

class ButtonFactory extends ComponentFactory {
  createButton(theme) {
    return theme === "light" ? new LightButton() : new DarkButton();
  }
}

class WindowFactory extends ComponentFactory {
  createWindow(theme) {
    return theme === "light" ? new LightWindow() : new DarkWindow();
  }
}

const factories = {
  button: new ButtonFactory(),
  window: new WindowFactory(),
};

class App {
  constructor(theme) {
    this.button = factories.button.createButton(theme);
    this.windowUI = factories.window.createWindow(theme);
  }

  render() {
    console.log(this.button.render());
    console.log(this.windowUI.render());
  }
}

const app = new App("dark");
app.render();
