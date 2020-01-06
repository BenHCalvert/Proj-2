// dotenv is used to set environemtn variables
require('dotenv').config();
// child_process is used to populate database

// const exec = require('child_process').exec;
const express = require('express');
const exphbs = require('express-handlebars');

const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

// Handlebars
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
  }),
);
app.set('view engine', 'handlebars');

// Routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// will need to change to false so table is not recreated
const syncOptions = { force: true };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === 'test') {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(() => {
  app.listen(PORT, () => {
    console.log(
      '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
      PORT,
      PORT,
    );
  });
});


// cant this to work. ls works on the path but when i try to run it it cant find the path
/* jjjjjjjjjjjjjjjj
.then(function() {
  // this then statement can be removed when we move to rpduction (or add an if when running dev)
  console.log("after sequelize has initialized populating the database with seed data")

  // exec(`${process.env.RUN_MYSQL}${process.env.MYSQL_PSWD} < ./models/seed.sql`,
  // exec(`echo ${process.env.RUN_MYSQL}${process.env.MYSQL_PSWD}`,
  exec(`cd ${process.env.MYPATH}; ls`,
      (error, stdout, stderr) => {
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
          if (error !== null) {
              console.log(`exec error: ${error}`);
          }
  });
});
*/

module.exports = app;
