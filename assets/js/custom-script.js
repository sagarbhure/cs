$(document).ready(function () {
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
/*******/

// type animation
window.ityped.init(document.querySelector(".our-services-section .ityped"), {
  strings: ["Our Services"],
  typeSpeed: 0,
  backSpeed: 0,
  loop: false,
});

window.ityped.init(document.querySelector(".about-us-section .ityped"), {
  strings: ["about us"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

window.ityped.init(document.querySelector(".partners-section .ityped"), {
  strings: ["Partners"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
window.ityped.init(document.querySelector(".who-we-are-section .ityped"), {
  strings: ["Who we are"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
window.ityped.init(document.querySelector(".section-2 .ityped"), {
  strings: ["What we do"],
  typeSpeed: 0,
  backSpeed: 0,
  loop: false,
});
window.ityped.init(document.querySelector(".pricing-plan-section .ityped"), {
  strings: ["What we offer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
window.ityped.init(document.querySelector(".our-teams-section .ityped"), {
  strings: ["Our team"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
window.ityped.init(document.querySelector(".carousel-section .ityped"), {
  strings: ["Cyber Security"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
window.ityped.init(document.querySelector(".contact-us-form .ityped"), {
  strings: ["Get Started Now"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
window.ityped.init(document.querySelector(".faq-section .ityped"), {
  strings: ["Popular Questions"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

// var form = document.getElementById("contact-form");

// async function handleSubmit(event) {
//   event.preventDefault();
//   const nameInput = document.getElementById("name");
//   const phoneInput = document.getElementById("phone").value;
//   const emailInput = document.getElementById("email").value;
//   if (nameInput.value === "") {
//     nameInput.setAttribute("class", "invalid-input");
//   } else {
//     nameInput.removeAttribute("invalid-input");
//   }
//   if (phoneInput.value === "") {
//     phoneInput.setAttribute("class", "invalid-input");
//   } else {
//     phoneInput.removeAttribute("invalid-input");
//   }
//   if (emailInput.value === "") {
//     emailInput.setAttribute("class", "invalid-input");
//   } else {
//     emailInput.removeAttribute("invalid-input");
//   }

//   console.log(data);
//   console.log("event.target");

//   // var status = document.getElementById("my-form-status");
//   // fetch(event.target.action, {
//   //   method: form.method,
//   //   body: data,
//   //   headers: {
//   //     Accept: "application/json",
//   //   },
//   // })
//   //   .then((response) => {
//   //     if (response.ok) {
//   //       status.innerHTML = "Thanks for your submission!";
//   //       form.reset();
//   //     } else {
//   //       response.json().then((data) => {
//   //         if (Object.hasOwn(data, "errors")) {
//   //           status.innerHTML = data["errors"]
//   //             .map((error) => error["message"])
//   //             .join(", ");
//   //         } else {
//   //           status.innerHTML = "Oops! There was a problem submitting your form";
//   //         }
//   //       });
//   //     }
//   //   })
//   //   .catch((error) => {
//   //     status.innerHTML = "Oops! There was a problem submitting your form";
//   //   });
// }
// form.addEventListener("submit", handleSubmit);
