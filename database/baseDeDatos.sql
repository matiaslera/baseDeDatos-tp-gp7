ALTER USER 'root'@'localhost' IDENTIFIED BY '1234';
CREATE DATABASE  IF NOT EXISTS tp_grupo_7 /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE tp_grupo_7;
-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: tp_grupo_7
-- ------------------------------------------------------
-- Server version	8.0.18

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
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `Id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentario`
--

DROP TABLE IF EXISTS `comentario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE comentario (
  `ID_Comentario` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) DEFAULT NULL,
  `titulo` varchar(45) DEFAULT NULL,
  `apodo` varchar(45) DEFAULT NULL,
  `Contenido_ID_Contenido` int(11) NOT NULL,
  `Comentario_ID_Comentario` int(11) NOT NULL,
  PRIMARY KEY (`ID_Comentario`),
  KEY `fk_Comentario_Contenido1_idx` (`Contenido_ID_Contenido`),
  KEY `fk_Comentario_Comentario1_idx` (`Comentario_ID_Comentario`),
  CONSTRAINT `fk_Comentario_Comentario1` FOREIGN KEY (`Comentario_ID_Comentario`) REFERENCES `comentario` (`ID_Comentario`),
  CONSTRAINT `fk_Comentario_Contenido1` FOREIGN KEY (`Contenido_ID_Contenido`) REFERENCES `contenido` (`ID_Contenido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentario`
--

LOCK TABLES `comentario` WRITE;
/*!40000 ALTER TABLE `comentario` DISABLE KEYS */;
/*!40000 ALTER TABLE `comentario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contenido`
--

DROP TABLE IF EXISTS contenido;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE contenido (
  `ID_Contenido` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) DEFAULT NULL,
  `fecha_publicacion` date DEFAULT NULL,
  `extension_archivo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID_Contenido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contenido`
--

LOCK TABLES `contenido` WRITE;
/*!40000 ALTER TABLE `contenido` DISABLE KEYS */;
INSERT INTO `contenido` VALUES (1,'pelis','2005-02-02','.mp4'),(2,'series','2010-11-11','.avi'),(3,'musica','2011-12-12','-mp3'),(4,'pelis infantil','2010-02-11','.mp4');
/*!40000 ALTER TABLE `contenido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `descarga`
--

DROP TABLE IF EXISTS `descarga`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `descarga` (
  `ID_Descarga` int(11) NOT NULL AUTO_INCREMENT,
  `velocidad_transfer` decimal(10,0) DEFAULT NULL,
  `fecha_descarga` DATE,
  `Contenido_ID_Contenido` int(11) NOT NULL,
  `Usuario_ID_Usuario` int(11) NOT NULL,
  PRIMARY KEY (`ID_Descarga`),
  KEY `fk_Descarga_Contenido1_idx` (`Contenido_ID_Contenido`),
  KEY `fk_Descarga_Usuario1_idx` (`Usuario_ID_Usuario`),
  CONSTRAINT `fk_Descarga_Contenido1` FOREIGN KEY (`Contenido_ID_Contenido`) REFERENCES `contenido` (`ID_Contenido`),
  CONSTRAINT `fk_Descarga_Usuario1` FOREIGN KEY (`Usuario_ID_Usuario`) REFERENCES `usuario` (`ID_Usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `descarga`
--

LOCK TABLES `descarga` WRITE;
/*!40000 ALTER TABLE `descarga` DISABLE KEYS */;
/*!40000 ALTER TABLE `descarga` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `encuesta`
--

DROP TABLE IF EXISTS `encuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `encuesta` (
  `Id_Encuesta` int(11) NOT NULL AUTO_INCREMENT,
  `puntaje` decimal(10,0) DEFAULT NULL,
  `resumen_positivo` varchar(45) DEFAULT NULL,
  `resumen_negativo` varchar(45) DEFAULT NULL,
  `Descarga_ID_Descarga` int(11) NOT NULL,
  PRIMARY KEY (`Id_Encuesta`),
  KEY `fk_Encuesta_Descarga1_idx` (`Descarga_ID_Descarga`),
  CONSTRAINT `fk_Encuesta_Descarga1` FOREIGN KEY (`Descarga_ID_Descarga`) REFERENCES `descarga` (`ID_Descarga`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `encuesta`
--

LOCK TABLES `encuesta` WRITE;
/*!40000 ALTER TABLE `encuesta` DISABLE KEYS */;
/*!40000 ALTER TABLE `encuesta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `es_clasificado`
--

DROP TABLE IF EXISTS `es_clasificado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `es_clasificado` (
  `Contenido_ID_Contenido` int(11) NOT NULL,
  `Categoria_Id_categoria` int(11) NOT NULL,
  PRIMARY KEY (`Contenido_ID_Contenido`,`Categoria_Id_categoria`),
  KEY `fk_Contenido_has_Categoria_Categoria1_idx` (`Categoria_Id_categoria`),
  KEY `fk_Contenido_has_Categoria_Contenido1_idx` (`Contenido_ID_Contenido`),
  CONSTRAINT `fk_Contenido_has_Categoria_Categoria1` FOREIGN KEY (`Categoria_Id_categoria`) REFERENCES `categoria` (`Id_categoria`),
  CONSTRAINT `fk_Contenido_has_Categoria_Contenido1` FOREIGN KEY (`Contenido_ID_Contenido`) REFERENCES `contenido` (`ID_Contenido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `es_clasificado`
--

LOCK TABLES `es_clasificado` WRITE;
/*!40000 ALTER TABLE `es_clasificado` DISABLE KEYS */;
/*!40000 ALTER TABLE `es_clasificado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reproduccion`
--

DROP TABLE IF EXISTS `reproduccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reproduccion` (
  `ID_Reproduccion` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_inicio` date DEFAULT NULL,
  `hora_inicio` time DEFAULT NULL,
  `hora_fin` time DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `OS_utilizado` varchar(45) DEFAULT NULL,
  `Contenido_ID_Contenido` int(11) NOT NULL,
  PRIMARY KEY (`ID_Reproduccion`),
  KEY `fk_Reproduccion_Contenido_idx` (`Contenido_ID_Contenido`),
  CONSTRAINT `fk_Reproduccion_Contenido` FOREIGN KEY (`Contenido_ID_Contenido`) REFERENCES `contenido` (`ID_Contenido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reproduccion`
--

LOCK TABLES `reproduccion` WRITE;
/*!40000 ALTER TABLE `reproduccion` DISABLE KEYS */;
/*!40000 ALTER TABLE `reproduccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `ID_Usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `fecha_nac` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID_Usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-03 16:08:11
