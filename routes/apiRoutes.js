const sequelize = require('sequelize');
const twilio = require('twilio');
const db = require('../models');
require('dotenv').config();

const test = true;

module.exports = function (app) {
  // Get all
  app.get('/api', (req, res) => {
    db.Example.findAll({}).then((results) => {
      res.json(results);
      if (test) {
        console.log('get all');
      }
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
    db.Student.create({}).then((results) => {
      res.json(results);
      if (test) {
        console.log('post new team');
      }
    });
  });

  // delete a student by student id. May need to change id header to match
  app.delete('/api/student/:id', (req, res) => {
    db.Student.destroy({
      where: { id: req.params.id },
    }).then((results) => {
      res.json(results);
    });
  });

  // update one student
  app.put('/api/student/:id', (req, res) => {
    db.Student.put({
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
    // select f.id, f.adult_type, a.first_name, s.first_name from families f join adults a on f.adultId = a.id join students s on f.studentId = s.id order by f.id;
    // sequelize.query("SELECT f.id, f.adult_type, a.first_name, s.first_name FROM families f JOIN adults a ON f.adultId = a.id JOIN students s ON f.studentId = s.id;", { type: sequelize.QueryTypes.SELECT})
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

  // Send SMS
  // Based on node.js docs here https://www.twilio.com/docs/sms/quickstart/node
  app.post('/api/sms', (req, res) => {
    const messages = req.body.tMessage;
    const { pNumber } = req.body;
    const { accountSID } = process.env;
    const { authToken } = process.env;
    const client = new twilio(accountSID, authToken);
    //
    client.messages.create({
      body: messages,
      to: pNumber,
      from: process.env.twilioNumber,
    }).then((message) => console.log(message));
  });
};
