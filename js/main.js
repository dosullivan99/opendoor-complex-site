window.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        setTimeout(() => {
          document.getElementById('formSuccess').classList.remove('hidden');
        }, 300);
      });
    }
  });
  