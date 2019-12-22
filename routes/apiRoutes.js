const db = require("../models");

const test = true;

module.exports = function(app) {
  // Get all
  app.get("/api", function(req, res) {
    db.Example.findAll({}).then(function(results) {
      res.json(results);
      if (test) {
        console.log('get all')}
    });
  });

// ********************
// Team 'API'
// ********************

    //get all teams
    app.get("/api/team", function(req, res) {
      db.Team.findAll({where: { id: req.params.team }}).then(function(results) {
        res.json(results);
        if (test) {
          console.log('get all teams with')};
      });
    });

    //get one team
    app.get("/api/team/:id", function(req, res) {
      db.Team.findOne({ where: { id: req.params.id } }).then(function(results) {
        res.json(results);
      });
    });

    //post one team
    app.post("/api/:team", function(req, res) {
      db.Team.create({where: { id: req.params.team }}).then(function(results) {
        res.json(results);
        if (test) {
          console.log('post new team')};
      });
    });

    //delete a team by team id. May need to change id header to match 
    app.delete("/api/team/:id", function(req, res) {
      db.Team.destroy({ where: { id: req.params.id } }).then(function(results) {
        res.json(results);
      });
    });

    //update one team by team id
    app.put("/api/team/:id", function(req, res) {
      db.Team.put({ where: { id: req.params.id } }).then(function(results) {
        res.json(results);
      });
    });

    

// ********************
// Student 'API'
// ********************
    
    //get All Students
    app.get("/api/student", function(req, res) {
      db.Student.findAll({
        include: [
          {model: db.Adult},
          {model: db.Team},
        ]
      }).then(function(results) {
        res.json(results);
        console.log('get all students',results);
        if (test) {
          console.log('get all students')};
      });
    });

    //get one student
    app.get("/api/student/:id", function(req, res) {
      db.Student.findOne({
        where: { id: req.params.id },
        include: [{model: db.Adult}]
      }).then(function(results) {
        res.json(results);
        if (test) {
          console.log('get one student')};
      });
    });

    //post one student
    app.post("/api/student", function(req, res) {
      db.Student.create({

      }).then(function(results) {
        res.json(results);
        if (test) {
          console.log('post new team')};
      });
    });

    //delete a student by student id. May need to change id header to match 
    app.delete("/api/student/:id", function(req, res) {
      db.Student.destroy({ 
        where: { id: req.params.id },
        include: [{model: db.Adult}]
      }).then(function(results) {
        res.json(results);
      });
    });

    //update one student
    app.put("/api/student/:id", function(req, res) {
      db.Student.put({ 
        where: { id: req.params.id } 
      }).then(function(results) {
        res.json(results);
      });
    });

    
// ********************
// Adult 'API'
// ********************
    
    //get All adults
    app.get("/api/adult", function(req, res) {
      db.Adult.findAll({
        include: [{model: db.Student}]
      }).then(function(results) {
        res.json(results);
      });
    });

    //get one adult
    app.get("/api/adult/:id", function(req, res) {
      db.Adult.findOne({
        where: { id: req.params.id },
        include: [{model: db.Student}]
      }).then(function(results) {
        res.json(results);        
      });
    });

    //post one adult
    app.post("/api/adult", function(req, res) {
      db.Adult.create({


      }).then(function(results) {
        res.json(results);
      });
    });

    //delete an adult by adult id. May need to change id header to match 
    app.delete("/api/adult/:id", function(req, res) {
      db.Adult.destroy({ where: { id: req.params.id } }).then(function(results) {
        res.json(results);
      });
    });

    //update one adult
    app.put("/api/adult/:id", function(req, res) {
      db.Adult.put({ 
        where: { id: req.params.id }, 
        include: [{model: db.Student}]
      }).then(function(results) {
        res.json(results);
      });
    });

// ********************
// Family 'API'
// ********************
    
    //get families
    //select f.id, f.adult_type, a.first_name, s.first_name from families f join adults a on f.adultId = a.id join students s on f.studentId = s.id order by f.id;
    app.get("/api/family", function(req, res) {
      db.Family.findAll({
        include: [
          {model: db.Student},
          {model: db.Adult},
        ]
      }).then(function(results) {
        res.json(results);
      });
    });

    //get one adult
    app.get("/api/adult/:id", function(req, res) {
      db.Adult.findOne({where: { id: req.params.id }}).then(function(results) {
        res.json(results);        
      });
    });

    //post one adult
    app.post("/api/adult", function(req, res) {
      db.Adult.create({}).then(function(results) {
        res.json(results);
      });
    });

    //delete an adult by adult id. May need to change id header to match 
    app.delete("/api/adult/:id", function(req, res) {
      db.Adult.destroy({ where: { id: req.params.id } }).then(function(results) {
        res.json(results);
      });
    });

    //update one adult
    app.put("/api/adult/:id", function(req, res) {
      db.Adult.put({ where: { id: req.params.id } }).then(function(results) {
        res.json(results);
      });
    });


};
