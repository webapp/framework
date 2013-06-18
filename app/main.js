// Break out the application running from the configuration definition to
// assist with testing.
require(["config"], function() {
  require(["app"], function(app) {
    // Kick off the application.
    app.start();
  });
});
