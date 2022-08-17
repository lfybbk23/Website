import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.modal = document.createElement('div');
    this.modal.classList.add('modal');
    this.modal.insertAdjacentHTML("afterbegin",
    `
    <div class="modal">
      <div class="modal__overlay"></div>
      <div class="modal__inner">
        <div class="modal__header">
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon">
          </button>
          <h3 class="modal__title">
          </h3>
        </div>
        <div class="modal__body">
        </div>
      </div>
    </div>
    `);

    this.modalTitle = this.modal.querySelector('.modal__title');
    this.modalBody = this.modal.querySelector('.modal__body');
    this.modalClose = this.modal.querySelector('.modal__close');
    this.modalClose.addEventListener('click', () => this.close());
    this.escKeyUp = this.escKeyUp.bind(this);
    // this.modal.addEventListener('keyup', () => this.escKeyUp());
  }

  setTitle(titleContent) {
    const modalTitle = this.modal.querySelector('.modal__title');
    modalTitle.textContent = titleContent;
  }

  setBody(bodyContent) {
    const modalBody = this.modal.querySelector('.modal__body');
    modalBody.textContent = '';
    modalBody.append(bodyContent);
  }

  open() {    
    const elementBody = document.querySelector('body');
    elementBody.append(this.modal);
    document.body.classList.add('is-modal-open');

    this.modalClose.addEventListener('click', this.close);
    document.addEventListener('keydown', this.escKeyUp)
  }

  close() {
    if(document.querySelector("body").classList.contains("is-modal-open")){
      document.querySelector("body").classList.remove("is-modal-open");
      document.querySelector(".modal").remove();
      this.modalClose.removeEventListener("click", this.close);
      this.modalClose.removeEventListener("keyup", this.escKeyUp);
    }
  }

  escKeyUp(event) {
    if (event.code === "Escape") {
      this.close();
    }
  }
}
