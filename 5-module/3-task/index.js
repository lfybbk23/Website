function initCarousel() {

  const carouselInner = document.querySelector(".carousel__inner");
  
  let slideWidth = '988px';
  
  carouselInner.style.width = slideWidth;

  let slides = document.querySelectorAll('.carousel__slide');
    slides.forEach((slide) => {
      slide.style.width = slideWidth;
      let img = slide.querySelector('.carousel__img');
      if (img) {
        img.style.width = slideWidth;
      }
  });

  const nextSlide = document.querySelector('.carousel__arrow_right');
  const prevSlide = document.querySelector('.carousel__arrow_left');
  prevSlide.style.display = 'none'

  nextSlide.addEventListener("click", () => {
    carouselInner.style.transform = `translateX(-500px)`;
    nextSlide.style.display = 'none'
    
  });

  prevSlide.addEventListener("click", () => {
    carouselInner.style.transform = `translateX(-1000px)`;
    
  });

  
  
}
