const mysql = require('mysql');
const config = require("./config.json");

var dbconnection = mysql.createPool({
  connectionLimit : 10,
  host: config.mysqlHost,
  user: config.mysqlUser,
  port: config.mysqlPort,
  password: config.mysqlPass,
  database: config.mysqlDB,
  charset: "utf8mb4"
});

module.exports=dbconnection;