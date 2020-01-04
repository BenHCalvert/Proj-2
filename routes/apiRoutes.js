// const sequelize = require('sequelize');
const db = require('../models');

const test = true;

function exportAll(app) {
  // Get all
  app.get('/api', (req, res) => {
    db.Example.findAll({}).then((results) => {
      res.json(results);
      if (test) { console.log('get all'); }
    });
  });

  // ********************
  // Team 'API'
  // ********************
  // get all teams
  app.get('/api/team', (req, res) => {
    db.Team.findAll({}).then((results) => {
      res.json(results);
      if (test) {
        console.log('get all teams with');
      }
    });
  });

  // get one team
  app.get('/api/team/:id', (req, res) => {
    db.Team.findOne({ where: { id: req.params.id } }).then((results) => {
      res.json(results);
    });
  });

  // post one team
  app.post('/api/:team', (req, res) => {
    db.Team.create({ where: { id: req.params.team } }).then((results) => {
      res.json(results);
      if (test) {
        console.log('post new team');
      }
    });
  });

  // delete a team by team id. May need to change id header to match
  app.delete('/api/team/:id', (req, res) => {
    db.Team.destroy({ where: { id: req.params.id } }).then((results) => {
      res.json(results);
    });
  });

  // update one team by team id
  app.put('/api/team/:id', (req, res) => {
    db.Team.put({ where: { id: req.params.id } }).then((results) => {
      res.json(results);
    });
  });

  // ********************
  // Roster 'API'
  // ********************
  // get all roster
  app.get('/api/roster', (req, res) => {
    db.Roster.findAll({}).then((results) => {
      res.json(results);
      if (test) {
        console.log('get all teams with');
      }
    });
  });

  // get one roster
  app.get('/api/roster/:id', (req, res) => {
    db.Roster.findOne({ where: { id: req.params.id } }).then((results) => {
      res.json(results);
    });
  });

  // get one roster by teamId
  app.get('/api/roster/team/:id', (req, res) => {
    db.Roster.findAll({ where: { teamId: req.params.id } }).then((results) => {
      res.json(results);
    });
  });

  // delete a team by team id. May need to change id header to match
  app.delete('/api/roster/:id', (req, res) => {
    db.Roster.destroy({ where: { id: req.params.id } }).then((results) => {
      res.json(results);
    });
  });

  // ********************
  // Student 'API'
  // ********************

  // get All Students
  app.get('/api/student', (req, res) => {
    db.Student.findAll({
      include: [
        { model: db.Adult },
        { model: db.Team },
      ],
    }).then = (results) => {
      console.log(results);
      res.json(results);
      console.log('get all students', results);
      if (test) {
        console.log('get all students');
      }
    };
  });

  // get one student
  app.get('/api/student/:id', (req, res) => {
    db.Student.findOne({
      where: { id: req.params.id },
      include: [
        { model: db.Adult },
        { model: db.Team },
      ],
    }).then((results) => {
      res.json(results);
      if (test) {
        console.log('get one student');
      }
    });
  });

  // post one student
  app.post('/api/student', (req, res) => {
    db.Student.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      grade: req.body.grade,
      gender: req.body.gender,
      allergies: req.body.allergies
    }).then((results) => {
      res.json(results);
      if (test) {
        console.log('post new team');
      }
    });
  });

  // delete a student by student id. May need to change id header to match
  app.delete('/api/student/:id', (req, res) => {
    console.log("in route delte", req);
    db.Student.destroy({
      where: { id: req.params.id },
    }).then((results) => {
      res.json(results);
    });
  });

  // update one student
  app.put('/api/student/:id', (req, res) => {
    console.log("in stud put",req);
    db.Student.update({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      grade: req.body.grade,
      gender: req.body.gender,
      allergies: req.body.allergies,
    }, {
      where: { id: req.params.id },
    }).then((results) => {
      res.json(results);
    });
  });


  // ********************
  // Adult 'API'
  // ********************

  // get All adults
  app.get('/api/adult', (req, res) => {
    db.Adult.findAll({
      include: [{ model: db.Student }],
    }).then((results) => {
      res.json(results);
    });
  });

  // get one adult
  app.get('/api/adult/:id', (req, res) => {
    db.Adult.findOne({
      where: { id: req.params.id },
      include: [{ model: db.Student }],
    }).then((results) => {
      res.json(results);
    });
  });

  // post one adult
  app.post('/api/adult', (req, res) => {
    db.Adult.create({
    }).then((results) => {
      res.json(results);
    });
  });

  // delete an adult by adult id. May need to change id header to match
  app.delete('/api/adult/:id', (req, res) => {
    db.Adult.destroy({ where: { id: req.params.id } }).then((results) => {
      res.json(results);
    });
  });

  // update one adult
  app.put('/api/adult/:id', (req, res) => {
    db.Adult.put({
      where: { id: req.params.id },
    }).then((results) => {
      res.json(results);
    });
  });

  // ********************
  // Family 'API'
  // ********************

  // get families
  app.get('/api/family', (req, res) => {
    db.Family.findAll({})
      .then((results) => {
        res.json(results);
      });
  });

  // get one adult
  app.get('/api/adult/:id', (req, res) => {
    db.Adult.findOne({ where: { id: req.params.id } }).then((results) => {
      res.json(results);
    });
  });

  // post one adult
  app.post('/api/adult', (req, res) => {
    db.Adult.create({}).then((results) => {
      res.json(results);
    });
  });

  // delete an adult by adult id. May need to change id header to match
  app.delete('/api/adult/:id', (req, res) => {
    db.Adult.destroy({ where: { id: req.params.id } }).then((results) => {
      res.json(results);
    });
  });

  // update one adult
  app.put('/api/adult/:id', (req, res) => {
    db.Adult.put({ where: { id: req.params.id } }).then((results) => {
      res.json(results);
    });
  });
}

module.exports = exportAll;
