$(".rec").on("click", function () {
  // this is
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
let count = 0;
const bgs = [
  "landingFirstbg.png",
  "landingSecondbg.png",
  "landingThirdbg.png",
  "planting.png",
];

var timer = $.timer(
  function () {
    $("#landingDiv").css({ backgroundImage: `url(static/${bgs[count]})` });

    if (count === bgs.length - 1) {
      count = 0;
    } else {
      count++;
    }
  },
  2000,
  true
);
timer.pause();
$("#toggler").popover({ trigger: "hover" });
$("#toggler").on("click", function () {
  console.log($(this).html());
  if ($(this).html() === "On") {
    $(this).css({ backgroundColor: "#dc3545" });
    $(this).html("Off");
    timer.play();
  } else {
    $(this).html("On");
    $(this).css({ backgroundColor: "#5abf28" });
    timer.pause();
  }
});
