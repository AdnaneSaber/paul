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
let count = 0;
const bgs = ["first.png", "second.png", "third.png"];
// window.setInterval(function () {
//   console.log(count);

//   if (count >= bgs.length) {
//     count = 0;
//   } else {
//     count++;
//   }
//   console.log(bgs[count]);
// }, 1000);
