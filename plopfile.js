const path = require("path");
const config = require("./config")
module.exports = (plop) => {
  plop.setGenerator("component", config);
};
