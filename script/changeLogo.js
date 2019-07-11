// change logo on scroll
$(function () { 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) { 
            $('.navbar .navbar-brand img').attr('src','img/brand-dark.png');
        }
        if ($(this).scrollTop() < 80) { 
            $('.navbar .navbar-brand img').attr('src','img/brand-light.png');
        }
    })
  });
  