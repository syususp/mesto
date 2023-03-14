export default class Section {
    constructor({ items, renderer }, selector) {
        this._renderedItems = items;
        this._container = document.querySelector(selector);
        this._renderer = renderer;
    }

    addItem(element) {
        this._container.append(element);
    }

    renderItems() {
        this._renderedItems.forEach((item) => {
            this._renderer(item);
        });
    }
}