export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem;
    this.render();
  }

  template(){
    const sliderElem = document.createElement('div');
    sliderElem.classList.add('slider__steps');
    
    const steps = this.steps;
    for (let i = 0; i < steps; i++) {
      const span = document.createElement('span');
      sliderElem.append(span);
    }
    sliderElem.firstElementChild.classList.add('slider__step-active');
    return sliderElem;
  }

  render(){
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');
    const sliderBody = (`
      <div class="slider__thumb" style="left: 50%;">
        <span class="slider__value">2</span>
      </div>
      <div class="slider__progress" style="width: 50%;"></div>
      `);
    this.elem.innerHTML = sliderBody;
    this.elem.append(this.template());

    const sliderThumb = this.elem.querySelector('.slider__thumb');
    sliderThumb.ondragstart = () => false;

    this.elem.addEventListener('click', this.sliderClick);
    sliderThumb.addEventListener('pointerdown', this.onThumbDown);

    return this.elem;
  }

  sliderClick = (event) => {
    let shiftX = event.clientX - this.elem.getBoundingClientRect().left; 
    let leftRelative = shiftX / this.elem.offsetWidth;
    const segments = this.steps - 1;
    const approximateValue = Math.round(leftRelative * segments); 
    let valuePercents = approximateValue / segments * 100; 
    const sliderValue = this.elem.querySelector('.slider__value');
    sliderValue.textContent = approximateValue;

    const sliderSteps = this.elem.querySelectorAll('.slider__steps span'); 
    const activeStep = sliderSteps[approximateValue];
    this.elem.querySelector('.slider__step-active')?.classList.remove('slider__step-active');
    activeStep.classList.add('slider__step-active');
    
    const sliderThumb = this.elem.querySelector('.slider__thumb');
    sliderThumb.style.left = `${valuePercents}%`;
    const sliderProgress = this.elem.querySelector('.slider__progress');
    sliderProgress.style.width = `${valuePercents}%`;

    const sliderChange = new CustomEvent('slider-change',
      {
        detail: approximateValue,
        bubbles: true
      });
      this.elem.dispatchEvent(sliderChange);
  }

  onThumbDown = (event) => {
    event.preventDefault();
    let shiftX = event.clientX - this.elem.getBoundingClientRect().left; 
    let leftRelative = shiftX / this.elem.offsetWidth;
    if (leftRelative < 0) {
      leftRelative = 0;
    } if (leftRelative > 1) {
      leftRelative = 1;
    }
    let leftPercents = leftRelative * 100;
    const segments = this.steps - 1;
    const approximateValue = Math.round(leftRelative * segments); 
    const sliderValue = this.elem.querySelector('.slider__value');
    sliderValue.textContent = approximateValue;

    const sliderSteps = this.elem.querySelectorAll('.slider__steps span'); 
    const activeStep = sliderSteps[approximateValue];
    this.elem.querySelector('.slider__step-active')?.classList.remove('slider__step-active');
    activeStep.classList.add('slider__step-active');

    const sliderThumb = this.elem.querySelector('.slider__thumb');
    sliderThumb.style.left = `${leftPercents}%`;
    const slider = document.querySelector('.slider');
    console.log(slider);
    slider.classList.add('slider_dragging');
    const sliderProgress = this.elem.querySelector('.slider__progress');
    sliderProgress.style.width = `${leftPercents}%`;

    sliderThumb.onpointermove = this.onThumbMove;
    sliderThumb.ondragstart = () => false;

    document.body.addEventListener('pointermove', this.onThumbMove);
  }

  onThumbMove = (event) => {
    const shiftX = event.clientX - this.elem.getBoundingClientRect().left; 
    let leftRelative = shiftX / this.elem.offsetWidth;
    if (leftRelative < 0) {
      leftRelative = 0;
    } if (leftRelative > 1) {
      leftRelative = 1;
    }
    let leftPercents = leftRelative * 100;
    const segments = this.steps - 1;
    const approximateValue = Math.round(leftRelative * segments); 
    const sliderValue = this.elem.querySelector('.slider__value');
    sliderValue.textContent = approximateValue;

    const sliderSteps = this.elem.querySelectorAll('.slider__steps span'); 
    const activeStep = sliderSteps[approximateValue];
    this.elem.querySelector('.slider__step-active')?.classList.remove('slider__step-active');
    activeStep.classList.add('slider__step-active');

    const sliderThumb = this.elem.querySelector('.slider__thumb');
    sliderThumb.style.left = `${leftPercents}%`;
    const sliderProgress = this.elem.querySelector('.slider__progress');
    sliderProgress.style.width = `${leftPercents}%`;

    sliderThumb.ondragstart = () => false;
    document.body.addEventListener('pointerup', this.onThumbUp);
  }

  onThumbUp = (event) => {
    let shiftX = (event.clientX) - this.elem.getBoundingClientRect().left; 
    let leftRelative = shiftX / this.elem.offsetWidth;
    if (leftRelative < 0) {
      leftRelative = 0;
    } if (leftRelative > 1) {
      leftRelative = 1;
    }
    let leftPercents = leftRelative * 100;
    const segments = this.steps - 1;
    const approximateValue = Math.round(leftRelative * segments); 
    const sliderValue = this.elem.querySelector('.slider__value');
    sliderValue.textContent = approximateValue;
    
    const sliderSteps = this.elem.querySelectorAll('.slider__steps span'); 
    const activeStep = sliderSteps[approximateValue];
    this.elem.querySelector('.slider__step-active')?.classList.remove('slider__step-active');
    activeStep.classList.add('slider__step-active');

    const sliderThumb = this.elem.querySelector('.slider__thumb');
    sliderThumb.style.left = `${leftPercents}%`;
    const slider = document.querySelector('.slider');
    slider.classList.remove('slider_dragging');
    const sliderProgress = this.elem.querySelector('.slider__progress');
    sliderProgress.style.width = `${leftPercents}%`;

    document.body.removeEventListener('pointermove', this.onThumbMove);
    sliderThumb.ondragstart = () => false;
    sliderThumb.onpointermove = null;
    sliderThumb.onpointerup = null;

    const sliderChange = new CustomEvent('slider-change',
      {
        detail: approximateValue,
        bubbles: true
      });
      this.elem.dispatchEvent(sliderChange);
  }
}
