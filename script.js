// Animation au défilement des sections
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      section.classList.add('visible');
    }
  });
});

// Ajouter la classe 'visible' dans le CSS pour rendre les sections visibles
