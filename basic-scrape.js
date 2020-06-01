console.log("what are oyu ofoin ");

const fs = require("fs");

// getting the regex functions from the regex.js file
const regex = require("./regex");

const sourceFile = String(fs.readFileSync("./html-pages/basic-functions.html"));

console.log(sourceFile);
