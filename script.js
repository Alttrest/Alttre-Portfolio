/* ============================================================
   Ali Turan Portfolio — JavaScript
   Progressive enhancement: everything works without JS.
   ============================================================ */

(function () {
  'use strict';

  // Mark JS as enabled for reveal animations
  document.documentElement.classList.add('js-enabled');

  /* ─── Navigation ─── */
  const header = document.getElementById('site-header');
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.getElementById('nav-menu');
  const overlay = document.getElementById('nav-overlay');
  const navLinks = menu.querySelectorAll('.nav__link');

  function openMenu() {
    toggle.classList.add('is-active');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Menüyü kapat');
    menu.classList.add('is-open');
    overlay.classList.add('is-visible');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Menüyü aç');
    menu.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', function () {
    if (menu.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      closeMenu();
      toggle.focus();
    }
  });

  // Close menu on nav link click (mobile)
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (menu.classList.contains('is-open')) {
        closeMenu();
      }
    });
  });

  // Header scroll effect
  let lastScroll = 0;
  let ticking = false;

  function updateHeader() {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
    lastScroll = scrollY;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });

  /* ─── Smooth Scroll (fallback for anchor links) ─── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var headerHeight = header.offsetHeight;
        var targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ─── Scroll Reveal ─── */
  var revealElements = document.querySelectorAll('.js-reveal');

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show everything
    revealElements.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ─── Back to Top ─── */
  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ─── Active nav link highlighting ─── */
  var sections = document.querySelectorAll('section[id]');

  if ('IntersectionObserver' in window) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.classList.remove('is-active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('is-active');
            }
          });
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '-80px 0px -40% 0px'
    });

    sections.forEach(function (section) {
      navObserver.observe(section);
    });
  }

  /* ─── Dynamic data loading from data.json ─── */
  // This enables GitHub-based content editing:
  // Edit data.json on GitHub → changes reflect on the live site

  function loadDynamicData() {
    fetch('data.json')
      .then(function (response) {
        if (!response.ok) return;
        return response.json();
      })
      .then(function (data) {
        if (!data) return;

        // Update profile info if elements exist
        var heroName = document.querySelector('.hero__name');
        var heroAlias = document.querySelector('.hero__alias');
        var heroTitle = document.querySelector('.hero__title');
        var heroTagline = document.querySelector('.hero__tagline');

        if (data.profile) {
          if (heroName && data.profile.name) heroName.textContent = data.profile.name;
          if (heroAlias && data.profile.alias) heroAlias.textContent = '/ ' + data.profile.alias;
          if (heroTitle && data.profile.title) heroTitle.textContent = data.profile.title;
          if (heroTagline && data.profile.tagline) heroTagline.textContent = data.profile.tagline;

          // Update pet badge
          if (data.profile.pet) {
            var badgeText = document.querySelector('.hero__badge-text');
            if (badgeText) {
              badgeText.textContent = data.profile.pet.name + ' — ' + data.profile.pet.role;
            }
          }

          // Update contact links
          if (data.profile.email) {
            var emailLink = document.querySelector('a[href^="mailto:"]');
            if (emailLink) {
              emailLink.href = 'mailto:' + data.profile.email;
              var emailSpan = emailLink.querySelector('span');
              if (emailSpan) emailSpan.textContent = data.profile.email;
            }
          }

          if (data.profile.github) {
            var githubLink = document.querySelector('a[href*="github.com"]');
            if (githubLink) {
              githubLink.href = data.profile.github;
              var ghSpan = githubLink.querySelector('span');
              if (ghSpan) ghSpan.textContent = data.profile.github.replace('https://', '');
            }
          }
        }

        // Update document title
        if (data.profile && data.profile.name) {
          document.title = data.profile.name + ' — Geliştirici & Maker';
        }
      })
      .catch(function () {
        // Silent fail — static HTML content is already complete
      });
  }

  // Load data on page ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadDynamicData);
  } else {
    loadDynamicData();
  }

})();
