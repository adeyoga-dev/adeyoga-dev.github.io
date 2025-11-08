$(document).ready(() => {
  // ######################## Menu navigasi aktif
  $(".menu").on("click", function () {
    $(".menu").removeClass("selected");
    $(this).addClass("selected");
  });

  // ######################## Set tahun di footer
  $("#footer-year").text(new Date().getFullYear());

  // // ######################## Inisialisasi tema dari localStorage atau atribut awal
  // (function initTheme() {
  //   const saved = localStorage.getItem("color-scheme");
  //   const $body = $("body");
  //   const $icon = $("#theme-icon");

  //   if (saved === "dark" || saved === "light") {
  //     $body.attr("data-color-scheme", saved);
  //     $icon.text(saved === "dark" ? "🌙" : "☀️");
  //   } else {
  //     const current = $body.attr("data-color-scheme") || "light";
  //     $icon.text(current === "dark" ? "🌙" : "☀️");
  //   }
  // })();

  // // ######################## Toggle tema gelap/terang
  // $("#theme-icon").on("click", function () {
  //   const $body = $("body");
  //   const $icon = $(this);
  //   let scheme = $body.attr("data-color-scheme");

  //   if (scheme === "dark") {
  //     $body.attr("data-color-scheme", "light");
  //     localStorage.setItem("color-scheme", "light");
  //     $icon.text("☀️");
  //   } else {
  //     $body.attr("data-color-scheme", "dark");
  //     localStorage.setItem("color-scheme", "dark");
  //     $icon.text("🌙");
  //   }
  // });
});
