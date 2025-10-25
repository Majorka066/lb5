// Кнопка "Наверх"
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Аккордеон
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    const accordionContent = accordionItem.querySelector('.accordion-content');
    const isActive = accordionItem.classList.contains('active');

    // Закрыть все аккордеоны
    document.querySelectorAll('.accordion-item').forEach(item => {
      item.classList.remove('active');
      item.querySelector('.accordion-content').style.maxHeight = null;
    });

    // Открыть текущий, если он был закрыт
    if (!isActive) {
      accordionItem.classList.add('active');
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    }
  });
});

// Фильтрация галереи
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Убрать активный класс со всех кнопок
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    galleryItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Модальное окно
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close-modal');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = item.querySelector('img').src;
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Закрытие модального окна клавишей Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'block') {
    modal.style.display = 'none';
  }
});