$(document).ready(function () {
  // Copyright Text
  $("#copyright-year").text(new Date().getFullYear());

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
          emailInput.val(),
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
          budget: $("#budget").val(),
          message: $("#comments").val(),
        }), // now data come in this function
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        dataType: "json",
        success: function (data, status, jqXHR) {
          $("#form-spinner").hide();
          $("#my-form-status").html(
            `<div class="success-animation">
                <svg
                  class="checkmark"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                >
                  <circle
                    class="checkmark__circle"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                  />
                  <path
                    class="checkmark__check"
                    fill="none"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  />
                </svg>
              </div>
              <div>
                Thank you for your submission 🙌. Our team will
                be in touch with you soon.
              </div>`,
          );
          setTimeout(() => {
            $("#my-form-status").html("");
          }, 5000);
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
});

AOS.init({
  duration: 1000,
  offset: 120,
  easing: "ease-in-out",
});
