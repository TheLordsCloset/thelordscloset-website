(function () {
  var toggle = document.querySelector("[data-nav-toggle]");
  var panel = document.querySelector("[data-nav-panel]");
  var iconOpen = document.querySelector("[data-nav-open]");
  var iconClose = document.querySelector("[data-nav-close]");

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      var isOpen = panel.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      if (iconOpen && iconClose) {
        iconOpen.classList.toggle("hidden", isOpen);
        iconClose.classList.toggle("hidden", !isOpen);
      }
    });
  }

  document.querySelectorAll("[data-signup-form]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (form.getAttribute("data-submitting") === "true") return;
      form.setAttribute("data-submitting", "true");

      var note = form.querySelector("[data-signup-note]");
      var email = form.querySelector('input[name="email"]');
      var emailValue = email && email.value ? email.value : "you";
      var body = new URLSearchParams(new FormData(form)).toString();

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body,
      })
        .then(function (response) {
          if (!response.ok) throw new Error("signup failed");
          if (note) {
            note.textContent = "Thanks! We’ll add " + emailValue + " to our list soon.";
            note.classList.remove("hidden");
          }
          form.reset();
        })
        .catch(function () {
          if (note) {
            note.textContent = "We couldn’t save that just now. Please try again.";
            note.classList.remove("hidden");
          }
        })
        .finally(function () {
          form.removeAttribute("data-submitting");
        });
    });
  });
})();
