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

    this.elem.addEventListener('click', this.sliderMove);
  
    return this.elem;
  }

  sliderMove = (e) => {
    const left = e.clientX - this.elem.getBoundingClientRect().left; 
    const leftRelative = left / this.elem.offsetWidth;
    const segments = this.steps - 1;
    const approximateValue = Math.round(leftRelative * segments); 
    const valuePercents = approximateValue / segments * 100; 

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

}
