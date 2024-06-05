const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
  lerp: 0.09,
});

document.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function(event) {
      event.preventDefault();
      const href = this.href;
      document.body.classList.add('exit-animation');

      setTimeout(function () {
          window.location.href = href;
      }, 400);
  });
});



$(document).ready(function() {
  const navLinks = document.querySelectorAll('.nav-a');
  const splash = document.getElementById('splash');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetUrl = link.getAttribute('href');
      splash.style.display = 'flex'; // Display the splash
      setTimeout(function() {
        splash.classList.add('splash-exit');
        setTimeout(function() {
          window.location.href = targetUrl;
        }, 1000); // Adjust this delay according to the duration of your exit animation
      }, 0); // Delay the animation start after 100 milliseconds
    });
  });

  // Hide splash initially
  splash.style.display = 'none';
});

