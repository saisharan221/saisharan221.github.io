// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
  });
  
  // GSAP example: Fade in hero text
  gsap.from("header h1", {opacity:0, y:-50, duration:1});
  gsap.from("header p", {opacity:0, y:50, duration:1, delay:0.5});
  
  // Dark Mode Toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  const htmlEl = document.documentElement;
  
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    htmlEl.classList.add('dark');
  }
  
  darkModeToggle.addEventListener('click', () => {
    htmlEl.classList.toggle('dark');
    if (htmlEl.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.removeItem('theme');
    }
  });
  
  // Mobile menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  
  // Page Loader - Remove after load or timeout
  const loader = document.getElementById('page-loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hide');
      setTimeout(() => loader.remove(), 500);
    }, 500);
  });
  
  // Fallback if load event doesn’t trigger properly:
  setTimeout(() => {
    if (document.getElementById('page-loader')) {
      loader.classList.add('hide');
      setTimeout(() => loader.remove(), 500);
    }
  }, 3000);
  
  // Scroll spy to highlight active nav link
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('nav a.nav-link');
  
  function setActiveLink() {
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    let currentId = '';
    sections.forEach(section => {
      const offsetTop = section.offsetTop - 100;
      const offsetHeight = section.offsetHeight;
      if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
        currentId = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentId) {
        link.classList.add('active');
      }
      if (currentId === '' && link.getAttribute('href') === '#home') {
        link.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', setActiveLink);
  setActiveLink();
  