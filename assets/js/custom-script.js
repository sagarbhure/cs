$(document).ready(function () {
  // Copyright Text
  $("#copyright-year").text(new Date().getFullYear());

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function (start, value, id) {
    var localStart = start;
    setInterval(function () {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 40);
  };

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }

  var contactForm = $("#submit-now");
  contactForm.click(function (event) {
    event.preventDefault();
    var nameInput = $("#name");
    var phoneInput = $("#phone");
    var emailInput = $("#email");
    var isNameValid = false;
    var isPhoneValid = false;
    var isEmailValid = false;
    var formData = document.getElementById("contact-form");
    if ((nameInput.val() || "").length <= 0) {
      nameInput.attr("class", "form-control input-fill invalid-input");
    } else {
      isNameValid = true;
      nameInput.attr("class", "form-control input-fill");
    }

    if ((phoneInput.val() || "") <= 0) {
      phoneInput.attr("class", "form-control input-fill invalid-input");
    } else {
      if (/^(\+91[\-\s]?)?(?:\d{10})$/.test(phoneInput.val())) {
        isPhoneValid = true;
        phoneInput.attr("class", "form-control input-fill");
      } else {
        phoneInput.attr("class", "form-control input-fill invalid-input");
      }
    }

    if ((emailInput.val() || "") <= 0) {
      emailInput.attr("class", "form-control input-fill invalid-input");
    } else {
      if (
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
          emailInput.val()
        )
      ) {
        isEmailValid = true;
        emailInput.attr("class", "form-control input-fill");
      } else {
        emailInput.attr("class", "form-control input-fill invalid-input");
      }
    }

    if (isNameValid && isPhoneValid && isEmailValid) {
      $("#form-spinner").show();
      $.ajax({
        type: formData.method,
        url: formData.action,
        data: JSON.stringify({
          name: $("#name").val(),
          phone: $("#phone").val(),
          email: $("#email").val(),
          message: $("#comments").val(),
        }), // now data come in this function
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        dataType: "json",
        success: function (data, status, jqXHR) {
          $("#form-spinner").hide();
          $("#my-form-status").html("Thanks for your submission!");
          setTimeout(() => {
            $("#my-form-status").html("");
          }, 3000);
          $("#name").val("");
          $("#phone").val("");
          $("#email").val("");
          $("#comments").val("");
        },
        error: function (jqXHR, status) {
          $("#form-spinner").hide();
          // error handler
          console.log(jqXHR);
          alert("fail" + status.code);
        },
      });
    }
  });

  var myModal;
  $(".read-more").click(function () {
    var contentId = $(this).data("content");
    var content = $(contentId).html();
    $("#modal-content").html(content);
    myModal = new HystModal({
      catchFocus: true,
      waitTransitions: true,
      closeOnEsc: false,
    });
    myModal.open("#myModal");

    $(".modal-contact-us-button").click(function () {
      // if (myModal) {
      myModal.close();
      // scrollDivTo("#contact-us-form");
      // } else {
      window.location.href = "contact.html";
      // }
    });
  });
});

$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 3300,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});
