document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('modo-toggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    toggle.textContent = document.body.classList.contains('light-mode') ? '🌙 Modo Oscuro' : '☀️ Modo Claro';
  });

  document.addEventListener('mousemove', e => {
    const blobs = document.querySelectorAll('.blob');
    blobs.forEach((blob, i) => {
      const speed = (i + 1) * 0.02;
      const x = (window.innerWidth / 2 - e.pageX) * speed;
      const y = (window.innerHeight / 2 - e.pageY) * speed;
      blob.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
});
