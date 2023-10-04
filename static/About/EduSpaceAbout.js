document.addEventListener("DOMContentLoaded", 
function () {
    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar-about");
  
    if (menu && navbar) {
      menu.onclick = () => {
        menu.classList.toggle("bx-x");
        navbar.classList.toggle("active");
      };
    }
  });
