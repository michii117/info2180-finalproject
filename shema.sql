DROP DATABASE IF EXISTS bugme;
CREATE DATABASE bugme;
USE bugme;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(20) NOT NULL auto_increment,
  `firstname` varchar(64) NOT NULL ,
  `lastname` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL ,
  `email` varchar(64) NOT NULL ,
  `date_joined` DATETIME NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4080 DEFAULT CHARSET=utf8mb4;

LOCK TABLES `users` WRITE;

INSERT INTO `users` (`ID`, `firstname`, `lastname`, `password`, `email`, `date_joined`) VALUES
(1, 'Lorem', 'Ipsum','482c811da5d5b4bc6d497ffa98491e38', 'admin@project2.com',  NOW());

UNLOCK TABLES;

DROP TABLE IF EXISTS `issues`;
CREATE TABLE `issues` (
  `id` int(20) NOT NULL auto_increment,
  `title` varchar(64) NOT NULL ,
  `description` text NOT NULL,
  `type` varchar(30) NOT NULL ,
  `priority` varchar(10) NOT NULL ,
  `status` varchar(20) NOT NULL,
  `assigned_to` int(20) NOT NULL,
  `created_by` int(20) NOT NULL,
  `created` DATETIME NOT NULL,
  `updated` DATETIME NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4080 DEFAULT CHARSET=utf8mb4;
