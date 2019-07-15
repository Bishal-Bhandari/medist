//// to show background color on scroll
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if ($(window).width() > 768) {
      if (scroll > 80) {
        $('.navbar .navbar-brand img').attr('src', 'img/brand-dark.png');
      }

      else {
        $('.navbar .navbar-brand img').attr('src', 'img/brand-light.png');
      }
    }
  })
})
//