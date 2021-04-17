"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./cjs/react-simple-pie.min.js");
} else {
  module.exports = require("./cjs/react-simple-pie.js");
}
