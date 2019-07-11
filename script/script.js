
// to show background color on scroll
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 80) {
      $(".navbar").css("background", "#fff");
      $(".navbar").css("box-shadow", "rgb(195, 193, 193) 0px 0px 15px");
    }
    else {
      $(".navbar").css("background", "none");
      $(".navbar").css("box-shadow", "none");
    }
  })
})

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
