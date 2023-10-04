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
var ok = document.getElementById("ok")
var popupThx = document.getElementById("popup1")
var btn1 = document.getElementById("btn1");



ok.onclick = function(){
    popupThx.style.display = "none";
};


btns.forEach(btn => {
    btn.onclick = function(){
        popup.style.display = "block";
    };
});

tutup.onclick = function(){
    popup.style.display = "none";
};



function validate(){
    var nama = document.getElementById("nama");
    var email = document.getElementById("email");
    var umur = document.getElementById("umur");
    var jenjang = document.getElementById("jenjang");
    var pilihProgram = document.getElementById("pilihProgram");
    var popup1 = document.getElementById("popup1");
   

    if(nama.value == "" || email.value == "" || umur.value == "" || jenjang.value == "" || pilihProgram.value == "" ){
        document.addEventListener('submit', (e) =>{
            e.preventDefault();
        });
    }
    else{
        popup1.style.display = "block";
        // alert("Terima kasih telah mendaftar");
    };

    
};






