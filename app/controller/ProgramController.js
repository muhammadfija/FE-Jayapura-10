const daftar = require('../models/daftar-program')
const content = require('../models/content-program')

function addData(req,res,next){
    daftar.create({
        nama: req.body.nama ,
        email: req.body.email,
        umur: req.body.umur,
        jenjang_sekolah: req.body.jenjang_sekolah,
        kode_promo: req.body.kode_promo
    })

    .then(function(){
        res.status(201).json({
            message: "pendaftaran berhasil"
        })
    })
    .catch(function(err){
        res.status(500).json({
            error: err,
        })
    })
    return
}

function getContentData(req,res){
    content.findAll()
    .then(data =>{
        res.send(data);
    })
    .catch(err => {
        console.error('Gagal mengambil data dari model: ' + err.message);
        res.status(500).send('Terjadi kesalahan saat mengambil data dari model.');
    });
}


module.exports = {
    addData,
    getContentData
}