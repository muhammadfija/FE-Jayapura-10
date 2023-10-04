

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

function dataForm(event){
    event.preventDefault();

    const form = event.target;
    const nama = form.querySelector('[name="nama"]').value;
    const email = form.querySelector('[name="email"]').value;
    const umur = form.querySelector('[name="umur"]').value;
    const jenjang = form.querySelector('[name="jenjang"]').value;
    const pilihProgram = form.querySelector('[name="pilihProgram"]').value;
    const kode = form.querySelector('[name="kode"]').value;

    const data ={
        nama: nama,
        email: email,
        umur: umur,
        jenjang: jenjang,
        pilihProgram: pilihProgram,
        kode: kode
    }

    fetch('http://localhost:3000/daftar',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success){
            popupThx.style.display = 'block';
            form.reset();
        }

        else{
            alert('Silahkan Isi Data Anda Terlebih dahulu.');
        }
    })

    .catch(error => console.error('Error sending data:', error));

    
};

const submitBtn = document.getElementById("btn1");

submitBtn.addEventListener("click",dataForm);

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

