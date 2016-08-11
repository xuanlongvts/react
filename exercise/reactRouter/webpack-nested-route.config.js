module.exports = {
  entry: './nestedRouteApp.js',
  output: {
    path: __dirname + '/dist',
    filename: 'nestedRouteApp-bundle.js'
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
