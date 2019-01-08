//=======User js=============
$(document).ready(function() {
  $('.header_top_lang_item').click(function () {
    // console.log( "clicked!" );
    $('.header_top_lang_item').removeClass('active');
    $(this).addClass('active');
  });
  //top-menu
  $('.header_bottom_main-menu_item').mouseenter(function (event) {
    $('.header_bottom_main-menu_item').removeClass('active');
    $(this).addClass('active')
  });
  /*$('.header_bottom_main-menu_item').mouseleave(function (event) {
    if ($(this).children().mouseenter(function () {
      console.log( "hovel to children submenu" );
    }))
      console.log( "no hovel to children submenu" );
    // $(this).removeClass('active');
  })*/
  //Slider
  $('.big-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
    // variableWidth: true
  });
});

