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

function handleContactForm() {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
      };

      console.log('Dados do formulário:', formData);

      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');

      contactForm.reset();
    });
  }
}

function loadFeatures() {
  const featuresContainer = document.querySelector('.feature-grid');

  if (featuresContainer) {
    const features = [
      {
        title: 'Qualidade',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        title: 'Inovação',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        title: 'Suporte',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ];

    featuresContainer.innerHTML = features
      .map(
        feature => `
            <div class="feature">
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
            </div>
        `
      )
      .join('');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  highlightActiveMenu();
  initSmoothScroll();
  handleContactForm();
  loadFeatures();

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
