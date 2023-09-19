// style navbar ketika di scrol

window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 50);
});

// show/hide faq answer

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // change icon
    const icon = faq.querySelector(".faq_icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

// Inisialisasi indeks slide yang aktif
let currentSlideIndex = 0;

// Mendapatkan semua input radio
const radioInputs = document.querySelectorAll('input[type="radio"]');

// Fungsi untuk memindahkan slider ke slide berikutnya
function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % radioInputs.length;
  radioInputs[currentSlideIndex].checked = true;
}

// Fungsi untuk memindahkan slider ke slide sebelumnya
function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + radioInputs.length) % radioInputs.length;
  radioInputs[currentSlideIndex].checked = true;
}

// Fungsi untuk mengatur perpindahan otomatis setiap 5 detik
function autoSlide() {
  nextSlide();
  setTimeout(autoSlide, 5000); // Mengulang setiap 5 detik
}

// Memulai perpindahan otomatis pertama kali
autoSlide();

// Menambahkan event listener untuk navigasi label
const labelElements = document.querySelectorAll(".dots label");
labelElements.forEach((label, index) => {
  label.addEventListener("click", () => {
    currentSlideIndex = index;
  });
});

// show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block"; // Perbaiki typo di sini
  menuBtn.style.display = "none";
});

// close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);
