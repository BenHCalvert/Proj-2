// dotenv is used to set environemtn variables
require("dotenv").config();
// child_process is used to populate database

// const exec = require('child_process').exec;
const express = require("express");
const exphbs = require("express-handlebars");

const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// will need to change to false so table is not recreated
let syncOptions = { force: true };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

  console.log("here");
// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;