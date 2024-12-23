const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {

  entry : "./src/code/main.tsx",

  resolve : {
    extensions : [ ".ts", ".tsx", ".js" ]
  },

  module : {
    rules : [
      {
        test : /\.html$/,
        use : { loader : "html-loader" }
      },
      {
        test : /\.css$/,
        use : [ "style-loader", "css-loader"]
      },
      {
        test : /\.tsx?$/,
        use : "ts-loader",
        exclude : /node_modules/
      },
    ]

  },

  plugins : [
    new HtmlWebPackPlugin({ template : "./src/index.html", filename : "./index.html" })
  ],

  performance : { hints : false },
  watch : true,
  devtool : "source-map",

  devServer: {
    port: 8080, // client
    host: 'localhost',
    hot: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // server
        changeOrigin: true,
        secure: false
      }
    }
  }

};
