define(function(require, exports, module) {
  "use strict";

  var $ = require("jquery");
  var _ = require("lodash");

  var Component = require("webapp/component");

  var LayoutComponent = Component.extend({
    tagName: "webapp-view"
  });

  module.exports = LayoutComponent;
});
