const path = require('path');
const db = require('../models');

module.exports = function (app) {
  // Load index page
  /*
  app.get("/", function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/homepage.html"));
    db.Team.findAll({}).then(function(data) {
      console.log("hsbdata",{team: data});
      res.render("index", {team: data});
    });
  });
  */

  // Load inventory page
  app.get('/inventory', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/inventory.html'));
  });

  // Load student page
  app.get('/student', (req, res) => {
    // res.sendFile(path.join(__dirname, "../public/student.html"));
    db.Student.findAll({}).then((data) => {
      console.log('hsbdata', { student: data });
      res.render('student', { student: data });
    });
  });

  app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, "../public/student.html"));
    console.log('here');
    db.Student.findAll({}).then((student) => {
      console.log('hsbdata', { student });
      db.Team.findAll({}).then((team) => {
        console.log('hsbdata', { team });
        res.render('index', {
          student,
          team,
        });
      });
    });
  });

  app.get('/cud_student', (req, res) => {
    // res.sendFile(path.join(__dirname, "../public/student.html"));
    db.Student.findAll({}).then((data) => {
      console.log('hsbdata', { student: data });
      res.render('cud_student', { student: data });
    });
  });

  // Load adult page
  app.get('/adult', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/adult.html'));
  });

  // Load roster page
  app.get('/roster', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/roster.html'));
  });


  // Load example page and pass in an example by id
  app.get('/example/:id', (req, res) => {
    db.Example.findOne({ where: { id: req.params.id } }).then((dbExample) => {
      res.render('example', {
        example: dbExample,
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get('*', (req, res) => {
    res.render('404');
  });
};
