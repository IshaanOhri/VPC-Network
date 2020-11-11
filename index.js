const express = require("express");
const moment = require("moment");
const mysql = require("mysql2");

const app = express();
const PORT = 8080;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hello123",
  database: "test",
});

app.use(express.static("./client"));

app.get("/add", (req, res) => {
  const name = req.query.name;

  connection.query(
    "INSERT INTO sample VALUES(?, ?)",
    [name, moment().format('MMMM Do YYYY, h:mm:ss a')],
    function (err, results, fields) {
      if (err) {
        res.send({
          success: false,
          timestamp: moment().format(),
        });
      } else {
        res.send({
          success: true,
          timestamp: moment().format(),
        });
      }
    }
  );
});

app.get("/all", (req, res) => {
  connection.query(
    "SELECT * FROM sample",
    function (err, results, fields) {
      if (err) {
        res.send({
          success: false,
          timestamp: moment().format(),
        });
      } else {
        res.send({
          success: true,
          data: results,
          timestamp: moment().format(),
        });
      }
    }
  );
})

app.listen(PORT, () => {
  console.log(`VPC-Network app listening on port ${PORT}`);
});
