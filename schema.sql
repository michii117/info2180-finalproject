DROP DATABASE IF EXISTS bugme;
CREATE DATABASE bugme;
USE bugme;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
	id INT AUTO_INCREMENT PRIMARY KEY,
	firstname VARCHAR(60),
	lastname VARCHAR(60),
	password VARCHAR(60) NOT NULL,
	email VARCHAR(150) NOT NULL,
	date_joined DATETIME
);

DROP TABLE IF EXISTS issues;
CREATE TABLE issues (
	id INT AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR(255) NOT NULL,
	description TEXT,
	type VARCHAR(30) NOT NULL,
	priority VARCHAR(20) NOT NULL,
	status VARCHAR(25) NOT NULL,
	assigned_to INT,
	created_by INT NOT NULL,
	created DATETIME NOT NULL,
	updated DATETIME NOT NULL

);

INSERT INTO users (email,password) VALUES ('admin@project2.com', MD5('password123'));