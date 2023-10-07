document.addEventListener("DOMContentLoaded", function () {
  let menu = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar-promo");

  if (menu && navbar) {
    menu.onclick = () => {
      menu.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };
  }
});

function getPromo() {
  fetch("http://localhost:3000/promo")
    .then((response) => response.json())
    .then((dataArray) => {
      dataArray.forEach((data, index) => {
        // Menggunakan template string untuk membuat ID unik berdasarkan indeks
        const CartItemId = `card-item-${index + 1}`;
        const contentContainer = document.getElementById(CartItemId);

        if (contentContainer) {
          const poster1Element = contentContainer.querySelector(".poster1");
          const text2Element = contentContainer.querySelector(".text2");
          const tanggalElement = contentContainer.querySelector(".tanggal");
          const tombolElement = contentContainer.querySelector(".tombol");
          // Set teks di dalam elemen-elemen yang sesuai
          poster1Element.src = data.url;
          text2Element.textContent = data.name;
          tanggalElement.textContent = data.tanggal;
          tombolElement.href = data.url;
        }
      });
    })
    .catch((error) => console.error("Error fetching content data:", error));
}

// Panggil getPromo saat halaman dimuat
document.addEventListener("DOMContentLoaded", getPromo);
