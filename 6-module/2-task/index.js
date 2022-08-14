import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  #obj;
  #elem;
  
  constructor(obj) {
    this.#obj = obj;
    this.#elem = this.#render();
  }

  #template() {
    return `
    <div class="card">
      <div class="card__top">
          <img src="/assets/images/products/${this.#obj.image}" class="card__image" alt="product">
          <span class="card__price">€${this.#obj.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
          <div class="card__title">${this.#obj.name}</div>
          <button type="button" class="card__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
      </div>
    </div>`
  }

  #render() {
    let productCard = createElement(this.#template());
    const addButton = productCard.querySelector('.card__button');
    addButton.onclick = this.#onAddButtonClick;
    return productCard;
  }

  #onAddButtonClick = () => {
    const clickEvent = new CustomEvent("product-add",
      {
        detail: this.#obj.id,
        bubbles: true
      });
    return this.elem.dispatchEvent(clickEvent);
  }

  get elem() {
    return this.#elem;
  }
}
