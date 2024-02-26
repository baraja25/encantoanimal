document.addEventListener('DOMContentLoaded', function() {
  const testimonialItems = document.querySelectorAll('.testimonial-item');
  let currentItem = 0;

  function showTestimonial() {
    testimonialItems.forEach((item, index) => {
      if (index === currentItem) {
        item.classList.add('active'); // Agrega la clase 'active' al testimonio actual
      } else {
        item.classList.remove('active'); // Elimina la clase 'active' de los demás testimonios
      }
    });
  }

  showTestimonial();

  setInterval(() => {
    currentItem = (currentItem + 1) % testimonialItems.length;
    showTestimonial();
  }, 5000); // Cambia la duración según sea necesario (5000ms = 5 segundos)
});


$(document).ready(function(){
  $('.testimonial-item').slick({
    autoplay: true, // Activar el autoplay del slider
    autoplaySpeed: 5000, // Cambiar el testimonio cada 5 segundos
    dots: true, // Mostrar navegación de puntos
    arrows: false // Ocultar botones de navegación
  });
});


// $(document).ready(function(){
//   $('.slick-slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     autoplay: true,
//     autoplaySpeed: 5000, // Change the autoplay speed as desired
//   });
// });