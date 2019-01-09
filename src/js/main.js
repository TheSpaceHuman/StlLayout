//=======User js=============
$(document).ready(function() {
  $('.header_top_lang_item').click(function () {
    // console.log( "clicked!" );
    $('.header_top_lang_item').removeClass('active');
    $(this).addClass('active');
  });
  //top-menu
  $('.header_bottom_main-menu_item').mouseover(function (event) {
    $('.header_bottom_main-menu_item').removeClass('active');
    $(this).addClass('active')
  });
  $('.header_bottom_main-menu_items.lvl-2').mouseleave(function (event) {
     $('.header_bottom_main-menu_item').removeClass('active');
  });
  // $(".drop")
  //     .mouseover(function() {
  //       $(".dropdown").show(300);
  //     });
  // $(".drop")
  //     .mouseleave(function() {
  //       $(".dropdown").hide(300);
  //     });
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
  $('.slider-apply').slick({
    infinite: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4
  });

  $('.photo-slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1
  });
  //Goods-icons
  $('.main_goods_item_img-icon').mouseenter(function (event) {
    $('.main_goods_item_img-icon').removeClass('active');
    $(this).addClass('active')
  });
  $('.main_goods_item_img-icon').mouseleave(function (event) {
    $('.main_goods_item_img-icon').removeClass('active');
  });
});

