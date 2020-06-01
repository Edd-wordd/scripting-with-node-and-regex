module.exports = {
   getComponents(file) {
      return file.match(/^\W{4}\s[start|end]{3,5}\s(column)\s\W{3}$/gim);
   },
   getName(component) {
      return component.match(/(<b>)(\w+)(<\/b>)/gim);
   },
   getDesc(component) {
      return component.match(/-\s?\w+?\s\w+?\s\w+(<\/p>$)/gim);
   },
   getInputs(component) {
      return component.match(/(<input\s)\w+.+>$/gim);
   },
   trim(str) {
      return str
         .replace(/(\\r)|(\\n)/g, " ")
         .replace(/\s{2,}/g, " ")
         .replace(/^\s|\s$/g, "");
   },
};
