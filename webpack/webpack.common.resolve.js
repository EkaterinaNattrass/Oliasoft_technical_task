const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '~server': path.resolve(__dirname, '../src/server/'),
      '~client': path.resolve(__dirname, '../src/client/'),
      '~store': path.resolve(__dirname, '../src/client/store/'),
    },
    fallback: {
      fs: false,
      net: false,
      repl: false,
      tls: false
    },
  }
};