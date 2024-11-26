document.addEventListener("DOMContentLoaded", () => {
  // --- Карусель ---
  const carousel = document.querySelector(".testimonials__carousel");
  const prevButton = document.querySelector(".testimonials__button--prev");
  const nextButton = document.querySelector(".testimonials__button--next");

  if (carousel && prevButton && nextButton) {
    let currentIndex = 0; // Текущий индекс элемента карусели
    const totalItems = carousel.children.length; // Количество элементов в карусели

    // Обновление позиции карусели
    function updateCarousel() {
      const offset = -currentIndex * 100;
      carousel.style.transform = `translateX(${offset}%)`;
    }

    // Обработчик кнопки "Назад"
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      updateCarousel();
    });

    // Обработчик кнопки "Вперед"
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    });

    // Настройка CSS transition
    carousel.style.transition = "transform 0.5s ease";
  }

  // --- Анимации с GSAP ---
  if (typeof gsap !== "undefined") {
    gsap.from('.hero-title', { y: -50, opacity: 0, duration: 1 });
    gsap.from('.hero-subtitle', { y: 50, opacity: 0, duration: 1, delay: 0.3 });
    gsap.from('.hero-btn', { scale: 0.8, opacity: 0, duration: 0.7, delay: 0.5 });
    gsap.from('.hero-icons .icon', {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      delay: 0.8,
    });
  } else {
    console.warn("GSAP is not loaded. Make sure to include GSAP in your project.");
  }
});




document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const parent = question.parentElement;
    const isOpen = parent.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('open'));
    if (!isOpen) {
      parent.classList.add('open');
    }
  });
});
