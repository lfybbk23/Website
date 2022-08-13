import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  elem = '';
  arr = [];

  constructor(arr) {
    this.arr = arr;
    this.elem;
    this.render();
    this.slideTurnOver();
  }

  get elem() {
    return this.elem;
  }

  render() {
    this.elem = createElement(`    
    <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner">
      </div>
    </div>`);

    this.elem.querySelector(".carousel__inner").insertAdjacentHTML('afterbegin', `${this.template()}`);

    const buttons = Array.from(this.elem.querySelectorAll('.carousel__button'));
    buttons.forEach((button) => {button.addEventListener('click', this.onAddButtonClick) });
  }

  template() {
    return this.arr.map(obj => `
      <div class="carousel__slide carousel" data-id="${obj.id}">
        <img src="/assets/images/carousel/${obj.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${obj.price.toFixed(2)}</span>
          <div class="carousel__title">${obj.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
      `).join('');
  } 

  slideTurnOver(){
    const elem = this.elem;
    const nextSlide = elem.querySelector('.carousel__arrow_right');
    const prevSlide = elem.querySelector('.carousel__arrow_left');
    const slidesLength = elem.querySelectorAll('.carousel__button').length - 1;
    prevSlide.style.display = 'none';
    let currentSlide = 0;
    prevSlide.addEventListener('click', () => translate(-1));
    nextSlide.addEventListener('click', () => translate(1));

    function translate(n) {
      const carouselInner = elem.querySelector('.carousel__inner');
      const slideWidth = carouselInner.offsetWidth;
      currentSlide -= n;
      carouselInner.style.transform = `translateX(${currentSlide * slideWidth}px)`;
      currentSlide == -slidesLength ? nextSlide.style.display = 'none' : nextSlide.style.display = '';
      currentSlide == 0 ? prevSlide.style.display = 'none' : prevSlide.style.display = '';
    }
  };

  onAddButtonClick = (event) => {
    const target = event.target;
    const addProductEvent = new CustomEvent("product-add",
      {
        detail: target.closest('div[data-id]').getAttribute('data-id'),
        bubbles: true
      });
      this.elem.dispatchEvent(addProductEvent);
  };
}