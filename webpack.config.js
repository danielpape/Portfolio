var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    './app/app.jsx'
  ],
  externals:{
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
    new webpack.optimize.DedupePlugin(), //dedupe similar code
    new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin()//Merge chunks
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
      FrontpageWork : 'app/components/FrontpageWork.jsx',
      Marque : 'app/components/Marque.jsx',
      Contact : 'app/components/Contact.jsx',
      Footer : 'app/components/Footer.jsx',
      Home: 'app/components/Home.jsx',
      Eve: 'app/components/Eve.jsx',
      Independent: 'app/components/Independent.jsx',
      EveningStandard: 'app/components/EveningStandard.jsx'
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
  devtool: 'cheap-module-source-map'
};
