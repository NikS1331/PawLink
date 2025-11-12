# PawLink
Login Page design 


# to update database code
npx sequelize-auto -h localhost -d pet_sitting_db -u root -p 3306 -x root -e mysql -o "./models"


#
CREATE DATABASE `pet_sitting_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
CREATE TABLE `pet_owners` (
  `ownerID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `address` text,
  `password_hash` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ownerID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `pet_sitters` (
  `sitterID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `experience` text,
  `services` json DEFAULT NULL,
  `password_hash` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sitterID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `pets` (
  `petID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `breed` varchar(100) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `medicalInfo` text,
  `ownerID` int DEFAULT NULL,
  PRIMARY KEY (`petID`),
  KEY `ownerID` (`ownerID`),
  CONSTRAINT `pets_ibfk_1` FOREIGN KEY (`ownerID`) REFERENCES `pet_owners` (`ownerID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `schedules` (
  `scheduleID` int NOT NULL AUTO_INCREMENT,
  `sitterID` int DEFAULT NULL,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  `notes` text,
  PRIMARY KEY (`scheduleID`),
  KEY `sitterID` (`sitterID`),
  CONSTRAINT `schedules_ibfk_1` FOREIGN KEY (`sitterID`) REFERENCES `pet_sitters` (`sitterID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `sitting_requests` (
  `requestID` int NOT NULL AUTO_INCREMENT,
  `status` varchar(50) DEFAULT NULL,
  `sitterID` int DEFAULT NULL,
  `petID` int DEFAULT NULL,
  PRIMARY KEY (`requestID`),
  KEY `sitterID` (`sitterID`),
  KEY `petID` (`petID`),
  CONSTRAINT `sitting_requests_ibfk_1` FOREIGN KEY (`sitterID`) REFERENCES `pet_sitters` (`sitterID`),
  CONSTRAINT `sitting_requests_ibfk_2` FOREIGN KEY (`petID`) REFERENCES `pets` (`petID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
