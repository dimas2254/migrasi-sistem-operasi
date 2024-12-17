// Tambahkan efek dinamis seperti animasi ketika elemen masuk ke layar
document.addEventListener("DOMContentLoaded", () => {
  const yearElements = document.querySelectorAll(".year");

  // Fungsi untuk memeriksa apakah elemen ada di layar
  const isInView = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  // Fungsi untuk memberikan kelas aktif pada elemen yang masuk ke layar
  const checkYearElements = () => {
    yearElements.forEach((el) => {
      if (isInView(el)) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", checkYearElements);
  checkYearElements();
});
