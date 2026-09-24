(function () {
  var root = document.documentElement;
  document.getElementById('kjYear').textContent = new Date().getFullYear();

  document.querySelectorAll('[data-kj-theme-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-bs-theme', next);
      try { localStorage.setItem('kj-theme', next); } catch (e) {}
    });
  });

  var nav = document.getElementById('kjNav');
  var onScroll = function () { nav.classList.toggle('is-scrolled', window.scrollY > 10); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var mobileNav = document.getElementById('mobileNav');
  var backdrop = document.getElementById('kjBackdrop');
  var collapse = bootstrap.Collapse.getOrCreateInstance(mobileNav, { toggle: false });
  mobileNav.addEventListener('show.bs.collapse', function () { backdrop.classList.add('show'); });
  mobileNav.addEventListener('hide.bs.collapse', function () { backdrop.classList.remove('show'); });
  backdrop.addEventListener('click', function () { collapse.hide(); });
  mobileNav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { collapse.hide(); }); });

  document.querySelectorAll('[data-kj-video]').forEach(function (box) {
    var btn = box.querySelector('.kj-video-poster');
    btn.addEventListener('click', function () {
      var f = document.createElement('iframe');
      f.src = 'https://customer-vp0c9qzcx9pjj9mi.cloudflarestream.com/' + box.getAttribute('data-kj-video') + '/iframe?autoplay=true&preload=auto';
      f.title = 'Kojo video';
      f.allow = 'accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen';
      f.allowFullscreen = true;
      box.replaceChild(f, btn);
    });
  });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var STAGGER = 120, MAX = 5, BASE = 150, vh = window.innerHeight, watch = [];
  document.querySelectorAll('main section').forEach(function (section) {
    var container = section.querySelector('.kj-container');
    if (!container) return;
    var children = Array.prototype.slice.call(container.children);
    var above = section.getBoundingClientRect().top < vh * 0.9;
    children.forEach(function (c, i) {
      var d = (above ? BASE : 0) + Math.min(i, MAX - 1) * STAGGER;
      if (d > 0) c.style.setProperty('--reveal-delay', d + 'ms');
      c.classList.add('kj-enter');
    });
    if (above) {
      requestAnimationFrame(function () { requestAnimationFrame(function () { children.forEach(function (c) { c.classList.add('is-visible'); }); }); });
    } else {
      watch.push(section);
    }
  });
  if (!watch.length) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      Array.prototype.forEach.call(e.target.querySelector('.kj-container').children, function (c) { c.classList.add('is-visible'); });
      io.unobserve(e.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  watch.forEach(function (s) { io.observe(s); });
})();