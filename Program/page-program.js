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

// document.querySelectorAll(".box-section").addEventListener("click",function(){
//     document.querySelector(".popup").classList.add("show");
// });

// document.querySelector(".popup .close-btn").addEventListener("click",function(){
//     document.querySelector(".popup").classList.remove("show");
// });

let popup = document.querySelector(".popup");
let close = document.querySelector(".close-btn");
let muncul = document.querySelector(".box");

muncul.addEventListener("click", function(){
    popup.style.display = "flex";
    popup.classList.add("show");
});
