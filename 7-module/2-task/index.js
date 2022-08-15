import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = this.render();
    // this.render();
    this.modalWindowClosing();
  }

  render(){
  const template = createElement(`
  <div class="modal">
    <!--Прозрачная подложка перекрывающая интерфейс-->
    <div class="modal__overlay"></div>

    <div class="modal__inner">
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>

        <h3 class="modal__title">
          Вот сюда нужно добавлять заголовок
        </h3>
      </div>

      <div class="modal__body">
        A сюда нужно добавлять содержимое тела модального окна
      </div>
    </div>
    </div>
    `);
    document.body.querySelector('.container').appendChild(template);
    document.body.classList.add('is-modal-open');
    return template;
  } 

  modalWindowClosing(){
    const closeEvent = document.querySelector('modal__close');
    closeEvent.addEventListener('click', () => close());
    
    function close(){
      document.body.querySelector('is-modal-open').classList.remove('is-modal-open');
      document.body.querySelector('modal').remove();
    }
  }

}
