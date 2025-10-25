$(document).ready(() => {
  // ######################## Inisialisasi
  setInterval(updateCountdown, 1000);

  // ######################## Menu navigasi aktif
  $(".menu").on("click", function () {
    $(".menu").removeClass("selected");
    $(this).addClass("selected");
  });

  // ######################## Set tahun di footer
  $("#footer-year").text(new Date().getFullYear());

  // ######################## Toggle tema gelap/terang
  $("#theme-icon").on("click", function () {
    let scheme = $("body").attr("data-color-scheme");

    if (scheme === "dark") {
      $("body").attr("data-color-scheme", "light");
      $(this).text("☀️");
    } else {
      $("body").attr("data-color-scheme", "dark");
      $(this).text("🌙");
    }
  });
});
