
$(document).ready(function(){

  for (let n = 9; n < 18; n++) {
    $("#hour-" + n + " .saveBtn").click(function() {
      console.log($("#hour-" + n + " .description").val());
      console.log("#hour-" + n + " .description");
      localStorage.setItem(n, $("#hour-" + n + " .description").val());
      // console.log(localStorage.getItem("12"));
    });
  }

  for (let n = 9; n < 18; n++) {
    if (n < dayjs().get("hour"))
      $("#hour-" + n).addClass("past");
    if (n > dayjs().get("hour"))
      $("#hour-" + n).addClass("future");
    if (n == dayjs().get("hour"))
      $("#hour-" + n).addClass("present");
    }

  for (let n = 9; n < 18; n++) {
    $("#hour-" + n + " .description").val(localStorage.getItem(n));
  }

  let currentHeaderDate = dayjs().format("dddd, MMMM DD YYYY");
  $("#currentDay").html(currentHeaderDate);
});
