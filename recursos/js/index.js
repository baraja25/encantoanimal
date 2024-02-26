document.addEventListener('DOMContentLoaded', function() {
  const testimonialItems = document.querySelectorAll('.testimonial-item');
  let currentItem = 0;

  function showTestimonial() {
    testimonialItems.forEach((item, index) => {
      if (index === currentItem) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  showTestimonial();

  setInterval(() => {
    currentItem = (currentItem + 1) % testimonialItems.length;
    showTestimonial();
  }, 5000); // Change the duration as desired (5000ms = 5 seconds)
});
$(document).ready(function(){
  $('.slick-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000, // Change the autoplay speed as desired
  });
});