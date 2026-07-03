/* ==========================================================================
   Page behavior
   - hero photo variant
   - scroll-reveal animations (IntersectionObserver, one-way)
   - "Hire me" resume panel toggle
   ========================================================================== */

/** Which portrait to show in the hero: 'formal' or 'casual'. */
const HERO_PHOTO = 'formal';

function applyHeroPhoto() {
  const img = document.getElementById('heroPhoto');
  if (!img) return;
  img.src = HERO_PHOTO === 'casual'
    ? 'assets/images/photo-casual.png'
    : 'assets/images/photo-formal.png';
}

/**
 * Reveal-on-scroll for .reveal elements and .roll sections.
 * Elements animate in once when they enter the viewport and then stay put —
 * animating them back out on scroll-up (as the old version did) made
 * scrolling feel stuck while sections re-ran their transforms.
 */
function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal, .roll');

  // Stagger siblings: the 2nd, 3rd, ... reveal element inside the same
  // parent starts its transition 100ms after the previous one.
  targets.forEach((el) => {
    const siblings = Array.from(el.parentElement.children)
      .filter((child) => child.classList.contains('reveal'));
    const index = siblings.indexOf(el);
    if (index > 0) el.style.transitionDelay = `${index * 100}ms`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    // Trigger slightly before the element fully enters the viewport.
    { rootMargin: '0px 0px -8% 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}

/** Fade the nav to a translucent background once the page is scrolled. */
function initNavTransparency() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const update = () => nav.classList.toggle('nav--scrolled', window.scrollY > 10);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/** Expand/collapse the resume download panel next to the "Hire me" button. */
function initResumePanel() {
  const toggle = document.getElementById('resumeToggle');
  const panel = document.getElementById('resumePanel');
  const caret = document.getElementById('resumeCaret');
  if (!toggle || !panel) return;

  toggle.addEventListener('click', () => {
    const open = panel.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    if (caret) caret.textContent = open ? '✕' : '↗';
  });
}

applyHeroPhoto();
initScrollReveal();
initNavTransparency();
initResumePanel();
