CREATE DATABASE  IF NOT EXISTS `tp_grupo_7` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `tp_grupo_7`;
-- MariaDB dump 10.17  Distrib 10.4.8-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: tp_grupo_7
-- ------------------------------------------------------
-- Server version	10.4.8-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
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
/*!40101 SET character_set_client = utf8 */;
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
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comentarios` (
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

DROP TABLE IF EXISTS `contenidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contenidos` (
  `id_contenido` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) DEFAULT NULL,
  `fecha_publicacion` date DEFAULT NULL,
  `extension_archivo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_contenido`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contenidos`
--

LOCK TABLES `contenidos` WRITE;
/*!40000 ALTER TABLE `contenidos` DISABLE KEYS */;
INSERT INTO `contenidos` VALUES (1,'Enunciado tp','2018-01-05','.docx'),(2,'Bohemian Rapsody','2016-10-12','.mp3'),(3,'Show must go on','2019-07-22','.wav'),(5,'Apunte1_modelizacion','2015-08-05','.pdf'),(6,'Diagrama de trnasicion de usuario','2013-10-01','.pdf'),(7,'Killer queen','2019-03-16','.mp3'),(8,'La bestia pop','2016-11-02','.wav'),(9,'Juguetes perdidos','2017-01-02','.wav'),(10,'chau- ntvg','2010-04-19','.mp3'),(11,'El hijo de hernandez','2012-12-12','.wav'),(12,'Lo malo de ser bueno','2012-05-01','.mp3'),(13,'Como Ali','2009-09-12','.wav'),(14,'El farolito','2010-10-24','.wav'),(15,'Sin documentos','2007-09-13','.mp3'),(16,'Ya no se que hacer con migo','2011-12-31','.wav'),(17,'Eres','2011-11-02','.wav'),(18,'Cool cat','2013-06-15','.mp3'),(19,'Dont stop me now','2009-01-19','.mp3'),(20,'Breakthru','2009-06-08','.mp3'),(21,'Seven seas of rhye','2009-12-30','.mp3'),(22,'Crimen','2016-10-09','.wav');
/*!40000 ALTER TABLE `contenidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `descargas`
--

DROP TABLE IF EXISTS `descargas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `descargas` (
  `id_descarga` int(11) NOT NULL AUTO_INCREMENT,
  `velocidad_transfer` decimal(10,0) DEFAULT NULL,
  `fecha_descarga` date DEFAULT NULL,
  `contenido_id_contenido` int(11) NOT NULL,
  `usuario_id_usuario` int(11) NOT NULL,
  PRIMARY KEY (`id_descarga`),
  KEY `fk_Descarga_Contenido1_idx` (`contenido_id_contenido`),
  KEY `fk_Descarga_Usuario1_idx` (`usuario_id_usuario`),
  CONSTRAINT `fk_Descarga_Contenido1` FOREIGN KEY (`contenido_id_contenido`) REFERENCES `contenidos` (`id_contenido`),
  CONSTRAINT `fk_Descarga_Usuario1` FOREIGN KEY (`usuario_id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `descargas`
--

LOCK TABLES `descargas` WRITE;
/*!40000 ALTER TABLE `descargas` DISABLE KEYS */;
INSERT INTO `descargas` VALUES (1,2,'2019-10-25',7,1),(2,1,'2019-10-25',9,1),(3,1,'2019-10-26',5,2),(4,2,'2019-10-27',12,3),(5,6,'2019-10-28',22,2),(6,11,'2019-10-29',20,3),(7,2,'2019-10-29',18,1),(8,2,'2019-10-29',13,3),(9,3,'2019-10-29',5,2),(10,2,'2019-10-30',6,1),(11,6,'2019-10-31',1,1),(12,14,'2019-11-01',11,3),(13,1,'2019-11-01',10,2),(14,1,'2019-11-02',12,1),(15,0,'2019-11-03',14,3),(16,2,'2019-11-03',21,1),(17,19,'2019-11-03',3,1),(18,3,'2019-11-04',3,3),(19,3,'2019-11-05',12,3),(20,3,'2019-11-06',11,2);
/*!40000 ALTER TABLE `descargas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `encuestas`
--

DROP TABLE IF EXISTS `encuestas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `encuestas` (
  `id_encuesta` int(11) NOT NULL AUTO_INCREMENT,
  `puntaje` decimal(10,0) DEFAULT NULL,
  `resumen_positivo` varchar(45) DEFAULT NULL,
  `resumen_negativo` varchar(45) DEFAULT NULL,
  `Descarga_ID_Descarga` int(11) NOT NULL,
  PRIMARY KEY (`id_encuesta`),
  KEY `fk_Encuesta_Descarga1_idx` (`Descarga_ID_Descarga`),
  CONSTRAINT `fk_Encuesta_Descarga1` FOREIGN KEY (`Descarga_ID_Descarga`) REFERENCES `descargas` (`id_descarga`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `encuestas`
--

LOCK TABLES `encuestas` WRITE;
/*!40000 ALTER TABLE `encuestas` DISABLE KEYS */;
INSERT INTO `encuestas` VALUES (1,8,'Velocidad estable','Descargo lento',16),(2,5,'Muy buena calidad','Descargo de manera inestable',17),(3,9,'Exelente cancion','NADA',7),(4,10,'Se bajo rapido buena cancion','NADA',11),(5,3,'NADA!','Bajo lentisimo',5),(6,6,'Aceptable velocidad','Inestabilidad de red',9),(7,8,'Muuy buena cancion bajo rapido','le falta calidad de sonido',19),(8,1,'MALISIMO','DIO ERROR NI SE DESCARGO MALA PAGINA',20);
/*!40000 ALTER TABLE `encuestas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `es_clasificado`
--

DROP TABLE IF EXISTS `es_clasificado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reproducciones` (
  `id_reproduccion` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_inicio` date DEFAULT NULL,
  `hora_inicio` time DEFAULT NULL,
  `hora_fin` time DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `OS_utilizado` varchar(45) DEFAULT NULL,
  `Contenido_ID_Contenido` int(11) NOT NULL,
  PRIMARY KEY (`id_reproduccion`),
  KEY `fk_Reproduccion_Contenido_idx` (`Contenido_ID_Contenido`),
  CONSTRAINT `fk_Reproduccion_Contenido` FOREIGN KEY (`Contenido_ID_Contenido`) REFERENCES `contenidos` (`id_contenido`)
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
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `fecha_nac` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Javier','Gomez','1997-03-16',':D'),(2,'Nicolas','Dorado','1992-09-11','1234'),(3,'Matias','Maldonado','1994-11-16','asdf');
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

-- Dump completed on 2019-11-06 14:51:56
