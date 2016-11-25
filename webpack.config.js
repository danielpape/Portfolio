var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals:{
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      applicationStyles: 'app/styles/app.scss',
      Navigation : 'app/components/Navigation.jsx',
      Jumbotron : 'app/components/Jumbotron.jsx',
      Marque : 'app/components/Marque.jsx',
      Work : 'app/components/Work.jsx',
      WhatIDo : 'app/components/WhatIDo.jsx',
      Contact : 'app/components/Contact.jsx',
      Footer : 'app/components/Footer.jsx',
      AppsCarousel : 'app/components/AppsCarousel.jsx',
      Home: 'app/components/Home.jsx',
      Eve: 'app/components/Eve.jsx'
    },
    extensions: ['','.js','.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015','stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff)$/,
        loader: 'url-loader'
      },
    ]
  },
  devtool: 'inline-source-map'
};
