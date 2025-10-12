// ######################## Hitung tanggal 2 bulan dari hari ini
// ######################## Hitung mundur
function updateCountdown() {
  const now = new Date();
  const twoMonthsLater = new Date(
    now.getFullYear(),
    now.getMonth() + 2,
    now.getDate()
  );
  const diff = twoMonthsLater - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  $("#countdown").text(
    `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds left until Full launch! 🚀`
  );
}

$(document).ready(() => {
  // ######################## Inisialisasi
  updateCountdown();
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
