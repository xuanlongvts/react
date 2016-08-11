module.exports = {
  entry:'./simpleRouteApp.js',
  output: {
    path: __dirname + '/dist',
    filename: 'simpleRouteApp-bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude:  /(node_modules)/
      }
    ]
  }
}
