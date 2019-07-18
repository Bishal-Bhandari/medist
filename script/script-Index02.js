
// to show background color on scroll
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if ($(window).width() > 991) {
      if (scroll > 80) {
        $(".navbar").css("background", "#fff");
        $(".nav-link-strong-head-indexSecondary").css("color", "#073566");
        $(".navbar").css("box-shadow", "rgb(195, 193, 193) 0px 0px 15px");
      }

      else {
        $(".navbar").css("background", "none");
        $(".navbar").css("box-shadow", "none");
        $(".nav-link-strong-head-indexSecondary").css("color", "rgb(255, 255, 255)");
      }
    }
    else {
      if (scroll > 80) {
        $(".navbar").css("background", "rgb(34, 130, 178)");
        $(".navbar").css("box-shadow", "rgb(195, 193, 193) 0px 0px 15px");
      }

      else {
        $(".navbar").css("background", "rgb(34, 130, 178)");
        $(".navbar").css("box-shadow", "none");
        $(".nav-link-strong").css("color", "rgb(7, 53, 102)");
      }
    }
  })
})
