module.exports = {
  config: {
    npm: {
      styles: {
        'jquery-modal': ['jquery.modal.css'],
        'bootstrap': ['dist/css/bootstrap.css']
      }
    },
    files: {
      stylesheets: {
        joinTo: {
          'app.css': /^(app|node_modules)/
        }
      },
      javascripts: {
        joinTo: {
          'app.js': /^(app|node_modules)/
        }
      }
    },

    modules: {
      autoRequire: {
        // outputFileName : [ entryModule ]
        'app.js': ['app']
      }
    }
  }
};
