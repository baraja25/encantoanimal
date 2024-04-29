document.addEventListener("DOMContentLoaded", () => {
  const testimonialItems = document.querySelectorAll(".testimonial-item");
  let currentItem = 0;

  function showTestimonial() {
    testimonialItems.forEach((item, index) => {
      item.classList.toggle("active", index === currentItem);
    });
  }

  showTestimonial();
  setInterval(() => {
    currentItem = (currentItem + 1) % testimonialItems.length;
    showTestimonial();
  }, 5000);

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
    header.style.backgroundImage = backgrounds[index % backgrounds.length];
    index++;
  }

  // Cambia la imagen de fondo cada cierto tiempo
  setInterval(changeImage, 6000);
});
