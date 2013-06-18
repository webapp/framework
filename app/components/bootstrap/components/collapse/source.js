define(function(require, exports, module) {
  "use strict";

  var $ = require("jquery");
  var _ = require("lodash");

  var Component = require("webapp/component");

  var LayoutComponent = Component.extend({
    tagName: "x-bootstrap-collapse",

    constructor: function() {
      this.view = new Layout({ component: this });

      this.super("constructor");
    }
  });

  module.exports = LayoutComponent;
});
