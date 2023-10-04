const connection = require("../config/database");
const sequelize = require("sequelize");

const daftar = connection.define(
  "daftar_program",
  {
    nama: { type: sequelize.DataTypes.STRING },
    email: { type: sequelize.DataTypes.STRING },
    umur: { type: sequelize.DataTypes.INTEGER },
    jenjang_sekolah: { type: sequelize.DataTypes.STRING },
    kode_promo: { type: sequelize.DataTypes.STRING },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = daftar;
