document.addEventListener("DOMContentLoaded", function(){
    let menu = document.querySelector ("#menu-icon");
    let navbar = document.querySelector (".navbar-program");

    if (menu && navbar){
    menu.onclick = () => {
        menu.classList.toggle("bx-x");
        navbar.classList.toggle("active");
    };
}
});

// var popup = document.getElementById("popup-show");
// var tutup = document.getElementsByClassName("close-btn");
// var btn = document.getElementByClassName("btn-content");

// btn.onclick = function(){
//     popup.style.display = "block !important";
// };

// tutup.onclick = function(){
//     popup.style.display = "none";
// };

const buttonOpenPopup = document.querySelector("#tombol-muncul-popup");
const popup = document.querySelector("#popup-show");

buttonOpenPopup.addEventListener("click",function() {
    popup.style.display = "block";
});

const buttonClosePopup = document.querySelector(".close-btn");

buttonClosePopup.addEventListener("click", function () {
    popup.style.display = "none"; // Menutup pop-up
});

window.addEventListener("click", function (event) {
    if (event.target === popup) {
        popup.style.display = "none"; // Menutup pop-up
    }
});
