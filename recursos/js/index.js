document.addEventListener("DOMContentLoaded", function () {
  const testimonialItems = document.querySelectorAll(".testimonial-item");
  let currentItem = 0;

  function showTestimonial() {
    testimonialItems.forEach((item, index) => {
      if (index === currentItem) {
        item.classList.add("active"); // Agrega la clase 'active' al testimonio actual
      } else {
        item.classList.remove("active"); // Elimina la clase 'active' de los demás testimonios
      }
    });
  }

  showTestimonial();

  setInterval(() => {
    currentItem = (currentItem + 1) % testimonialItems.length;
    showTestimonial();
  }, 5000); // Cambia la duración según sea necesario (5000ms = 5 segundos)
});

$(document).ready(function () {
  $(".testimonial-item").slick({
    autoplay: true, // Activar el autoplay del slider
    autoplaySpeed: 5000, // Cambiar el testimonio cada 5 segundos
    dots: false, // Mostrar navegación de puntos
    arrows: false, // Ocultar botones de navegación
  });
});

// Lista de imágenes de fondo
const backgrounds = [
  'url("recursos/portada1.jpg")',
  'url("recursos/portada2.jpeg")',
  'url("recursos/portada3.jpg")',
  'url("recursos/portada4.jpg")',
  'url("recursos/portada5.jpg")',
  'url("recursos/portada6.jpg")',
];
let index = 0;


// Función para cambiar la imagen de fondo
function changeImage() {
  const header = document.getElementById("inicio");

  if (index >= backgrounds.length) {
    index = 0;
  }
  // const index = Math.floor(Math.random() * backgrounds.length); // Selecciona un índice aleatorio
  header.style.backgroundImage = backgrounds[index];

  index++;

}

// Cambia la imagen de fondo cada cierto tiempo
setInterval(function () {
  changeImage();
}, 6000);
