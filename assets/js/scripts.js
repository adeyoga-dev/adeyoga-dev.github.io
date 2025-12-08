$(document).ready(() => {
  // Mobile menu toggle
  $("#navToggle").on("click", function () {
    $("#navMenu").toggleClass("nav-menu--open");
  });

  // Menu navigation active state
  $("#navMenu li").on("click", function () {
    $("#navMenu li").removeClass("nav-menu--active");
    $(this).addClass("nav-menu--active");

    // Close mobile menu after selection
    if (window.innerWidth <= 768) {
      $("#navMenu").removeClass("nav-menu--open");
    }
  });

  // Close mobile menu when clicking outside
  $(document).on("click", function (e) {
    if (!$(e.target).closest("nav").length && $("#navMenu").hasClass("nav-menu--open")) {
      $("#navMenu").removeClass("nav-menu--open");
    }
  });

  // Set footer year
  $("#footer-year").text(new Date().getFullYear());
});
