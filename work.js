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
  
