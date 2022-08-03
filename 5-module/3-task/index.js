function initCarousel() {

  const carouselInner = document.querySelector(".carousel__inner");
  const nextSlide = document.querySelector('.carousel__arrow_right');
  const prevSlide = document.querySelector('.carousel__arrow_left');
  prevSlide.style.display = 'none'

  nextSlide.addEventListener("click", () => {
    carouselInner.style.transform = `translateX(-500px)`;
    nextSlide.style.display = 'none'
    
  });

  prevSlide.addEventListener("click", () => {
    carouselInner.style.transform = `translateX(-1000px)`;
    prevSlide.style.display = ''
  });

  
  
}
