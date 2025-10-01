document.addEventListener('DOMContentLoaded', function() {

  // Modal Manager
  class ModalManager {
    constructor() {
      this.modal = document.getElementById('modal');
      this.modalTitle = document.getElementById('modal-title');
      this.modalBody = document.getElementById('modal-body');
      this.closeBtn = this.modal.querySelector('.modal__close');
      this.overlay = this.modal.querySelector('.modal__overlay');

      this.closeBtn.addEventListener('click', () => this.close());
      this.overlay.addEventListener('click', () => this.close());

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.modal.classList.contains('active')) {
          this.close();
        }
      });
    }

    open(title, content) {
      this.modalTitle.textContent = title;
      this.modalBody.innerHTML = content;
      this.modal.classList.add('active');
      document.body.style.overflow = 'hidden';

      const forms = this.modalBody.querySelectorAll('form');
      forms.forEach(form => {
        form.addEventListener('submit', (e) => this.handleFormSubmit(e));
      });
    }

    close() {
      this.modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    handleFormSubmit(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      this.showSuccess('Thank you! Your submission has been received. We will contact you shortly.');
    }

    showSuccess(message) {
      this.modalBody.innerHTML = `
        <div class="info-message">
          <p><strong>Success!</strong></p>
          <p>${message}</p>
        </div>
        <div class="form__buttons">
          <button class="btn form__submit" onclick="document.getElementById('modal').querySelector('.modal__close').click()">Close</button>
        </div>
      `;
    }
  }

  const modal = new ModalManager();

  // Mobile Navigation
  const navBtn = document.querySelector('.nav-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');

  const toggleMobileNav = () => {
    navBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
    mobileNavOverlay.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  };

  const closeMobileNav = () => {
    navBtn.classList.remove('active');
    mobileNav.classList.remove('active');
    mobileNavOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (navBtn) {
    navBtn.addEventListener('click', toggleMobileNav);
  }

  if (mobileNavOverlay) {
    mobileNavOverlay.addEventListener('click', closeMobileNav);
  }

  // Mobile nav link handling
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const section = link.dataset.section;
      const action = link.dataset.action;

      if (section) {
        closeMobileNav();
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      } else if (action) {
        closeMobileNav();
        setTimeout(() => handleAction(action), 300);
      }
    });
  });

  // Smooth scroll helper
  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // CTA buttons - scroll to homes section
  const ctaButtons = document.querySelectorAll('.header__btn, .story__content .btn');
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', () => smoothScroll('#homes'));
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
      const home = btn.closest('.home');
      const homeName = home.querySelector('.home__name').textContent;
      const price = home.querySelector('.home__price p').textContent;
      const location = home.querySelector('.home__location p').textContent;
      const img = home.querySelector('.home__img').src;

      const content = `
        <div class="modal__property">
          <img src="${img}" alt="${homeName}" class="modal__property-img">
          <div class="modal__property-info">
            <div class="modal__property-name">${homeName}</div>
            <div class="modal__property-price">${price}</div>
            <div class="modal__property-location">${location}</div>
          </div>
        </div>
        <form class="form">
          <div class="form__group">
            <label class="form__label" for="contact-name">Full Name *</label>
            <input type="text" id="contact-name" name="name" class="form__input" required placeholder="John Doe">
          </div>
          <div class="form__group">
            <label class="form__label" for="contact-email">Email Address *</label>
            <input type="email" id="contact-email" name="email" class="form__input" required placeholder="john@example.com">
          </div>
          <div class="form__group">
            <label class="form__label" for="contact-phone">Phone Number *</label>
            <input type="tel" id="contact-phone" name="phone" class="form__input" required placeholder="(555) 123-4567">
          </div>
          <div class="form__group">
            <label class="form__label" for="contact-message">Message</label>
            <textarea id="contact-message" name="message" class="form__textarea" placeholder="I'm interested in scheduling a viewing..."></textarea>
          </div>
          <div class="form__buttons">
            <button type="submit" class="btn form__submit">Send Inquiry</button>
            <button type="button" class="btn form__cancel" onclick="document.getElementById('modal').querySelector('.modal__close').click()">Cancel</button>
          </div>
        </form>
      `;

      modal.open(`Contact Realtor - ${homeName}`, content);
    });
  });

  // Action handlers
  const handleAction = (action) => {
    const actions = {
      contact: () => {
        modal.open('Contact Us', `
          <form class="form">
            <div class="form__group">
              <label class="form__label" for="general-name">Full Name *</label>
              <input type="text" id="general-name" name="name" class="form__input" required>
            </div>
            <div class="form__group">
              <label class="form__label" for="general-email">Email Address *</label>
              <input type="email" id="general-email" name="email" class="form__input" required>
            </div>
            <div class="form__group">
              <label class="form__label" for="general-subject">Subject</label>
              <input type="text" id="general-subject" name="subject" class="form__input">
            </div>
            <div class="form__group">
              <label class="form__label" for="general-message">Message *</label>
              <textarea id="general-message" name="message" class="form__textarea" required></textarea>
            </div>
            <div class="form__buttons">
              <button type="submit" class="btn form__submit">Send Message</button>
              <button type="button" class="btn form__cancel" onclick="document.getElementById('modal').querySelector('.modal__close').click()">Cancel</button>
            </div>
          </form>
        `);
      },
      proposal: () => {
        modal.open('Request a Proposal', `
          <form class="form">
            <div class="form__group">
              <label class="form__label" for="proposal-name">Full Name *</label>
              <input type="text" id="proposal-name" name="name" class="form__input" required>
            </div>
            <div class="form__group">
              <label class="form__label" for="proposal-email">Email Address *</label>
              <input type="email" id="proposal-email" name="email" class="form__input" required>
            </div>
            <div class="form__group">
              <label class="form__label" for="proposal-phone">Phone Number *</label>
              <input type="tel" id="proposal-phone" name="phone" class="form__input" required>
            </div>
            <div class="form__group">
              <label class="form__label" for="proposal-budget">Budget Range</label>
              <input type="text" id="proposal-budget" name="budget" class="form__input" placeholder="e.g., $1M - $3M">
            </div>
            <div class="form__group">
              <label class="form__label" for="proposal-notes">Additional Requirements</label>
              <textarea id="proposal-notes" name="notes" class="form__textarea" placeholder="Tell us about your ideal property..."></textarea>
            </div>
            <div class="form__buttons">
              <button type="submit" class="btn form__submit">Request Proposal</button>
              <button type="button" class="btn form__cancel" onclick="document.getElementById('modal').querySelector('.modal__close').click()">Cancel</button>
            </div>
          </form>
        `);
      },
      planner: () => {
        modal.open('Home Planner', `
          <div class="info-message">
            <p><strong>Coming Soon!</strong></p>
            <p>Our interactive home planning tool is currently in development and will be available soon.</p>
            <p>This tool will help you visualize and plan your dream home with features including:</p>
            <ul style="margin-left: 2rem; margin-top: 1rem;">
              <li>3D floor plan designer</li>
              <li>Budget calculator</li>
              <li>Style preference selector</li>
              <li>Location finder</li>
            </ul>
            <p style="margin-top: 2rem;"><strong>Want early access?</strong> Contact us to be notified when it launches!</p>
          </div>
          <div class="form__buttons">
            <button class="btn form__submit" onclick="document.querySelector('[data-action=\\'contact\\']').click()">Contact Us</button>
            <button class="btn form__cancel" onclick="document.getElementById('modal').querySelector('.modal__close').click()">Close</button>
          </div>
        `);
      },
      submit: () => {
        modal.open('Submit Your Property', `
          <form class="form">
            <div class="form__group">
              <label class="form__label" for="submit-name">Full Name *</label>
              <input type="text" id="submit-name" name="name" class="form__input" required>
            </div>
            <div class="form__group">
              <label class="form__label" for="submit-email">Email Address *</label>
              <input type="email" id="submit-email" name="email" class="form__input" required>
            </div>
            <div class="form__group">
              <label class="form__label" for="submit-phone">Phone Number *</label>
              <input type="tel" id="submit-phone" name="phone" class="form__input" required>
            </div>
            <div class="form__group">
              <label class="form__label" for="submit-address">Property Address *</label>
              <input type="text" id="submit-address" name="address" class="form__input" required>
            </div>
            <div class="form__group">
              <label class="form__label" for="submit-price">Asking Price</label>
              <input type="text" id="submit-price" name="price" class="form__input" placeholder="e.g., $2,500,000">
            </div>
            <div class="form__group">
              <label class="form__label" for="submit-details">Property Details</label>
              <textarea id="submit-details" name="details" class="form__textarea" placeholder="Bedrooms, bathrooms, square footage, special features..."></textarea>
            </div>
            <div class="form__buttons">
              <button type="submit" class="btn form__submit">Submit Property</button>
              <button type="button" class="btn form__cancel" onclick="document.getElementById('modal').querySelector('.modal__close').click()">Cancel</button>
            </div>
          </form>
        `);
      },
      careers: () => {
        modal.open('Careers at Nexter', `
          <div class="info-message">
            <p><strong>Join Our Team</strong></p>
            <p>Nexter is always looking for talented, driven real estate professionals to join our elite team.</p>
            <p style="margin-top: 2rem;"><strong>Why work with Nexter?</strong></p>
            <ul style="margin-left: 2rem; margin-top: 1rem;">
              <li>Work with luxury properties and high-net-worth clients</li>
              <li>Competitive commission structure</li>
              <li>Comprehensive training and mentorship</li>
              <li>Access to exclusive listings</li>
              <li>Marketing and technology support</li>
            </ul>
            <p style="margin-top: 2rem;"><strong>Current Openings:</strong></p>
            <ul style="margin-left: 2rem; margin-top: 1rem;">
              <li>Senior Real Estate Agent</li>
              <li>Property Manager</li>
              <li>Marketing Specialist</li>
            </ul>
            <p style="margin-top: 2rem;">To apply, please send your resume and cover letter to <a href="mailto:careers@nexter.com">careers@nexter.com</a></p>
          </div>
          <div class="form__buttons">
            <button class="btn form__submit" onclick="window.location.href='mailto:careers@nexter.com'">Send Email</button>
            <button class="btn form__cancel" onclick="document.getElementById('modal').querySelector('.modal__close').click()">Close</button>
          </div>
        `);
      }
    };

    if (actions[action]) {
      actions[action]();
    }
  };

  // Footer navigation
  const footerLinks = document.querySelectorAll('.nav__link');
  footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const text = link.textContent.toLowerCase();

      if (text.includes('find') || text.includes('dream')) {
        smoothScroll('#homes');
      } else if (text.includes('contact')) {
        handleAction('contact');
      } else if (text.includes('proposal')) {
        handleAction('proposal');
      } else if (text.includes('planner')) {
        handleAction('planner');
      } else if (text.includes('submit')) {
        handleAction('submit');
      } else if (text.includes('work')) {
        handleAction('careers');
      }
    });
  });

});
