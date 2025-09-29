function highlightActiveMenu() {
  const currentPage = window.location.pathname.split('/').pop();
  const menuLinks = document.querySelectorAll('nav a');

  menuLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage) {
      link.style.color = '#3498db';
      link.style.fontWeight = 'bold';
    }
  });
}

function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  highlightActiveMenu();
  initSmoothScroll();

  document.body.classList.add('loaded');
});

document.addEventListener('DOMContentLoaded', function () {
  const heroText = document.querySelector('.hero h2');
  if (heroText) {
    const text = heroText.textContent;
    heroText.textContent = '';
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }

    setTimeout(typeWriter, 1000);
  }
});
