const mysql = require("mysql");
require("dotenv").config();
const { HOST, USERNAME, PASSWORD, DATABASE } = process.env;

const conn = mysql.createConnection({
  host: HOST,
  user: USERNAME,
  password: PASSWORD,
  database: DATABASE,
});

// const conn = mysql.createConnection(process.env.DATABASE_URL);

let q = "SET sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''))";
conn.query(q, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
conn.on("error", function (err) {
  console.log("[mysql error]", err);
});
module.exports = conn;
