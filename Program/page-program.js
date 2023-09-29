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

const popup = document.getElementById("popup-show");
const tutup = document.getElementsByClassName("close-btn");
const btn = document.getElementsByClassName("btnContent");

btn.onclick = function(){
    popup.style.display = "block !important";
};

tutup.onclick = function(){
    popup.style.display = "none";
};

