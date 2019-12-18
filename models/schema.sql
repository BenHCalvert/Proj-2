####################################################
# Production database using sequelizer associations
# These associations will need to be setup
####################################################

DROP DATABASE IF EXISTS sunnySideDB;
CREATE DATABASE sunnySideDB;

CREATE TABLE adult (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30)
);

CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    grade INT not null,
    allergies VARCHAR(30)
);

CREATE TABLE family (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    adult_id INT,
    adult_type VARCHAR(30)
);

CREATE TABLE contact (
    id INT AUTO_INCREMENT PRIMARY KEY,
    primary_contact VARCHAR(15),
    secondary_contact VARCHAR(15),
    type VARCHAR(15),
    student_id INT,
    adult_id INT
);

CREATE TABLE form (
    id INT AUTO_INCREMENT PRIMARY KEY,
    form_body VARCHAR(200),
    student_id INT
);

CREATE TABLE sport (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sport_name VARCHAR(20)
);

CREATE TABLE team (
    id INT AUTO_INCREMENT PRIMARY KEY,
    team_name VARCHAR(20),
    sport VARCHAR(20)
);

CREATE TABLE roster (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    student_name VARCHAR(60),
    student_contact_id INT,
    sport_id INT
);

########################################
# Test database using MYSQL FOREIGN KEYS
########################################

DROP DATABASE IF EXISTS ssTestDB;
CREATE DATABASE ssTestDB;

CREATE TABLE adult (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30)
);

CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    grade INT not null,
    allergies VARCHAR(30)
);

CREATE TABLE family (
     id INT AUTO_INCREMENT PRIMARY KEY,
     student_id INT,
     adult_id INT,
     adult_type VARCHAR(30),
     FOREIGN KEY (student_id) REFERENCES student(id),
     FOREIGN KEY (adult_id) REFERENCES adult(id)
);

CREATE TABLE contact (
    id INT AUTO_INCREMENT PRIMARY KEY,
    primary_contact VARCHAR(15),
    secondary_contact VARCHAR(15),
    type VARCHAR(15),
    student_id INT,
    adult_id INT,
    FOREIGN KEY (student_id) REFERENCES student(id),
    FOREIGN KEY (adult_id) REFERENCES adult(id)
);

CREATE TABLE form (
    id INT AUTO_INCREMENT PRIMARY KEY,
    form_body VARCHAR(200),
    student_id INT,
    FOREIGN KEY (student_id) REFERENCES student(id)
);

CREATE TABLE sport (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sport_name VARCHAR(20)
);

CREATE TABLE team (
    id INT AUTO_INCREMENT PRIMARY KEY,
    team_name VARCHAR(20),
    sport VARCHAR(20)
);

CREATE TABLE roster (
      id INT AUTO_INCREMENT PRIMARY KEY,
      student_id INT,
      student_contact_id INT,
      sport_id INT,
      FOREIGN KEY (student_id) REFERENCES student(id),
      FOREIGN KEY (student_contact_id) REFERENCES contact(id),
      FOREIGN KEY (sport_id) REFERENCES team(id)
);