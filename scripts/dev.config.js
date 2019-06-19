const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  mode: "development",
  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/dev-server",
    "./src/app.js"
  ],
  // entry: "./src/app.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist")
  },
  resolve: {
    alias: {
      utils$: path.resolve(__dirname, "../src/utils")
    },
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader?cacheDirectory=true",
            options: {
              configFile: false,
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          },
          "ts-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader?cacheDirectory=true",
          options: {
            configFile: false,
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        oneOf: [
          {
            resourceQuery: /modules/,
            use: [
              {
                loader: "style-loader",
                options: { singleton: true }
              },
              {
                loader: "css-loader",
                options: {
                  modules: true,
                  importLoaders: 1,
                  localIdentName: "[name]_[local]_[hash:base64:5]"
                }
              },
              {
                loader: "less-loader"
              }
            ]
          },
          {
            use: [
              {
                loader: "style-loader",
                options: { singleton: true }
              },
              {
                loader: "css-loader"
              },
              {
                loader: "less-loader"
              }
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "public/index.html"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

const server = new WebpackDevServer(webpack(config), {
  hot: true,
  contentBase: "./dist"
});

server.listen(8080);
