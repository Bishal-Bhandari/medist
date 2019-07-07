
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