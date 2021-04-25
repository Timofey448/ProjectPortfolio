$(document).ready(function() {

  const menuToggle = document.querySelector('.toggle-menu');
  const mobMenu = document.querySelector('.header-menu');
  const overlayElement = document.querySelector('#overlay');
  const bodyElement = document.body;

  // Клик по гамбургер-меню
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    mobMenu.classList.toggle('active');
    overlayElement.classList.toggle('active');
    bodyElement.classList.toggle('noscroll');
  });


   // Клик по мобильному меню
   mobMenu.addEventListener('click', function() {
     this.classList.remove('active');
     menuToggle.classList.remove('active');
     overlayElement.classList.remove('active');
     bodyElement.classList.remove('noscroll');
   });


   // Закрытие mobMenu при клике по оверлэю
   overlayElement.addEventListener('click', function() {
    this.classList.remove('active');
    menuToggle.classList.remove('active');
    mobMenu.classList.remove('active');
    bodyElement.classList.remove('noscroll');
   });


   // Закрытие mobMenu при ресайзе экрана
   window.addEventListener('resize', function() {
    mobMenu.classList.remove('active');
    menuToggle.classList.remove('active');
    overlayElement.classList.remove('active');
     bodyElement.classList.remove('noscroll');
   });


   // Добавление класса для fix-menu при скроле страницы
   const fixMenu = document.querySelector('.fix-menu');

   window.addEventListener('scroll', function() {
     if (this.pageYOffset > 10) {
      fixMenu.classList.add('active');
    }
    else {
      fixMenu.classList.remove('active');
    }
  });
  
  //иконка скролла вверрх
  var smoothJumpUp = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollBy(0,-50);
      setTimeout(smoothJumpUp, 10);
    }
  }
  
  window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 100) {
      document.getElementById('upbutton').style.display = 'block';
    } else {
      document.getElementById('upbutton').style.display = 'none';
    }
  }
})

