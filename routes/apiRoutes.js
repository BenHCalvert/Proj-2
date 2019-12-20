const db = require("../models");

const test = true;

const test = true;

module.exports = function(app) {
  // Get all
  app.get("/api", function(req, res) {
<<<<<<< HEAD
    db.Example.findAll({}).then(function(results) {
      res.json(results);
=======
    db.Example.findAll({}).then(function(athdb) {
      res.json(athdb);
>>>>>>> c3ccf3704fab94f3e3f7b00681f2e18d3e8171d8
      if (test) {
        console.log('get all')}
    });
  });

// ********************
// Team 'API'
// ********************

    //get all teams
    app.get("/api/team", function(req, res) {
<<<<<<< HEAD
      db.Team.findAll({where: { id: req.params.team }}).then(function(results) {
        res.json(results);
=======
      db.Example.findAll({where: { id: req.params.team }}).then(function(athdb) {
        res.json(athdb);
>>>>>>> c3ccf3704fab94f3e3f7b00681f2e18d3e8171d8
        if (test) {
          console.log('get all teams with')};
      });
    });

    //get one team
    app.get("/api/team/:id", function(req, res) {
<<<<<<< HEAD
      db.Team.findOne({ where: { id: req.params.id } }).then(function(results) {
        res.json(results);
=======
      db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
        res.json(dbExample);
>>>>>>> c3ccf3704fab94f3e3f7b00681f2e18d3e8171d8
      });
    });

    //post one team
    app.post("/api/:team", function(req, res) {
<<<<<<< HEAD
      db.Team.create({where: { id: req.params.team }}).then(function(results) {
        res.json(results);
=======
      db.Example.create({where: { id: req.params.team }}).then(function(athdb) {
        res.json(athdb);
>>>>>>> c3ccf3704fab94f3e3f7b00681f2e18d3e8171d8
        if (test) {
          console.log('post new team')};
      });
    });

    //delete a team by team id. May need to change id header to match 
    app.delete("/api/team/:id", function(req, res) {
<<<<<<< HEAD
      db.Team.destroy({ where: { id: req.params.id } }).then(function(results) {
        res.json(results);
=======
      db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
        res.json(dbExample);
>>>>>>> c3ccf3704fab94f3e3f7b00681f2e18d3e8171d8
      });
    });

    //update one team by team id
    app.put("/api/team/:id", function(req, res) {
<<<<<<< HEAD
      db.Team.put({ where: { id: req.params.id } }).then(function(results) {
        res.json(results);
=======
      db.Example.put({ where: { id: req.params.id } }).then(function(dbExample) {
        res.json(dbExample);
>>>>>>> c3ccf3704fab94f3e3f7b00681f2e18d3e8171d8
      });
    });

    

// ********************
// Student 'API'
// ********************
    
    //get All Students
    app.get("/api/student", function(req, res) {
<<<<<<< HEAD
      db.Student.findAll({}).then(function(results) {
        res.json(results);
        console.log('get all students',results);
=======
      db.Example.findAll({}).then(function(athdb) {
        res.json(athdb);
>>>>>>> c3ccf3704fab94f3e3f7b00681f2e18d3e8171d8
        if (test) {
          console.log('get all students')};
      });
    });

    //get one student
    app.get("/api/student/:id", function(req, res) {
<<<<<<< HEAD
      db.Student.findOne({where: { id: req.params.id }}).then(function(results) {
        res.json(results);
=======
      db.Example.findOne({where: { id: req.params.id }}).then(function(athdb) {
        res.json(athdb);
>>>>>>> c3ccf3704fab94f3e3f7b00681f2e18d3e8171d8
        if (test) {
          console.log('get one student')};
      });
    });

    //post one student
    app.post("/api/student", function(req, res) {
<<<<<<< HEAD
      db.Student.create({}).then(function(results) {
        res.json(results);
=======
      db.Example.create({}).then(function(athdb) {
        res.json(athdb);
>>>>>>> c3ccf3704fab94f3e3f7b00681f2e18d3e8171d8
        if (test) {
          console.log('post new team')};
      });
    });

    //delete a student by student id. May need to change id header to match 
    app.delete("/api/student/:id", function(req, res) {
<<<<<<< HEAD
      db.Student.destroy({ where: { id: req.params.id } }).then(function(results) {
        res.json(results);
=======
      db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
        res.json(dbExample);
>>>>>>> c3ccf3704fab94f3e3f7b00681f2e18d3e8171d8
      });
    });

    //update one student
    app.put("/api/student/:id", function(req, res) {
<<<<<<< HEAD
      db.Student.put({ where: { id: req.params.id } }).then(function(results) {
        res.json(results);
=======
      db.Example.put({ where: { id: req.params.id } }).then(function(dbExample) {
        res.json(dbExample);
>>>>>>> c3ccf3704fab94f3e3f7b00681f2e18d3e8171d8
      });
    });

    
// ********************
// Adult 'API'
// ********************
    
    //get All adults
    app.get("/api/adult", function(req, res) {
<<<<<<< HEAD
      db.Adult.findAll({}).then(function(results) {
        res.json(results);
=======
      db.Example.findAll({}).then(function(athdb) {
        res.json(athdb);
>>>>>>> c3ccf3704fab94f3e3f7b00681f2e18d3e8171d8
      });
    });

    //get one adult
    app.get("/api/adult/:id", function(req, res) {
<<<<<<< HEAD
      db.Adult.findOne({where: { id: req.params.id }}).then(function(results) {
        res.json(results);        
=======
      db.Example.findOne({where: { id: req.params.id }}).then(function(athdb) {
        res.json(athdb);        
>>>>>>> c3ccf3704fab94f3e3f7b00681f2e18d3e8171d8
      });
    });

    //post one adult
    app.post("/api/adult", function(req, res) {
<<<<<<< HEAD
      db.Adult.create({}).then(function(results) {
        res.json(results);
=======
      db.Example.create({}).then(function(athdb) {
        res.json(athdb);
>>>>>>> c3ccf3704fab94f3e3f7b00681f2e18d3e8171d8
      });
    });

    //delete an adult by adult id. May need to change id header to match 
    app.delete("/api/adult/:id", function(req, res) {
<<<<<<< HEAD
      db.Adult.destroy({ where: { id: req.params.id } }).then(function(results) {
        res.json(results);
=======
      db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
        res.json(dbExample);
>>>>>>> c3ccf3704fab94f3e3f7b00681f2e18d3e8171d8
      });
    });

    //update one adult
    app.put("/api/adult/:id", function(req, res) {
<<<<<<< HEAD
      db.Adult.put({ where: { id: req.params.id } }).then(function(results) {
        res.json(results);
=======
      db.Example.put({ where: { id: req.params.id } }).then(function(dbExample) {
        res.json(dbExample);
>>>>>>> c3ccf3704fab94f3e3f7b00681f2e18d3e8171d8
      });
    });
};
