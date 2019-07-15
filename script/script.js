
// to show background color on scroll
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if ($(window).width() > 768) {
      if (scroll > 80) {
        $(".navbar").css("background", "#fff");
        $(".nav-link-strong").css("color", "rgb(7, 53, 102)");
        $(".navbar").css("box-shadow", "rgb(195, 193, 193) 0px 0px 15px");
        // $('.navbar .navbar-brand img').attr('src','img/brand-dark.png');
      }

      else {
        $(".navbar").css("background", "none");
        $(".navbar").css("box-shadow", "none");
        $(".nav-link-strong").css("color", "rgb(255, 255, 255)");
        // $('.navbar .navbar-brand img').attr('src','img/brand-light.png');
      }
    }
    else {
      if (scroll > 80) {
        $(".navbar").css("background", "#fff");
        $(".nav-link-strong").css("color", "rgb(7, 53, 102)");
        $(".navbar").css("box-shadow", "rgb(195, 193, 193) 0px 0px 15px");
      }

      else {
        $(".navbar").css("background", "#fff");
        $(".navbar").css("box-shadow", "none");
        $(".nav-link-strong").css("color", "rgb(7, 53, 102)");
      }
    }
  })
})


// counter //from Stackover flow
$(function () {
  function isScrolledIntoView($elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  function count($this) {
    var current = parseInt($this.html(), 10);
    if (isScrolledIntoView($this) && !$this.data("isCounting") && current < $this.data('count')) {
      $this.html(++current);
      $this.data("isCounting", true);
      setTimeout(function () {
        $this.data("isCounting", false);
        count($this);
      }, 5);
    }
  }

  $(".c-section4").each(function () {
    $(this).data('count', parseInt($(this).html(), 10));
    $(this).html('0');
    $(this).data("isCounting", false);
  });

  function startCount() {
    $(".c-section4").each(function () {
      count($(this));
    });
  };

  $(window).scroll(function () {
    startCount();
  });

  startCount();
});
