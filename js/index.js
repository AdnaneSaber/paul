$(".rec").on("click", function () {
  let img = $(this).children("img").attr("src");
  $("body").css("overflow", "hidden");
  $(".zoomed")
    .css({ backgroundImage: `url(${img})` })
    .addClass("open")
    .on("click", function () {
      $(".mask").removeClass("open");
      $(".zoomed").removeClass("open");
      $("body").css("overflow", "visible");
    });
  $(".mask")
    .addClass("open")
    .on("click", function () {
      $(".zoomed").removeClass("open");
      $(this).removeClass("open");
      $("body").css("overflow", "visible");
    });
});
