let urls = [
  "https://drive.google.com/uc?id=1Yc2BQDm5bpeHE3sbAIPZv-OP3qTEypIF",
  "https://drive.google.com/uc?id=1stEJ3RjfuIO4EKpZ0lqjXt7sAVtdym5F",
  "https://drive.google.com/uc?id=1stJCECyV7DENr2ybAPIglBP0AQs6uUjY"
];
let active = 0;

$(document).ready(() => {
  $(".circle").each((index, circle) => {
    $(circle).click(() => {
      $("#carousel img").attr("src", urls[index]);
      $(".circle").css("background-color", "#FFFFFF");
      $(circle).css("background-color", "#686868");
      active = index;
    });
  });
  setInterval(() => {
    $(".circle").eq(++active % 3).click();
  }, 5000)
});