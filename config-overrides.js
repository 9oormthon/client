/* eslint-disable react-hooks/rules-of-hooks */
const { useBabelRc, addWebpackAlias, override } = require("customize-cra");
const path = require("path");

const resolve = (src) => path.resolve(__dirname, src);

module.exports = override(
  useBabelRc(),
  addWebpackAlias({
    "@Common": resolve("./src/_Common/"),
    "@Page": resolve("./src/Page/"),
  })
);
