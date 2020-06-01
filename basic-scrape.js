// the fs module provides an API for interacting with the file system
const fs = require("fs");

// getting the regex functions from the regex.js file
const { getComponents, getName, getDesc, trim, getInputs } = require("./regex");

const sourceFile = String(fs.readFileSync("./html-pages/basic-functions.html"));

const components = getComponents(sourceFile);

const componentObjs = components.map((component) => {
   return {
      name: getName(component)[0], // String
      desc: trim(getDesc(component)[0]), // String
      inputs: getInputs(component).length, // Number
      type: "basic", // On ly basic functions
      typeNum: 100, // Number
      isFavorite: false, // defaul to false but change to true if its a favorite
      order: 102, // Number
   };
});
const reversedObjs = componentObjs.reverse();
const orderedObjs = [];
for (let i = 0; i < reversedObjs.length; i++) {
   const obj = reversedObjs[i];
   // add property order and increent it
   obj.order = obj.typeNum + i;
   orderedObjs.push(obj);
}

const targetFile = "./json/basic.json";

fs.writeFileSync(targetFile, JSON.stringify(orderedObjs));
console.log(orderedObjs);
