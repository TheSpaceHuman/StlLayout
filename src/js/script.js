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
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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



  /*================== Menu open =====================*/
  $(".sidemenu-btn").on("click", function() {
    $(".wrapper").toggleClass("stop");
    $(".sidemenu").toggleClass("slidein");
    return false;
  });
  $(".close-menu").on("click", function() {
    $(".wrapper").removeClass("stop");
    $(".sidemenu").removeClass("slidein");
    return false;
  });
  $(".close_subs").on("click", function() {
    $(".alert.alert-success").addClass("nodisplay");
    return false;
  });

  $(".sidemenu-btn2").on("click", function() {
    $(".wrapper").toggleClass("stop");
    $(".sidemenu2").toggleClass("slidein");
    return false;
  });
  $(".close-menu2").on("click", function() {
    $(".wrapper").removeClass("stop");
    $(".sidemenu2").removeClass("slidein");
    return false;
  });
  $(".close_subs").on("click", function() {
    $(".alert.alert-success").addClass("nodisplay");
    return false;
  });
  $(".sidemenu2.slidein > ul > li").on("click", function() {
    $('.sidemenu2.slidein > ul > li').removeClass("active");
    $(this).addClass("active");
    return false;
  });

  /*================== Menu Dropdown =====================*/
  $(".sidemenu ul ul,.widget_nav_menu ul ul").parent().addClass("menu-item-has-children");
  $(".sidemenu ul li.menu-item-has-children > a").on("click", function() {
    $(this).parent().toggleClass("active").siblings().removeClass("active");
    $(this).next("ul").slideToggle();
    $(this).parent().siblings().find("ul").slideUp();
    return false;
  });

  $(".sidemenu2 ul ul,.widget_nav_menu ul ul").parent().addClass("menu-item-has-children");
  $(".sidemenu2 ul li.menu-item-has-children > a").on("click", function() {
    $(this).parent().toggleClass("active").siblings().removeClass("active");
    $(this).next("ul").slideToggle();
    $(this).parent().siblings().find("ul").slideUp();
    return false;
  });

  // $('[data-fancybox]').fancybox({
  //   youtube : {
  //     controls : 0,
  //     showinfo : 0
  //   },
  //   vimeo : {
  //     color : 'f00'
  //   }
  // });
});

