module.exports = {
   getComponents(file) {
      return file.match(
         /(?<=\<\!--\s\w+\s\w+\s--\>).+?(?=<!--\send\scolumn\s-->$)/gms
      );
   },
   getName(component) {
      return component.match(/(?<=<b>)(\w+).+(?=<\/b>)/gim);
   },
   getDesc(component) {
      return component.match(/(?<=<\/b>\s+-\s+).+(?=<\/p>)/gis);
   },
   getInputs(component) {
      return component.match(/<input.+?\/\>/gis); // /<input\s)(\w+.+>$)/gim
   },

   trim(str) {
      return str
         .replace(/(\\r)|(\\n)/g, " ")
         .replace(/\s{2,}/g, " ")
         .replace(/^\s|\s$/g, "");
   },
};
