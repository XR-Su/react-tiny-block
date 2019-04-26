const webpack = require('scripts')
const path = require('path');
const nodeExternals = require('scripts-node-externals');

const config = {
  mode: 'production',
  entry: {
    // autosuggest: './src/autosuggest.js',
    // normalForm: './src/NormalForm.js',
    // testForm: './src/TestForm.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'commonjs2' // 这个配置项的默认参数是 'var'，我们需要改成 commonjs2，这样可以通过模块系统引入这个组件。
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader?cacheDirectory=true",
          options: {
            configFile: false,
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "dynamic-import-webpack",
              "@babel/plugin-proposal-class-properties"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  externals: [nodeExternals()] //使得打包的组件中不包括任何 node_modules 里面的第三方组件，起到减小体积的作用。
};

webpack(config).run()