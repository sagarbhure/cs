$(document).ready(function () {
  $("#copyright-year").text(new Date().getFullYear());

  new autoTyper({
    selector: ".typer-target",
    words: ["Deepfakes", "Identity Fraud", "Generated AI Document"],
    charSpeed: 85,
    delay: 800,
    loop: true,
    flipflop: false,
  }).start();

  AOS.init({
    duration: 1000,
    offset: 120,
    easing: "ease-in-out",
  });
});
