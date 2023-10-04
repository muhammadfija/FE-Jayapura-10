const Promo = require("../models/PromoModels.js");
const path = require("path");
const fs = require("fs");

exports.getPromo = async (req, res) => {
  try {
    const response = await Promo.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getPromoById = async (req, res) => {
  try {
    const response = await Promo.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.savePromo = async (req, res) => {
  if (req.files === null) return res.status(400).json({ msg: "No File Uploaded" });
  const name = req.body.name;
  const file = req.files.name;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedTypes = [".png", ".jpg", ".jpeg"];

  if (!allowedTypes.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Image" });
  if (fileSize > 5000000) return res.status(422).json({ msg: "Image size exceeds 5 MB" });

  file.mv(`./public/images/${fileName}`, async (error) => {
    if (error) return res.status(500).json({ msg: error.message });
    try {
      await Promo.create({ name: name, image: fileName, url: url });
      res.status(201).json({ msg: "Promo Created Successfully" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

exports.updatePromo = async (req, res) => {
  const promo = await Promo.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!promo) return res.status(404).json({ msg: "No Data Found" });
  let fileName = "";
  if (req.files === null) {
    fileName = promo.image;
  } else {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedTypes = [".png", ".jpg", ".jpeg"];

    if (!allowedTypes.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Image" });
    if (fileSize > 5000000) return res.status(422).json({ msg: "Image size exceeds 5 MB" });

    const filepath = `./public/images/${promo.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (error) => {
      if (error) return res.status(500).json({ msg: error.message });
    });
  }
  const name = req.body.title;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  try {
    await Promo.update(
      { name: name, image: fileName, url: url },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Promo Update Success" });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deletePromo = async (req, res) => {
  const promo = await Promo.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!promo) return res.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/images/${promo.image}`;
    fs.unlinkSync(filepath);
    await Promo.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Promo Deleted Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};
