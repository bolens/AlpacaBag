CREATE DATABASE IF NOT EXISTS travel_db;
USE travel_db;


INSERT INTO destinations(locationName, lat, lon, pointsOfInterest, surveyPoints, category, createdAt, updatedAt) 
VALUES("denver", 100, 45, "YEA", 5, "fun", "11:55", "11:55");


SELECT * FROM Destination;
