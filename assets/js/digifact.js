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

  $("#data-extraction-btn").trigger("click");

  $("#usecases-details").on("show.bs.collapse", function (e) {
    var $this = $(e.target);
    $(".highlighted").each(function () {
      $(this).removeClass("highlighted");
    });
    $("#" + $this.attr("id") + "-btn").addClass("highlighted");
    $("#usecases-details .collapse").not($this).collapse("hide");
  });
});
