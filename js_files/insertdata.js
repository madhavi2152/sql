/*let match_csv = require("/home/madvi/Documents/sql/matches.csv");
const pool = require("/home/madvi/Documents/sql/createTables.js");
const csvtojson = require("csvtojson");

csvtojson()
  .fromFile(match_csv)
  .then((arr) => {
    /*let conv = arr.map((row) => {
      return Object.entries(row);
      //pool.execute(
      // `insert into \`match\` values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) `
      //);
    });
    
    console.log(arr);
  })
  .catch((err) => console.error(err));
*/

const csvFilePath = "/home/madvi/Documents/sql/matches.csv";
const pool = require("/home/madvi/Documents/sql/createTables.js");
const csvtojson = require("csvtojson");

csvtojson({
  delimiter: ",", // Specify the delimiter used in your CSV file
})
  .fromFile(csvFilePath)
  .then((arr) => {
    // Now `arr` contains the array of objects representing your CSV data
    // You can perform further operations here, such as inserting into the database

    arr.forEach((row) => {
      // Assuming your `createTables.js` exports a function to execute queries
      pool.execute(
        `INSERT INTO \`match\` VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        Object.values(row),
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
  })
  .catch((err) => console.error(err));
