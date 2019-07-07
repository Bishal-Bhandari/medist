$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 80) {
      $(".navbar").css("background", "#fbeaea");
      // $(".navbar").css("color", " ");
      // $(".Navbar").css("width", "94%");
    }
    else {
      $(".navbar").css("background", "none");
      // $(".navbar").css("color", "#638bff");
    }
  })
})