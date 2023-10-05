

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

// ok.onclick = function(){
//     popupThx.style.display = "none";
// };


btns.forEach(btn => {
    btn.onclick = function(){
        popup.style.display = "block";
    };
});

tutup.onclick = function(){
    popup.style.display = "none";
};


var nama = document.getElementById("nama")
var email = document.getElementById("email")
var umur = document.getElementById("umur")
var jenjang_sekolah = document.getElementById("jenjang")
var pilih_program = document.getElementById("pilihProgram")
var kode_promo = document.getElementById("kode")
var submitBtn = document.getElementById("btn1")
var form = document.getElementById("myForm")

submitBtn.addEventListener("click", dataForm);

function dataForm(e){
    e.preventDefault();

    fetch('http://localhost:3000/daftar',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nama: nama.value,
            email: email.value,
            umur: umur.value,
            jenjang_sekolah: jenjang_sekolah.value,
            pilih_program: pilih_program.value,
            kode_promo: kode_promo.value
        })
    })

    .then(function(response){
        if (response.ok){
            return response.json();
        }
        return Promise.reject(response);
        
    })

    .then(function(data){
        alert(data.message);
        form.reset();
    })
    .catch(function(error){
        console.log(error);
    });
};

function getContentData(){
    fetch('http://localhost:3000/programcontent')
        .then(response => response.json())
        .then(data =>{
            const contentElement = document.querySelector (content.box-section)
            contentElement.querySelector('h3').textContent = data.nama;
            contentElement.querySelector('p').textContent = data.deskripsi;
        })
        .catch(error => console.error('Error fetching content data:', error));
};

document.addEventListener('DOMContentLoaded',getContentData);

