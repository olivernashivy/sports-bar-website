/**
 * Arena 90 Sports Bar — Main Script
 * Handles: Navigation scroll state, mobile menu, AOS init,
 *          smooth scroll, stat counter animation, active nav links
 */

'use strict';

/* ─── AOS Initialization ─────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  // Animate On Scroll
  AOS.init({
    duration: 700,
    once: true,          // animate once per element
    offset: 80,          // px from bottom of viewport to trigger
    easing: 'ease-out-cubic',
  });

  // Bootstrap all modules
  initNav();
  initSmoothScroll();
  initStatCounters();
  initActiveSectionHighlight();
  initCardHoverTilt();
  initForms();
});


/* ─── Navigation: Scroll state + Mobile toggle ───────────────── */
function initNav() {
  const nav       = document.getElementById('nav');
  const toggle    = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  if (!nav) return;

  // Add "scrolled" class when page is scrolled past hero
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  };

  // Throttled scroll listener
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        onScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Run once on load
  onScroll();

  // Mobile menu toggle
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('open') &&
          !nav.contains(e.target)) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }
}


/* ─── Smooth Scroll for anchor links ────────────────────────────
   Overrides default jump behaviour and offsets for fixed nav    */
function initSmoothScroll() {
  const NAV_HEIGHT = parseInt(
    getComputedStyle(document.documentElement)
      .getPropertyValue('--nav-height') || '72',
    10
  );

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href').slice(1);
      if (!targetId) return;

      const target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();

      const top = target.getBoundingClientRect().top +
                  window.pageYOffset -
                  NAV_HEIGHT;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}


/* ─── Stat Counters (hero stats bar) ────────────────────────────
   Animate numbers from 0 to their final value on first view     */
function initStatCounters() {
  const statNumbers = document.querySelectorAll('.hero-stat-number');
  if (!statNumbers.length) return;

  // Parse the raw text, separating numeric value and suffix (+, etc.)
  const parseStatText = (text) => {
    const match = text.match(/^(\d+)(.*)$/);
    if (!match) return { value: 0, suffix: '' };
    return { value: parseInt(match[1], 10), suffix: match[2] };
  };

  // Easing function: ease out quad
  const easeOutQuad = (t) => t * (2 - t);

  const animateStat = (el, target, suffix, duration = 1400) => {
    const start = performance.now();

    const tick = (now) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = easeOutQuad(progress);
      const current  = Math.round(eased * target);

      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  };

  // Use IntersectionObserver to trigger on first view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);

      const { value, suffix } = parseStatText(entry.target.textContent);
      animateStat(entry.target, value, suffix);
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => observer.observe(el));
}


/* ─── Active Nav Link Highlight ──────────────────────────────────
   Highlights the current section's nav link as user scrolls     */
function initActiveSectionHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const NAV_HEIGHT = parseInt(
    getComputedStyle(document.documentElement)
      .getPropertyValue('--nav-height') || '72',
    10
  );

  const setActive = () => {
    let currentId = '';

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= NAV_HEIGHT + 80 && rect.bottom > NAV_HEIGHT + 80) {
        currentId = section.id;
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href').slice(1);
      link.style.color = href === currentId
        ? 'var(--color-text)'
        : '';
    });
  };

  let rafPending = false;
  window.addEventListener('scroll', () => {
    if (!rafPending) {
      requestAnimationFrame(() => {
        setActive();
        rafPending = false;
      });
      rafPending = true;
    }
  }, { passive: true });

  setActive();
}


/* ─── Subtle Card Tilt on Hover ─────────────────────────────────
   Adds a gentle 3-D tilt effect to cards on mouse move          */
function initCardHoverTilt() {
  // Apply to menu cards and about-feature cards
  const cards = document.querySelectorAll('.menu-card, .job-card');
  if (!cards.length) return;

  // Skip on touch devices
  if (window.matchMedia('(hover: none)').matches) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect    = card.getBoundingClientRect();
      const centerX = rect.left + rect.width  / 2;
      const centerY = rect.top  + rect.height / 2;

      const deltaX = (e.clientX - centerX) / (rect.width  / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);

      // Max tilt: 6 degrees
      const tiltX = -deltaY * 6;
      const tiltY =  deltaX * 6;

      card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.45s ease';
      setTimeout(() => { card.style.transition = ''; }, 500);
    });
  });
}


/* ─── Form Validation ────────────────────────────────────────────
   Handles the reservation form (#reservationForm) and the
   contact form (#contactForm). Validates on blur and on submit,
   shows animated error messages, and displays a success banner.  */

