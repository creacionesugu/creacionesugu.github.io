/* ═══════════════════════════════════════════════════════
   CREACIONES U GU-  |  main.js
═══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ──────────────────────────────────────────
     1. NAVBAR — resaltar link activo al hacer scroll
  ────────────────────────────────────────── */
  const navLinks  = document.querySelectorAll('.navbar-links a');
  const sections  = document.querySelectorAll('section[id]');
  const headerH   = document.querySelector('header').offsetHeight + 20;

  function updateActiveLink() {
    let current = '';

    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - headerH) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink(); // ejecutar al cargar


  /* ──────────────────────────────────────────
     2. SCROLL SUAVE para links internos (respaldo)
  ────────────────────────────────────────── */
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  /* ──────────────────────────────────────────
     3. FORMULARIO DE CONTACTO — feedback visual
  ────────────────────────────────────────── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();

      const btn         = contactForm.querySelector('.btn-submit');
      const originalTxt = btn.textContent;

      btn.textContent = '✓  ¡Mensaje enviado!';
      btn.disabled    = true;
      btn.style.background = 'var(--sage)';

      // Reiniciar después de 3.5 s
      setTimeout(() => {
        btn.textContent      = originalTxt;
        btn.disabled         = false;
        btn.style.background = '';
        contactForm.reset();
      }, 3500);
    });
  }


  /* ──────────────────────────────────────────
     4. ANIMACIÓN DE ENTRADA (Intersection Observer)
     Las tarjetas y secciones aparecen al entrar al viewport
  ────────────────────────────────────────── */
  const animTargets = document.querySelectorAll(
    '.product-card, .omv-card, .hero-content, .contact-wrapper, .footer-top'
  );

  // Estado inicial: invisible y ligeramente desplazado
  animTargets.forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Delay escalonado para las tarjetas dentro del mismo grid
        const siblings = [...entry.target.parentElement.children];
        const idx      = siblings.indexOf(entry.target);
        const delay    = idx * 80; // ms entre cada tarjeta

        setTimeout(() => {
          entry.target.style.opacity   = '1';
          entry.target.style.transform = 'translateY(0)';
        }, delay);

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  animTargets.forEach(el => observer.observe(el));


  /* ──────────────────────────────────────────
     5. PLUMA FLOTANTE — seguimiento sutil del cursor
     Agrega una inclinación suave al moverse el mouse
  ────────────────────────────────────────── */
  const feather = document.querySelector('.hero-feather');
  if (feather) {
    document.addEventListener('mousemove', e => {
      const cx  = window.innerWidth  / 2;
      const cy  = window.innerHeight / 2;
      const dx  = (e.clientX - cx) / cx;  // -1 a 1
      const dy  = (e.clientY - cy) / cy;  // -1 a 1
      const rx  = dy * 8;   // inclinación vertical
      const ry  = dx * -8;  // inclinación horizontal

      feather.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    });

    // Restaurar al salir del área
    document.addEventListener('mouseleave', () => {
      feather.style.transform = '';
    });
  }

}); // fin DOMContentLoaded
