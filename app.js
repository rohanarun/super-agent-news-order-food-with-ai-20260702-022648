(function(){
  try {
    if (!window.gsap) return;
    gsap.from('.hero h1', { y: 24, opacity: 0, duration: 0.9, ease: 'power3.out' });
    gsap.from('.hero-sub', { y: 20, opacity: 0, duration: 0.9, delay: 0.1, ease: 'power3.out' });
    gsap.from('.hero-actions', { y: 18, opacity: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' });
    gsap.from('.media-frame', { y: 30, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' });

    gsap.utils.toArray('.bento-item, .compare-card').forEach(function(el){
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 80%' },
        y: 22,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out'
      });
    });
  } catch (e) {
    /* animations optional */
  }
})();