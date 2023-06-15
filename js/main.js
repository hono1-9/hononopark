$(function ($) {
  $(".modal-button").modaal();

  $('nav a[href^="#"]').click(function () {
    var adjust = 0;
    var speed = 1000;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - adjust;
    $("body,html").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
    return false;
  });

  $(function () {
    $(".hamburger").click(function () {
      $(this).toggleClass("active");

      if ($(this).hasClass("active")) {
        $(".globalMenuSp").addClass("active");
      } else {
        $(".globalMenuSp").removeClass("active");
      }
    });
  });

  $('.globalMenuSp a[href^="#"]').on("click", function () {
    $(".hamburger").click(); // .menuを

    return false; //a要素のリンク先移動防ぐ
  });
});
