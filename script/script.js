
// to show background color on scroll
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 80) {
      $(".navbar").css("background", "#fbeaea");
    }
    else {
      $(".navbar").css("background", "none");
    }
  })
})