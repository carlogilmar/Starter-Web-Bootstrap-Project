exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {
    joinTo: {
      'css/vendor.css': /^(?!app)/,
      'css/app.css': /^app/
    }
  }
};

exports.npm = {
  enabled: true,
  styles: {
    bootstrap: ['dist/css/bootstrap.css'],
  },
  globals: {jQuery:"jquery", $:"jquery",
    Cryptojs:"crypto-js"}
};
