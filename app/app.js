define(function(require, exports, module) {
  "use strict";

  var WebApp = require("webapp");

  var app = WebApp.create({
    // Specify a different `mainElement` entry point.  If unable to find `main`
    // or if `mainElement` is set to null, then default to DocumentFragment.
    // mainElement: "main"
  });

  // Set defaults for the 
  WebApp.View.configure({
    // This custom fetch method will load pre-compiled templates or fetch them
    // remotely with AJAX.
    fetch: function(path) {
      // Concatenate the file extension.
      path = path + ".html";

      // If cached, use the compiled template.
      if (window.JST && window.JST[path]) {
        return window.JST[path];
      }

      // Fetch the template asynchronously.
      $.get(path, this.async(), "text");
    }
  });

  // Automatically load the Bootstrap components.
  app.registerComponent(require("components/bootstrap/bootstrap"));

  module.exports = app;
});
