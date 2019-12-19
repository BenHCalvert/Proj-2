var db = require("../models");

const test = true;

module.exports = function(app) {
  // Get all
  app.get("/api", function(req, res) {
    db.Example.findAll({}).then(function(athdb) {
      res.json(athdb);
      if (test) {
        console.log('get all')}
    });
  });

// ********************
// Team 'API'
// ********************

    //get one team
    app.get("/api/:team", function(req, res) {
      db.Example.findOne({where: { id: req.params.team }}).then(function(athdb) {
        res.json(athdb);
        if (test) {
          console.log('get all teams')};
      });
    });

    //post one team
    app.post("/api/:team", function(req, res) {
      db.Example.create({where: { id: req.params.team }}).then(function(athdb) {
        res.json(athdb);
        if (test) {
          console.log('post new team')};
      });
    });

    // Delete a team by team id. May need to change id header to match 
    app.delete("/api/team/:id", function(req, res) {
      db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
        res.json(dbExample);
      });
    });

    // update one team
    app.update("/api/team/:id", function(req, res) {
      db.Example.update({ where: { id: req.params.id } }).then(function(dbExample) {
        res.json(dbExample);
      });
    });

    // het one team
    app.get("/api/team/:id", function(req, res) {
      db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
        res.json(dbExample);
      });
    });

  app.update("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
