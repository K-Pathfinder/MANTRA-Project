/*
  H69 Luxury Hotel - Interactive Client Scripts
  Designed for MANTRA 2026 Summer School Assignment
*/

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Mobile Menu Toggle
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('show');
      menuBtn.innerHTML = navLinks.classList.contains('show') ? '✕' : '☰';
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('show') && !navLinks.contains(e.target) && e.target !== menuBtn) {
        navLinks.classList.remove('show');
        menuBtn.innerHTML = '☰';
      }
    });
  }

  // 2. Interactive Cost Calculator (Real-time estimate)
  const calcForm = document.getElementById('calculatorForm');
  if (calcForm) {
    const roomSelect = document.getElementById('roomSelect');
    const nightsInput = document.getElementById('nightsInput');
    const guestsInput = document.getElementById('guestsInput');
    const calcResult = document.getElementById('calcResult');
    
    const calculateTotal = () => {
      const roomPrice = parseInt(roomSelect.value) || 0;
      const nights = parseInt(nightsInput.value) || 0;
      const guests = parseInt(guestsInput.value) || 0;
      
      if (nights <= 0 || guests <= 0) {
        calcResult.style.color = 'var(--color-error)';
        calcResult.textContent = 'Please enter a valid number of nights & guests.';
        return;
      }
      
      // Basic logic: base room price * nights. Extra guest charge of ₹1,500/night for > 2 guests.
      let baseTotal = roomPrice * nights;
      if (guests > 2) {
        baseTotal += (guests - 2) * 1500 * nights;
      }
      
      calcResult.style.color = 'var(--color-accent-light)';
      calcResult.innerHTML = `Estimated Total: <span style="font-weight: 700;">₹${baseTotal.toLocaleString('en-IN')}</span>`;
    };
    
    // Calculate on change/input for seamless real-time response
    roomSelect.addEventListener('change', calculateTotal);
    nightsInput.addEventListener('input', calculateTotal);
    guestsInput.addEventListener('input', calculateTotal);
    
    // Run initial calculation
    calculateTotal();
  }

  // 3. Complete Form Validation for Booking/Enquiry Form
  const bookingForm = document.getElementById('bookingForm');
  const contactForm = document.getElementById('contactForm');

  const validateAndSubmit = (form, successMsg) => {
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formMsg = document.getElementById('formMessage');
      if (!formMsg) return;
      
      // Clear previous styles/classes
      formMsg.style.display = 'none';
      formMsg.style.color = '';
      formMsg.style.backgroundColor = '';
      
      // Grab inputs
      const name = form.querySelector('[name="name"]')?.value.trim() || '';
      const email = form.querySelector('[name="email"]')?.value.trim() || '';
      const phone = form.querySelector('[name="phone"]')?.value.trim() || '';
      
      // Base validation
      if (!name || !email || !phone) {
        showFormFeedback(formMsg, 'Please fill in all required fields.', 'error');
        return;
      }
      
      // Email format regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFormFeedback(formMsg, 'Please enter a valid email address.', 'error');
        return;
      }
      
      // Indian mobile format (10 digits)
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(phone)) {
        showFormFeedback(formMsg, 'Please enter a valid 10-digit mobile number.', 'error');
        return;
      }
      
      // Success! Form is mock submitted (and works perfectly with Netlify Forms if tag is present)
      showFormFeedback(formMsg, successMsg, 'success');
      form.reset();
      
      // If a calculator exists, reset calculator total as well
      const calcResult = document.getElementById('calcResult');
      if (calcResult && document.getElementById('calculatorForm')) {
        setTimeout(() => {
          calcResult.innerHTML = 'Estimated Total: <span style="font-weight: 700;">₹12,000</span>';
        }, 100);
      }
    });
  };

  const showFormFeedback = (element, message, type) => {
    element.textContent = message;
    element.style.display = 'block';
    if (type === 'success') {
      element.style.color = '#ffffff';
      element.style.backgroundColor = 'rgba(16, 185, 129, 0.2)';
      element.style.border = '1px solid var(--color-success)';
    } else {
      element.style.color = '#ffffff';
      element.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
      element.style.border = '1px solid var(--color-error)';
    }
  };

  validateAndSubmit(bookingForm, 'Thank you! Your luxury booking enquiry has been received. Our concierge will contact you shortly.');
  validateAndSubmit(contactForm, 'Thank you for your message! Our guest relations team will respond to you within 24 hours.');

  // 4. Interactive Gallery Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  if (filterBtns.length > 0 && galleryItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const category = btn.getAttribute('data-filter');
        
        // Filter items
        galleryItems.forEach(item => {
          const itemCategory = item.getAttribute('data-category');
          if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';
            // Simple fade-in animation
            item.style.opacity = '0';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transition = 'opacity 0.4s ease';
            }, 50);
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
});
