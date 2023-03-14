export default class Section {
    constructor({ items, renderer }, selector) {
        this._renderedItems = items;
        this._container = document.querySelector(selector);
        this._renderer = renderer;
    }

    addItem(element) {
        this._container.append(element);
    }

    clear() {
        this._container.innerHTML = '';
    }

    renderItems() {
        this.clear();

        this._renderedItems.forEach((item) => {
            this._renderer(item);
        });
    }
}