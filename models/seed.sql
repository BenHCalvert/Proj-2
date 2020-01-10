USE sunnyside_db;

INSERT INTO teams (team_name, sport, gender, createdAt, updatedAt) VALUES ('The Clothes Ringers','Mix Martial Arts','co-ed','2020-12-18 00:00:00','2020-12-18 00:00:00');
INSERT INTO teams (team_name, sport, gender, createdAt, updatedAt) VALUES ('Flying Knobs','Cock fighting','girls','2020-12-18 00:00:00','2020-12-18 00:00:00');
INSERT INTO teams (team_name, sport, gender, createdAt, updatedAt) VALUES ('Dirty Martinis','Roller Derby','boys','2020-12-18 00:00:00','2020-12-18 00:00:00');
INSERT INTO teams (team_name, sport, gender, createdAt, updatedAt) VALUES ('Dishwashers','Biathlon','boys','2020-12-18 00:00:00','2020-12-18 00:00:00');

INSERT INTO adults (first_name,last_name,createdAt,updatedAt) VALUES ('Author','Aardvark','2020-12-18 00:00:00','2020-12-18 00:00:00');
INSERT INTO adults (first_name,last_name,createdAt,updatedAt) VALUES ('Buster','Bovine','2020-12-18 00:00:00','2020-12-18 00:00:00');
INSERT INTO adults (first_name,last_name,createdAt,updatedAt) VALUES ('Charlie','Camel','2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO adults (first_name,last_name,createdAt,updatedAt) VALUES ('Dalia','Dingo','2020-12-18 01:00:00','2020-12-18 01:00:00');

INSERT INTO students (first_name,last_name,contact_number,grade,gender,allergies,createdAt,updatedAt) VALUES ('Emily','Elephant',"+13039075882",6,'girl',null,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO students (first_name,last_name,contact_number,grade,gender,allergies,createdAt,updatedAt) VALUES ('Frank','Frog',"+13032432460",7,'boy','toast and toads','2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO students (first_name,last_name,contact_number,grade,gender,allergies,createdAt,updatedAt) VALUES ('Gigi','Goat',"+13032423460",6,'other',null,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO students (first_name,last_name,contact_number,grade,gender,allergies,createdAt,updatedAt) VALUES ('Harry','Hermit-Crab',"+13032432460",8,'boy',null,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO students (first_name,last_name,contact_number,grade,gender,allergies,createdAt,updatedAt) VALUES ('Inga','Impala',"+13032432460",8,'girl','lions, tiger, jackles, peanuts','2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO students (first_name,last_name,contact_number,grade,gender,allergies,createdAt,updatedAt) VALUES ('Jacky','Jackle',"+13032432460",8,'girl','carrots','2020-12-18 01:00:00','2020-12-18 01:00:00');

INSERT INTO families (adult_type,adultId,studentId,createdAt,updatedAt) VALUES ('Parent',1,1,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO families (adult_type,adultId,studentId,createdAt,updatedAt) VALUES ('Parent',1,2,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO families (adult_type,adultId,studentId,createdAt,updatedAt) VALUES ('Parent',1,3,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO families (adult_type,adultId,studentId,createdAt,updatedAt) VALUES ('Parent',2,1,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO families (adult_type,adultId,studentId,createdAt,updatedAt) VALUES ('Parent',2,2,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO families (adult_type,adultId,studentId,createdAt,updatedAt) VALUES ('Guardian',2,3,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO families (adult_type,adultId,studentId,createdAt,updatedAt) VALUES ('Parent',3,4,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO families (adult_type,adultId,studentId,createdAt,updatedAt) VALUES ('Parent',3,5,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO families (adult_type,adultId,studentId,createdAt,updatedAt) VALUES ('Guardian',3,6,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO families (adult_type,adultId,studentId,createdAt,updatedAt) VALUES ('Parent',4,4,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO families (adult_type,adultId,studentId,createdAt,updatedAt) VALUES ('Parent',4,5,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO families (adult_type,adultId,studentId,createdAt,updatedAt) VALUES ('Guardian',4,6,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO families (adult_type,adultId,studentId,createdAt,updatedAt) VALUES ('Emergency Contact',1,6,'2020-12-18 01:00:00','2020-12-18 01:00:00');

INSERT INTO rosters (teamId,studentId,createdAt,updatedAt) VALUES (1,1,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO rosters (teamId,studentId,createdAt,updatedAt) VALUES (1,2,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO rosters (teamId,studentId,createdAt,updatedAt) VALUES (1,3,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO rosters (teamId,studentId,createdAt,updatedAt) VALUES (1,4,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO rosters (teamId,studentId,createdAt,updatedAt) VALUES (2,1,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO rosters (teamId,studentId,createdAt,updatedAt) VALUES (2,3,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO rosters (teamId,studentId,createdAt,updatedAt) VALUES (2,5,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO rosters (teamId,studentId,createdAt,updatedAt) VALUES (3,2,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO rosters (teamId,studentId,createdAt,updatedAt) VALUES (3,3,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO rosters (teamId,studentId,createdAt,updatedAt) VALUES (4,2,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO rosters (teamId,studentId,createdAt,updatedAt) VALUES (4,4,'2020-12-18 01:00:00','2020-12-18 01:00:00');

INSERT INTO calendar (event_name, event_datetime, teamId, createdAt, updatedAt,) VALUES ('Football Game', '2020-01-31 17:00:00',1, '2020-12-18 00:00:00','2020-12-18 00:00:00');
INSERT INTO calendar (event_name, event_datetime, teamId, createdAt, updatedAt) VALUES ('Roller Derby Championships', '2020-02-01 17:00:00',3, '2020-12-18 00:00:00','2020-12-18 00:00:00');