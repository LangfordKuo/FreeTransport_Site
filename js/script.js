document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

  var parallax = document.querySelectorAll('.parallax');
  M.Parallax.init(parallax);
});

// 初始化滚动监听
var scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {throttle: 100});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
  var nav = document.querySelector('nav');
  if(window.scrollY > 300) {
    nav.classList.add('nav-scrolled');
  } else {
    nav.classList.remove('nav-scrolled');
  }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});