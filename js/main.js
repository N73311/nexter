document.addEventListener('DOMContentLoaded', function() {

  // Smooth scroll to sections
  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // CTA buttons - scroll to homes section
  const ctaButtons = document.querySelectorAll('.header__btn, .story__content .btn');
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', () => smoothScroll('.homes'));
  });

  // Like/favorite functionality with localStorage
  const initializeLikes = () => {
    const likes = JSON.parse(localStorage.getItem('nexter-likes') || '[]');
    likes.forEach(index => {
      const heart = document.querySelectorAll('.home__like')[index];
      if (heart) heart.classList.add('liked');
    });
  };

  const toggleLike = (index, heart) => {
    const likes = JSON.parse(localStorage.getItem('nexter-likes') || '[]');
    const likeIndex = likes.indexOf(index);

    if (likeIndex > -1) {
      likes.splice(likeIndex, 1);
      heart.classList.remove('liked');
    } else {
      likes.push(index);
      heart.classList.add('liked');
    }

    localStorage.setItem('nexter-likes', JSON.stringify(likes));
  };

  const hearts = document.querySelectorAll('.home__like');
  hearts.forEach((heart, index) => {
    heart.style.cursor = 'pointer';
    heart.addEventListener('click', () => toggleLike(index, heart));
  });

  initializeLikes();

  // Contact realtor buttons
  const contactButtons = document.querySelectorAll('.home__btn');
  contactButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const homeName = btn.closest('.home').querySelector('.home__name').textContent;
      const price = btn.closest('.home').querySelector('.home__price p').textContent;
      alert(`Thank you for your interest in ${homeName}!\n\nPrice: ${price}\n\nA realtor will contact you shortly at your preferred contact method.`);
    });
  });

  // Mobile nav toggle
  const navBtn = document.querySelector('.nav-btn');
  const sidebar = document.querySelector('.sidebar');
  if (navBtn && sidebar) {
    navBtn.addEventListener('click', () => {
      sidebar.classList.toggle('sidebar--open');
    });
  }

  // Footer navigation
  const footerLinks = document.querySelectorAll('.nav__link');
  footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const text = link.textContent.toLowerCase();

      if (text.includes('find') || text.includes('dream')) {
        smoothScroll('.homes');
      } else if (text.includes('contact')) {
        alert('Contact Us:\n\nEmail: info@nexter.com\nPhone: 1-800-NEXTER\n\nOur team is available 24/7 to assist you.');
      } else if (text.includes('proposal')) {
        alert('Request a Proposal:\n\nPlease contact us to schedule a consultation with one of our expert realtors.');
      } else if (text.includes('planner')) {
        alert('Home Planner:\n\nOur interactive home planning tool will be available soon!');
      } else if (text.includes('submit')) {
        alert('Submit Your Property:\n\nInterested in listing your property? Contact our team for a free valuation.');
      } else if (text.includes('work')) {
        alert('Careers at Nexter:\n\nWe\'re always looking for talented realtors to join our team!\n\nEmail: careers@nexter.com');
      }
    });
  });

});
