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
var tutup = document.getElementById("close-btn");
var btns = document.querySelectorAll(".btn-content"); 
// var popup1 = document.getElementById("popup1");
// var submitBtn = document.getElementById("btn1");
// var ok = document.getElementById("ok")

btns.forEach(btn => {
    btn.onclick = function(){
        popup.style.display = "block";
    };
});

tutup.onclick = function(){
    popup.style.display = "none";
};

// // Kirim data
// document.addEventListener("DOMContentLoaded", function () {
//     var submitButton = document.querySelector(".btn1");

//     submitButton.addEventListener("click", function (e) {
//         e.preventDefault();

//         var nama = document.getElementById("nama").value;
//         var email = document.getElementById("email").value;
//         var umur = document.getElementById("umur").value;
//         var jenjang = document.getElementById("jenjang").value;
//         var kode = document.getElementById("kode").value;

//         console.log("Nama: " + nama);
//         console.log("Email: " + email);
//         console.log("Umur: " + umur);
//         console.log("Jenjang Sekolah: " + jenjang);
//         console.log("Kode Promo: " + kode);

//         resetFormInputs();
//     });
// });

// // Popup Thank
// let popup1 = document.getElementById("popup1");

// function openPopup() {
//     popup1.classList.add("open-popup");
// }

// function closePopup() {
//     popup1.classList.remove("open-popup");
// }

// //mereset nilai input
// function resetFormInputs() {
//     document.getElementById("nama").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("umur").value = "";
//     document.getElementById("jenjang").value = "SD"; 
//     document.getElementById("kode").value = "";
// }





