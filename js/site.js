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
})();
