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

var popup = document.getElementById("popup-show");
var tutup = document.getElementsByClassName("close-btn");
var btn = document.getElementById("myButton");

btn.onclick = function(){
    popup.style.display = "block !important";
};

tutup.onclick = function(){
    popup.style.display = "none";
};
