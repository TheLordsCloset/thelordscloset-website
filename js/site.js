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
      var note = form.querySelector("[data-signup-note]");
      var email = form.querySelector('input[type="email"]');
      if (note) {
        note.textContent = "Thanks! We’ll add " + (email && email.value ? email.value : "you") + " to our list soon.";
        note.classList.remove("hidden");
      }
      form.reset();
    });
  });
})();
