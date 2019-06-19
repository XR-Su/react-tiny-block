// babel.config.js
// module.exports = {
//   presets: [
//     ["@babel/preset-env", { targets: { node: "current" } }],
//     "@babel/preset-typescript"
//   ]
// };

module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-default-from"
  ]
};
