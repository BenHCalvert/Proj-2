USE sunnyside_db;
INSERT INTO adults (first_name,last_name,createdAt,updatedAt) VALUES ('Author','Aardvark','2020-12-18 00:00:00','2020-12-18 00:00:00');
INSERT INTO adults (first_name,last_name,createdAt,updatedAt) VALUES ('Buster','Bovine','2020-12-18 00:00:00','2020-12-18 00:00:00');
INSERT INTO adults (first_name,last_name,createdAt,updatedAt) VALUES ('Charlie','Camel','2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO adults (first_name,last_name,createdAt,updatedAt) VALUES ('Dalia','Dingo','2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO students (first_name,last_name,grade,gender,allergies,createdAt,updatedAt) VALUES ('Emily','Elephant',6,'girl',null,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO students (first_name,last_name,grade,gender,allergies,createdAt,updatedAt) VALUES ('Frank','Frog',7,'boy','girls and toads','2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO students (first_name,last_name,grade,gender,allergies,createdAt,updatedAt) VALUES ('Gigi','Goat',6,'other',null,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO students (first_name,last_name,grade,gender,allergies,createdAt,updatedAt) VALUES ('Harry','Hermit-Crab',8,'boy',null,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO students (first_name,last_name,grade,gender,allergies,createdAt,updatedAt) VALUES ('Inga','Impala',8,'girl','lions, tiger, jackles, peanuts','2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO students (first_name,last_name,grade,gender,allergies,createdAt,updatedAt) VALUES ('Jacky','Jackle',8,'girl','carrots','2020-12-18 01:00:00','2020-12-18 01:00:00');

INSERT INTO families (adult_type,adultId,studentId,createdAt,updatedAt) VALUES ('Parent',1,1,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO families (adult_type,adultId,studentId,createdAt,updatedAt) VALUES ('Parent',1,2,'2020-12-18 01:00:00','2020-12-18 01:00:00');
INSERT INTO families (adult_type,adultId,studentId,createdAt,updatedAt) VALUES ('Guardian',1,3,'2020-12-18 01:00:00','2020-12-18 01:00:00');
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
