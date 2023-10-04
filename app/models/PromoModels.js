const connection = require("../config/database");
const sequelize = require("sequelize");

const { DataTypes } = sequelize;

const Promo = connection.define(
  "promo",
  {
    name: DataTypes.STRING,
    Image: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

(async () => {
  await connection.sync();
})();

module.exports = Promo;
