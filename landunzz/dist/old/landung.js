// scroll top when f5
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

$(document).ready(function () {
  const startDate = moment("2017-07-30", "YYYY-MM-DD");
  let currentDate = moment();
  //Difference in number of days
  let diff = currentDate.diff(startDate, "days");
  // Display date
  $(".bg-day").find("span").text(`${diff} ngày`);
  $(".bg-hour").find("span").text(`${currentDate.hour()} giờ`);
  $(".bg-minute").find("span").text(`${currentDate.minute()} phút`);
  $(".bg-second").find("span").text(`${currentDate.second()} giây`);

  setInterval(function () {
    $(".bg-second").find("span").text(`${currentDate.second()} giây`);
    $(".bg-minute").find("span").text(`${currentDate.minute()} phút`);
    $(".bg-hour").find("span").text(`${currentDate.hour()} giờ`);
  }, 1000);

  $(".item").click(function (event) {
    // Prevent default anchor click behavior
    event.preventDefault();
    // Store hash
    let hash = $(this).attr("atr");
    $("html, body").animate(
      {
        scrollTop: $("#" + hash).offset().top,
      },
      1000
    );
    // End if
  });
});
