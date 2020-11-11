const express = require("express");
const moment = require("moment");
const mysql = require("mysql2");

const app = express();
const PORT = 8080;

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "test",
// });

app.use(express.static("./client"));

app.get("/add", (req, res) => {
  const name = req.query.name;

  connection.query(
    "INSERT INTO sample VALUES(?, ?)",
    [name, moment().format()],
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

app.listen(PORT, () => {
  console.log(`VPC-Network app listening on port ${PORT}`);
});
