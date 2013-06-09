require.config({
  packages: [{
    name: "webapp",
    location: "../vendor/library/src/",
    main: "index.js"
  }],

  paths: {
    // Third-party libraries.
    "jquery": "../vendor/library/vendor/lib/jquery/jquery",
    "lodash": "../vendor/library/vendor/lib/lodash/lodash",

    // Third-party shims.
    "objectObserve": "../vendor/library/vendor/shim/Object.observe.poly",

    // Third-party components.
    "bootstrap-component": "../vendor/components/bootstrap/source"
  },

  include: "webapp"
});
