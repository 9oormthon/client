/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react-hooks/rules-of-hooks */
const path = require('path');

const { useBabelRc, addWebpackAlias, override } = require('customize-cra');

const resolve = src => path.resolve(__dirname, src);

module.exports = override(
  useBabelRc(),
  addWebpackAlias({
    '@Common': resolve('./src/_Common/'),
    '@Page': resolve('./src/Page/'),
    '@Component': resolve('./src/Component/'),
    '@Hooks': resolve('./src/Hooks/'),
    '@MSW': resolve('./src/_msw'),
  }),
);
