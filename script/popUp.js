$(window).load(function () {
    $(".trigger_popup_fricc").click(function(){
       $('.popup-div').show();
    });
    $('.popup-div-send-btn').click(function(){
        $('.popup-div').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.popup-div').hide();
    });
});