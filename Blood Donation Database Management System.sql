-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: localhost    Database: blood_donation_database_management_system
-- ------------------------------------------------------
-- Server version	8.0.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blood`
--

DROP TABLE IF EXISTS `blood`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blood` (
  `Blood_Id` int NOT NULL AUTO_INCREMENT,
  `Blood_Group` varchar(45) NOT NULL,
  `Quantity` decimal(5,2) NOT NULL,
  `Donor_Id` int NOT NULL,
  `Pateint_Id` int NOT NULL,
  PRIMARY KEY (`Blood_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blood`
--

LOCK TABLES `blood` WRITE;
/*!40000 ALTER TABLE `blood` DISABLE KEYS */;
INSERT INTO `blood` VALUES (1,'A+',0.45,1,2),(2,'B+',0.50,2,1),(3,'AB-',0.48,3,3),(4,'O-',0.42,4,4),(5,'AB+',0.46,5,5),(6,'A-',0.44,6,6),(7,'O-',0.56,7,7),(8,'AB-',0.68,8,8),(9,'B-',0.59,9,9),(10,'A-',0.42,10,10);
/*!40000 ALTER TABLE `blood` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blood_bank`
--

DROP TABLE IF EXISTS `blood_bank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blood_bank` (
  `Bank_ID` int NOT NULL,
  `Name` varchar(45) NOT NULL,
  `Location` varchar(45) NOT NULL,
  `Available_Blood_Group` varchar(45) NOT NULL,
  `Quantity` decimal(7,2) DEFAULT NULL,
  PRIMARY KEY (`Bank_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blood_bank`
--

LOCK TABLES `blood_bank` WRITE;
/*!40000 ALTER TABLE `blood_bank` DISABLE KEYS */;
INSERT INTO `blood_bank` VALUES (1,'Dhaka Blood Center','Dhaka','A+, O+, B+, AB+',3.12),(2,' Chittagong Blood Bank','Chattogram','O-, A-, B+',1.32),(3,'Sylhet Life Blood Blank','Sylhet','A+, O+',0.95),(4,'Rajshahi Blood Donation Unit','Rajshahi','B+, AB+',0.88);
/*!40000 ALTER TABLE `blood_bank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donor`
--

DROP TABLE IF EXISTS `donor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donor` (
  `Donor_ID` int NOT NULL,
  `Name` varchar(45) NOT NULL,
  `Gender` varchar(45) NOT NULL,
  `Age` int NOT NULL,
  `Blood_Group` varchar(45) NOT NULL,
  `Contact` varchar(45) NOT NULL,
  `Quantiy_of_Blood` decimal(5,2) NOT NULL,
  `Date_of_Donation` datetime NOT NULL,
  PRIMARY KEY (`Donor_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donor`
--

LOCK TABLES `donor` WRITE;
/*!40000 ALTER TABLE `donor` DISABLE KEYS */;
INSERT INTO `donor` VALUES (1,'Rahim','Male',28,'A+','01711223344',0.45,'2025-10-15 00:00:00'),(2,'Khatun','Female',24,'O+','01811224455',0.50,'2025-10-13 00:00:00'),(3,'Nabil','Male',32,'B+','01299887766',0.48,'2025-10-09 00:00:00'),(4,'Farhana','Female',27,'AB-','01655667788',0.45,'2025-10-16 00:00:00'),(5,'Mahfuz','Male',21,'O-','01766778899',0.44,'2025-08-23 00:00:00'),(6,'Sadia','Female',30,'A-','01911223377',0.47,'2025-09-24 00:00:00'),(7,'Riya','Female',26,'B-','01895623789',0.56,'2025-08-19 00:00:00'),(8,'Lahina','Female',28,'A-','01598627469',0.89,'2025-07-19 00:00:00'),(9,'Isfat','Male',29,'AB-','04569875647',0.50,'2025-11-01 00:00:00'),(10,'Mizan','Male',19,'O+','01569872348',0.48,'2025-09-14 00:00:00');
/*!40000 ALTER TABLE `donor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hospital`
--

DROP TABLE IF EXISTS `hospital`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hospital` (
  `Hospital_ID` int NOT NULL,
  `Name` varchar(45) NOT NULL,
  `Location` varchar(45) NOT NULL,
  `Bank_Id` varchar(45) NOT NULL,
  PRIMARY KEY (`Hospital_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospital`
--

LOCK TABLES `hospital` WRITE;
/*!40000 ALTER TABLE `hospital` DISABLE KEYS */;
INSERT INTO `hospital` VALUES (1,'Apollo Hospital','Dhaka','1'),(2,'Chittagong Medical Hospital','Chattogram','2'),(3,'Rajshahi Medical Hospital','Rajshahi','3'),(4,'Sylhet Central Hospital','Sylhet','4'),(5,'Square Hospital','Dhaka','5'),(6,'Islami Bank Hospital','Chattogram','6');
/*!40000 ALTER TABLE `hospital` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient` (
  `Patient_ID` int NOT NULL,
  `Name` varchar(45) NOT NULL,
  `Gender` varchar(45) NOT NULL,
  `Blood_Group` varchar(45) NOT NULL,
  PRIMARY KEY (`Patient_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (1,'Maria','Female','O+'),(2,'Tanvir','Male','B+'),(3,'Sharmin','Female','AB+'),(4,'Fahim','Male','O-'),(5,'Rashed','Male','A-'),(6,'Nurjahan','Female','A+'),(7,'Fatema','Female','AB-'),(8,'Roy','Male','B-'),(9,'Shoumik','Male','O+'),(10,'Bijoy','Male','A+');
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-05  0:27:01
