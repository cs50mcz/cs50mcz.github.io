(() => {
  const sidenav = document.querySelector('.sidenav');

  document.addEventListener('click', (evnt) => {
    const target = evnt.target;
    console.log(target);

    if (target.classList.contains('ham-menu')) {
      sidenav.style.display = 'block';
    } else if (target.classList.contains('close-btn')) {
      sidenav.style.display = 'none';
    }
  });

  window.addEventListener('resize', (evnt) => {
    const screenWidth = window.screen.width;
    if (screenWidth >= 1025 && sidenav.style.display === 'none') {
      sidenav.style.display = 'block';
    } else if (screenWidth < 1025 && sidenav.style.display === 'block') {
      sidenav.style.display = 'none';
    }
  });
})();
