ALTER USER 'root'@'localhost' IDENTIFIED BY '1234';
DROP DATABASE IF EXISTS tp_grupo_7;
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
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE comentarios (
  `id_comentario` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) DEFAULT NULL,
  `titulo` varchar(45) DEFAULT NULL,
  `apodo` varchar(45) DEFAULT NULL,
  `contenido_id_contenido` int(11) NOT NULL,
  `comentario_id_comentario` int(11) NOT NULL,
  PRIMARY KEY (`id_comentario`),
  KEY `fk_Comentario_Contenido1_idx` (`contenido_id_contenido`),
  KEY `fk_Comentario_Comentario1_idx` (`comentario_id_comentario`),
  CONSTRAINT `fk_Comentario_Comentario1` FOREIGN KEY (`comentario_id_comentario`) REFERENCES `comentarios` (`id_comentario`),
  CONSTRAINT `fk_Comentario_Contenido1` FOREIGN KEY (`contenido_id_contenido`) REFERENCES `contenidos` (`id_contenido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contenidos`
--

DROP TABLE IF EXISTS contenido;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE contenidos (
  `id_contenido` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) DEFAULT NULL,
  `fecha_publicacion` date DEFAULT NULL,
  `extension_archivo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_contenido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contenidos`
--

LOCK TABLES `contenidos` WRITE;
/*!40000 ALTER TABLE `contenidos` DISABLE KEYS */;
INSERT INTO `contenidos` VALUES (1,'pelis','2005-02-02','.mp4'),(2,'series','2010-11-11','.avi'),(3,'musica','2011-12-12','-mp3'),(4,'pelis infantil','2010-02-11','.mp4');
/*!40000 ALTER TABLE `contenidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `descarga`
--

DROP TABLE IF EXISTS `descargas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `descargas` (
  `id_descarga` int(11) NOT NULL AUTO_INCREMENT,
  `velocidad_transfer` decimal(10,0) DEFAULT NULL,
  `fecha_descarga` DATE,
  `contenido_id_contenido` int(11) NOT NULL,
  `usuario_id_usuario` int(11) NOT NULL,
  PRIMARY KEY (`id_descarga`),
  KEY `fk_Descarga_Contenido1_idx` (`contenido_id_contenido`),
  KEY `fk_Descarga_Usuario1_idx` (`usuario_id_usuario`),
  CONSTRAINT `fk_Descarga_Contenido1` FOREIGN KEY (`contenido_id_contenido`) REFERENCES `contenidos` (`id_contenido`),
  CONSTRAINT `fk_Descarga_Usuario1` FOREIGN KEY (`usuario_id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `descargas`
--

LOCK TABLES `descargas` WRITE;
/*!40000 ALTER TABLE `descargas` DISABLE KEYS */;
/*!40000 ALTER TABLE `descargas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `encuesta`
--

DROP TABLE IF EXISTS `encuestas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `encuestas` (
  `id_encuesta` int(11) NOT NULL AUTO_INCREMENT,
  `puntaje` decimal(10,0) DEFAULT NULL,
  `resumen_positivo` varchar(45) DEFAULT NULL,
  `resumen_negativo` varchar(45) DEFAULT NULL,
  `Descarga_ID_Descarga` int(11) NOT NULL,
  PRIMARY KEY (`Id_Encuesta`),
  KEY `fk_Encuesta_Descarga1_idx` (`descarga_id_descarga`),
  CONSTRAINT `fk_Encuesta_Descarga1` FOREIGN KEY (`descarga_id_descarga`) REFERENCES `descarga` (`id_descarga`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `encuestas`
--

LOCK TABLES `encuestas` WRITE;
/*!40000 ALTER TABLE `encuestas` DISABLE KEYS */;
/*!40000 ALTER TABLE `encuestas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `es_clasificado`
--

DROP TABLE IF EXISTS `es_clasificado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `es_clasificado` (
  `contenido_id_contenido` int(11) NOT NULL,
  `categoria_id_categoria` int(11) NOT NULL,
  PRIMARY KEY (`contenido_id_contenido`,`categoria_id_categoria`),
  KEY `fk_Contenido_has_Categoria_Categoria1_idx` (`categoria_id_categoria`),
  KEY `fk_Contenido_has_Categoria_Contenido1_idx` (`contenido_id_contenido`),
  CONSTRAINT `fk_Contenido_has_Categoria_Categoria1` FOREIGN KEY (`categoria_id_categoria`) REFERENCES `categorias` (`id_categoria`),
  CONSTRAINT `fk_Contenido_has_Categoria_Contenido1` FOREIGN KEY (`contenido_id_contenido`) REFERENCES `contenidos` (`id_contenido`)
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
-- Table structure for table `reproducciones`
--

DROP TABLE IF EXISTS `reproducciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reproducciones` (
  `id_reproduccion` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_inicio` date DEFAULT NULL,
  `hora_inicio` time DEFAULT NULL,
  `hora_fin` time DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `OS_utilizado` varchar(45) DEFAULT NULL,
  `Contenido_ID_Contenido` int(11) NOT NULL,
  PRIMARY KEY (`id_reproduccion`),
  KEY `fk_Reproduccion_Contenido_idx` (`contenido_id_contenido`),
  CONSTRAINT `fk_Reproduccion_Contenido` FOREIGN KEY (`contenido_id_contenido`) REFERENCES `contenidos` (`id_contenido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reproducciones`
--

LOCK TABLES `reproducciones` WRITE;
/*!40000 ALTER TABLE `reproducciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `reproducciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `fecha_nac` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
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