function initForms() {

  /* ── Validators ─────────────────────────────────────────────── */
  const rules = {
    required: (v) => v.trim() !== '' || 'This field is required.',
    email:    (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || 'Please enter a valid email address.',
    phone:    (v) => /^[\d\s\+\-\(\)]{7,20}$/.test(v.trim()) || 'Please enter a valid phone number.',
    guests:   (v) => {
      const n = parseInt(v, 10);
      if (isNaN(n) || n < 1) return 'Please enter at least 1 guest.';
      if (n > 40)             return 'Maximum party size is 40. Contact us for larger events.';
      return true;
    },
    futureDate: (v) => {
      if (!v) return 'Please select a date.';
      const selected = new Date(v);
      const today    = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today || 'Please choose today or a future date.';
    },
    select: (v) => (v && v !== '') || 'Please select an option.',
    minLength: (min) => (v) =>
      v.trim().length >= min || `Please enter at least ${min} characters.`,
  };

  /* ── Field validation helper ────────────────────────────────── */
  function validateField(field) {
    const wrap    = field.closest('.form-field');
    if (!wrap) return true;
    const errorEl = wrap.querySelector('.form-error');
    const checks  = field.dataset.validate ? field.dataset.validate.split(' ') : [];

    let msg = null;

    for (const check of checks) {
      let result;
      if (check === 'required')   result = rules.required(field.value);
      else if (check === 'email') result = rules.email(field.value);
      else if (check === 'phone') result = rules.phone(field.value);
      else if (check === 'guests') result = rules.guests(field.value);
      else if (check === 'future-date') result = rules.futureDate(field.value);
      else if (check === 'select') result = rules.select(field.value);
      else if (check.startsWith('min:')) {
        const min = parseInt(check.split(':')[1], 10);
        result = rules.minLength(min)(field.value);
      }

      if (result !== true) { msg = result; break; }
    }

    if (msg) {
      wrap.classList.remove('is-valid');
      wrap.classList.add('is-error');
      if (errorEl) errorEl.textContent = msg;
      return false;
    } else {
      wrap.classList.remove('is-error');
      // Only show green tick if the field actually has a value
      if (field.value.trim() !== '') wrap.classList.add('is-valid');
      if (errorEl) errorEl.textContent = '';
      return true;
    }
  }

  /* ── Wire up a form ─────────────────────────────────────────── */
  function wireForm(formId, successId) {
    const form    = document.getElementById(formId);
    const success = document.getElementById(successId);
    if (!form) return;

    const fields = form.querySelectorAll('[data-validate]');

    // Validate on blur for each field
    fields.forEach(field => {
      field.addEventListener('blur', () => validateField(field));
      // Clear error state on first keystroke after an error
      field.addEventListener('input', () => {
        const wrap = field.closest('.form-field');
        if (wrap && wrap.classList.contains('is-error')) {
          validateField(field);
        }
      });
    });

    // Submit handler
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let allValid = true;
      fields.forEach(field => {
        if (!validateField(field)) allValid = false;
      });

      if (!allValid) {
        // Scroll first error into view
        const firstError = form.querySelector('.form-field.is-error');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
          firstError.querySelector('input, select, textarea')?.focus();
        }
        return;
      }

      // Simulate async submission
      const submitBtn = form.querySelector('.form-submit-btn');
      if (submitBtn) submitBtn.classList.add('is-loading');

      setTimeout(() => {
        if (submitBtn) submitBtn.classList.remove('is-loading');
        form.style.display = 'none';
        if (success) success.hidden = false;
        success?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 1200);
    });
  }

  /* ── Reservation form ───────────────────────────────────────── */
  // Add validation attributes to reservation form fields
  const resFields = {
    'res-name':    'required',
    'res-email':   'required email',
    'res-phone':   'required phone',
    'res-guests':  'required guests',
    'res-date':    'required future-date',
    'res-time':    'required select',
  };
  Object.entries(resFields).forEach(([id, rules]) => {
    const el = document.getElementById(id);
    if (el) el.dataset.validate = rules;
  });

  // Set date min to today
  const dateInput = document.getElementById('res-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  wireForm('reservationForm', 'resFormSuccess');

  /* ── Contact form ───────────────────────────────────────────── */
  const ctFields = {
    'ct-name':    'required',
    'ct-email':   'required email',
    'ct-topic':   'required select',
    'ct-message': 'required min:10',
  };
  Object.entries(ctFields).forEach(([id, rules]) => {
    const el = document.getElementById(id);
    if (el) el.dataset.validate = rules;
  });

  // Character counter for contact message
  const msgEl    = document.getElementById('ct-message');
  const countEl  = document.getElementById('ctMessageCount');
  const MAX_CHARS = 1000;
  if (msgEl && countEl) {
    const updateCount = () => {
      const len = msgEl.value.length;
      countEl.textContent = `${len} / ${MAX_CHARS}`;
      countEl.classList.toggle('near-limit', len >= MAX_CHARS * 0.85 && len < MAX_CHARS);
      countEl.classList.toggle('at-limit',   len >= MAX_CHARS);
      if (len > MAX_CHARS) {
        msgEl.value = msgEl.value.slice(0, MAX_CHARS);
      }
    };
    msgEl.addEventListener('input', updateCount);
    updateCount();
  }

  wireForm('contactForm', 'ctFormSuccess');
}

/* ─── Page transition on internal link click ─────────────────── */
(function initPageTransition() {
  // Only for links that go to another page (not anchors, not external)
  const pageLinks = document.querySelectorAll(
    'a[href]:not([href^="#"]):not([href^="http"]):not([href^="mailto"]):not([href^="tel"])'
  );

  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed; inset: 0; z-index: 9999;
    background: var(--color-bg);
    opacity: 0; pointer-events: none;
    transition: opacity 0.35s ease;
  `;
  document.body.appendChild(overlay);

  pageLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === window.location.pathname) return;

      e.preventDefault();
      overlay.style.pointerEvents = 'all';
      overlay.style.opacity = '1';

      setTimeout(() => {
        window.location.href = href;
      }, 360);
    });
  });

  // Fade in on page load
  window.addEventListener('pageshow', () => {
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.pointerEvents = 'none';
    }, 400);
  });
})();
