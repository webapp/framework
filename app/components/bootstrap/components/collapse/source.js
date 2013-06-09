define(function(require, exports, module) {
  "use strict";

  var $ = require("jquery");
  var _ = require("lodash");

  var Component = require("../component");
  var View = require("../view");

  // The ControllerView for the Component.
  var Layout = View.extend({
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
    },

    afterRender: function() {
      // Seek out nested components and render them.
    },

    processRender: function(template) {
      return template;
    }
  });

  var LayoutComponent = Component.extend({
    tagName: "x-bootstrap-collapse",

    constructor: function() {
      this.view = new Layout({ component: this });

      this.super("constructor");
    }
  });

  module.exports = LayoutComponent;
});
