const csvtojson = require("csvtojson");
const path = require("path");
const fs = require("fs");

const matchesCsvPath = path.join(__dirname, "./matches.csv");

csvtojson()
  .fromFile(matchesCsvPath)
  .then((matches) => {
    console.log(matches);
  });
