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

    //get all teams
    app.get("/api/team", function(req, res) {
      db.Example.findAll({where: { id: req.params.team }}).then(function(athdb) {
        res.json(athdb);
        if (test) {
          console.log('get all teams with')};
      });
    });

    //get one team
    app.get("/api/team/:id", function(req, res) {
      db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
        res.json(dbExample);
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

    //delete a team by team id. May need to change id header to match 
    app.delete("/api/team/:id", function(req, res) {
      db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
        res.json(dbExample);
      });
    });

    //update one team by team id
    app.update("/api/team/:id", function(req, res) {
      db.Example.update({ where: { id: req.params.id } }).then(function(dbExample) {
        res.json(dbExample);
      });
    });

    

// ********************
// Student 'API'
// ********************
    
    //get All Students
    app.get("/api/student", function(req, res) {
      db.Example.findAll({}).then(function(athdb) {
        res.json(athdb);
        if (test) {
          console.log('get all students')};
      });
    });

    //get one student
    app.get("/api/student/:id", function(req, res) {
      db.Example.findOne({where: { id: req.params.id }}).then(function(athdb) {
        res.json(athdb);
        if (test) {
          console.log('get one student')};
      });
    });

    //post one student
    app.post("/api/student", function(req, res) {
      db.Example.create({}).then(function(athdb) {
        res.json(athdb);
        if (test) {
          console.log('post new team')};
      });
    });

    //delete a student by student id. May need to change id header to match 
    app.delete("/api/student/:id", function(req, res) {
      db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
        res.json(dbExample);
      });
    });

    //update one student
    app.update("/api/student/:id", function(req, res) {
      db.Example.update({ where: { id: req.params.id } }).then(function(dbExample) {
        res.json(dbExample);
      });
    });

    
// ********************
// Adult 'API'
// ********************
    
    //get All adults
    app.get("/api/adult", function(req, res) {
      db.Example.findAll({}).then(function(athdb) {
        res.json(athdb);
      });
    });

    //get one adult
    app.get("/api/adult/:id", function(req, res) {
      db.Example.findOne({where: { id: req.params.id }}).then(function(athdb) {
        res.json(athdb);        
      });
    });

    //post one adult
    app.post("/api/adult", function(req, res) {
      db.Example.create({}).then(function(athdb) {
        res.json(athdb);
      });
    });

    //delete an adult by adult id. May need to change id header to match 
    app.delete("/api/adult/:id", function(req, res) {
      db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
        res.json(dbExample);
      });
    });

    //update one adult
    app.update("/api/adult/:id", function(req, res) {
      db.Example.update({ where: { id: req.params.id } }).then(function(dbExample) {
        res.json(dbExample);
      });
    });
};
