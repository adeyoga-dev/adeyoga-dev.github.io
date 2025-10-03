// ######################## Hitung tanggal 2 bulan dari hari ini
const today = new Date();
const twoMonthsLater = new Date(
  today.getFullYear(),
  today.getMonth() + 2,
  today.getDate()
);

// ######################## Hitung mundur
function updateCountdown() {
  const now = new Date();
  const diff = twoMonthsLater - now;

  if (diff <= 0) {
    $("#countdown").text("It's here!");
    return;
  }

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
});
