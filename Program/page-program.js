document.addEventListener("DOMContentLoaded", function(){
    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar-program");

    if (menu && navbar){
        menu.onclick = () => {
            menu.classList.toggle("bx-x");
            navbar.classList.toggle("active");
        };
    }
});

var popup = document.getElementById("popup-show");
var tutup = document.getElementById("close-btn");
var btns = document.querySelectorAll(".btn-content"); // Menggunakan class sebagai pengganti id

btns.forEach(btn => {
    btn.onclick = function(){
        popup.style.display = "block";
    };
});

tutup.onclick = function(){
    popup.style.display = "none";
};
