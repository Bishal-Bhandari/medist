$(window).load(function () {
    $(".trigger-popup-div").click(function () {
        $('.popup-div').show();
    });
    $('.popup-div-close-btn').click(function () {
        $('.popup-div').hide();
    });
    $('.popupCloseButton').click(function () {
        $('.popup-div').hide();
    });
});