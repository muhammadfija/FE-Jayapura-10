const sequelize = require("sequelize");
const mysql = require("mysql2");

const connection = new sequelize.Sequelize("eduspace", "avnadmin", "AVNS_obABAi0slRro6rNh6P4", {
  host: "mysql-377d93a-rahmazahrani102-5e6f.aivencloud.com",
  dialect: "mysql",
  port: "11858",
  logging: false,
});

module.exports = connection;
