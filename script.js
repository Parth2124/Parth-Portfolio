// Example: Smooth Scroll for Navbar Links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });
  