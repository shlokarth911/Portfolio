
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
  lerp: 0.09,
  smartphone: {
    smooth: true,
  },
  tablet: {
    smooth: true
  }
});

document.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function(event) {
      event.preventDefault();
      const href = this.href;
      document.body.classList.add('exit-animation');

      setTimeout(function () {
          window.location.href = href;
      }, 800);
  });
});


const navToggleBtn = document.querySelector('.nav-toggle-btn');
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-links');
  const navLinksItems = document.querySelectorAll('.nav-links li');

  navToggleBtn.addEventListener('click', () => {
      navbar.classList.toggle('active');
      navLinks.classList.toggle('active');

      if (navbar.classList.contains('active')) {
          navToggleBtn.textContent = '×';
          navLinksItems.forEach((item, index) => {
              item.style.animation = `fadeInnav 0.6s ease forwards ${index / 10 + 0.1}s`;
          });
      } else {
          navToggleBtn.textContent = '=';
          navLinksItems.forEach((item) => {
              item.style.animation = 'none';
          });
      }
  });


window.addEventListener('DOMContentLoaded', initScroll);

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    initScroll();
  }, 200);
});


 function updateLocalTime() {
   var options = { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit' };
   var localTime = new Date().toLocaleTimeString('en-US', options);
   document.querySelector('#local-time').textContent = '' + localTime;
  }
  
  // Update time every minute (60000 milliseconds)
  setInterval(updateLocalTime, 60000);
  
  // Initial call to display time immediately
  updateLocalTime();
  
  
  const toggleSwitch = document.getElementById('toggleButton');
  
        toggleSwitch.addEventListener('change', () => {
          if (toggleSwitch.checked) {
            document.body.classList.add('dark-mode');
          } else {
                document.body.classList.remove('dark-mode');
              }
});        

