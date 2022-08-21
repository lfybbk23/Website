import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem;
    this.render();
    this.itemScrollBy();
  }

  render(){
    this.elem = document.createElement("div");    
    this.elem.classList.add("ribbon");
    this.elem.insertAdjacentHTML('afterbegin', `
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
      <nav class="ribbon__inner">
      </nav>
      <button class="ribbon__arrow ribbon__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    </div>
    `);

    this.elem.querySelector(".ribbon__inner").insertAdjacentHTML('beforeend', `${this.template()}`);

    const menuItems = Array.from(this.elem.querySelectorAll('.ribbon__item'));
    menuItems.forEach((menuItem) => {menuItem.addEventListener('click', this.onMenuItemClick) });
  }

  template(){
    return this.categories.map(obj => `
    <a href="#" class="ribbon__item" data-id="${obj.id}">${obj.name}</a>
    `).join('');
  }

  itemScrollBy(){
    const elem = this.elem;
    const ribbonInner = elem.querySelector(".ribbon__inner");
    const ribbonArrowLeft = elem.querySelector('.ribbon__arrow_left');
    const ribbonArrowRight = elem.querySelector('.ribbon__arrow_right');
    
    ribbonArrowLeft.classList.remove("ribbon__arrow_visible");
    ribbonArrowRight.classList.add("ribbon__arrow_visible");

    ribbonArrowLeft.addEventListener('click', () => {ribbonItemScrollLeft()});
    ribbonArrowRight.addEventListener('click', () => {ribbonItemScrollRight()});

    function ribbonItemScrollLeft() {
      const scrollWidth = parseInt(ribbonInner.scrollWidth);
      const scrollLeft = parseInt(ribbonInner.scrollLeft);
      const clientWidth = parseInt(ribbonInner.clientWidth);
      const scrollRight = parseInt(scrollWidth - scrollLeft - clientWidth);

      ribbonInner.scrollBy(-350, 0);

      scrollRight !== 0 ? ribbonArrowRight.classList.add("ribbon__arrow_visible") : ribbonArrowRight.classList.remove("ribbon__arrow_visible");
      scrollLeft >= 0 ? ribbonArrowLeft.classList.add("ribbon__arrow_visible") : ribbonArrowLeft.classList.remove("ribbon__arrow_visible");
    }

    function ribbonItemScrollRight() {
      const scrollWidth = parseInt(ribbonInner.scrollWidth);
      const scrollLeft = parseInt(ribbonInner.scrollLeft);
      const clientWidth = parseInt(ribbonInner.clientWidth);
      const scrollRight = parseInt(scrollWidth - scrollLeft - clientWidth);

      ribbonInner.scrollBy(350, 0);

      scrollRight !== 0 ? ribbonArrowRight.classList.add("ribbon__arrow_visible") : ribbonArrowRight.classList.remove("ribbon__arrow_visible");
      scrollLeft >= 0 ? ribbonArrowLeft.classList.add("ribbon__arrow_visible") : ribbonArrowLeft.classList.remove("ribbon__arrow_visible");
    }
  }

  onMenuItemClick = (event) => {
    event.preventDefault();
    const target = event.target;
    document.querySelector('.ribbon__item_active')?.classList.remove('ribbon__item_active');
    target.classList.add("ribbon__item_active");
    const addProductEvent = new CustomEvent("ribbon-select",
      {
        detail: target.closest('a[data-id]').getAttribute('data-id'),
        bubbles: true
      });
      this.elem.dispatchEvent(addProductEvent);
      console.log(addProductEvent.detail);
  };



  



}

  
