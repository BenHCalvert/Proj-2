var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });
  });

  // Load inventory page
  app.get("/inventory", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/inventory.html"));  
  });

  // Load student page
  app.get("/student", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/student.html"));  
  });

   // Load adult page
   app.get("/adult", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/adult.html"));  
  });

  // Load roster page
  app.get("/roster", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/roster.html"));  
  });


 
  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
