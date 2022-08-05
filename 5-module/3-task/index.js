function initCarousel() {

  const carouselInner = document.querySelector(".carousel__inner");
  const slideWidth = document.querySelector(".carousel__inner").offsetWidth;
  const nextSlide = document.querySelector('.carousel__arrow_right');
  const prevSlide = document.querySelector('.carousel__arrow_left');

  let counter = 0;

  carouselArrowDisplay = () => {
    counter > 2 ? nextSlide.style.display = 'none' : nextSlide.style.display = '';
    counter > 0 ? prevSlide.style.display = '' : prevSlide.style.display = 'none';
  }

  carouselArrowDisplay();
  
  nextSlide.addEventListener("click", () => {
    counter++;
    carouselInner.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
    carouselArrowDisplay();
  })

  prevSlide.addEventListener("click", () => {
    counter--;
    carouselInner.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
    carouselArrowDisplay();
  })
};
