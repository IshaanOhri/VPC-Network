const express = require("express");
const moment = require("moment");
const mysql = require("mysql");

const app = express();
const PORT = 3000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hello123",
  database: "test"
});

connection.query("CREATE TABLE IF NOT EXISTS my_details(name varchar(256), date varchar(256));", function(err, results, fields) {
  if(err){
    console.log('Table creation failed. Try starting server again.');
  }
})

app.use(express.static("./client"));

app.get('/', (req, res) => {
  res.send({
    success: true,
    message: 'Test route'
  });
});

app.get("/add", (req, res) => {
  const name = req.query.name;

  connection.query(
    "INSERT INTO my_details VALUES(?, ?);",
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
    "SELECT * FROM my_details;",
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
