export default class Section {
  constructor({ renderer }, selector) {
    this._container = document.querySelector(selector);
    this._renderer = renderer;
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems(items) {
    items.forEach((item) => {
      const element = this._renderer(item);
      this.addItem(element);
    });
  }
}
