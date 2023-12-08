const mysql = require("mysql2");
const path = "/home/madvi/Documents/sql/deliveries.csv";
const pool = require("/home/madvi/Documents/sql/create_deliveries.js");
const csvtojson = require("csvtojson");
csvtojson({
  delimiter: ",",
  noquotes: true,
})
  .fromFile(path)
  .then((arr) => {
    //console.log(arr); // Log the first 5 rows
    arr.forEach((row) => {
      let values = Object.values(row);
      //  console.log(values);
      pool.query(
        `insert into \`deliveries\` values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) `,
        values,
        (error, results, fields) => {
          if (error) {
            console.error("Error inserting data:", error);
          } else {
            console.log("Data inserted successfully.");
            console.log("Inserted row ID:", results.insertId);
          }
        }
      );
    });
    //20
  })
  .catch((err) => console.error(err));
