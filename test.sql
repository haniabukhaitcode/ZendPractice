-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 18, 2019 at 12:39 AM
-- Server version: 5.7.27-0ubuntu0.19.04.1
-- PHP Version: 7.2.24-0ubuntu0.19.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

DROP DATABASE IF EXISTS zftutorial;
CREATE DATABASE zftutorial;
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zftutorial`
--

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

CREATE TABLE `albums` (
  `id` int(11) NOT NULL,
  `title` varchar(256) NOT NULL,
  `artist_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `albums`
--

INSERT INTO `albums` (`id`, `title`, `artist_id`) VALUES
(52, 'Software Developer', 13),
(55, 'C++', 14),
(58, 'JavaScript', 15),
(59, 'PHP', 18),
(61, 'Java', 18),
(62, 'GoLang', 20);

-- --------------------------------------------------------

--
-- Table structure for table `albums_tags`
--

CREATE TABLE `albums_tags` (
  `album_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `albums_tags`
--

INSERT INTO `albums_tags` (`album_id`, `tag_id`) VALUES
(58, 14),
(58, 15),
(55, 19),
(59, 19),
(61, 21),
(62, 21),
(62, 22);

-- --------------------------------------------------------

--
-- Table structure for table `artists`
--

CREATE TABLE `artists` (
  `id` int(11) NOT NULL,
  `artist` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `artists`
--

INSERT INTO `artists` (`id`, `artist`) VALUES
(12, 'Artist1'),
(13, 'Artist2'),
(14, 'Artist3'),
(15, 'Artist4'),
(16, 'Artist5'),
(17, 'Artist6'),
(18, 'Artist7'),
(19, 'Artist8'),
(20, 'Artist9');

-- --------------------------------------------------------

--
-- Stand-in structure for view `fetchTagsAlbums`
-- (See below for the actual view)
--
CREATE TABLE `fetchTagsAlbums` (
`id` int(11)
,`tag` varchar(256)
,`tag_id` int(11)
,`album_id` int(11)
,`artist_id` int(11)
,`artist` varchar(256)
,`title` varchar(256)
,`tagName` text
,`tagID` text
);

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `tag` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `tag`) VALUES
(14, 'Tag1'),
(15, 'Tag2'),
(16, 'Tag3'),
(17, 'Tag4'),
(18, 'Tag5'),
(19, 'Tag6'),
(20, 'Tag7'),
(21, 'Tag8'),
(22, 'Tag9');

-- --------------------------------------------------------

--
-- Structure for view `fetchTagsAlbums`
--
DROP TABLE IF EXISTS `fetchTagsAlbums`;

CREATE ALGORITHM=UNDEFINED DEFINER=`hani`@`localhost` SQL SECURITY DEFINER VIEW `fetchTagsAlbums`  AS  select `albums`.`id` AS `id`,`tags`.`tag` AS `tag`,`albums_tags`.`tag_id` AS `tag_id`,`albums_tags`.`album_id` AS `album_id`,`albums`.`artist_id` AS `artist_id`,`artists`.`artist` AS `artist`,`albums`.`title` AS `title`,group_concat(`tags`.`tag` order by `albums`.`id` ASC separator ',') AS `tagName`,group_concat(`tags`.`id` order by `albums`.`id` ASC separator ',') AS `tagID` from (((`albums` join `artists` on((`artists`.`id` = `albums`.`artist_id`))) join `albums_tags` on((`albums_tags`.`album_id` = `albums`.`id`))) join `tags` on((`tags`.`id` = `albums_tags`.`tag_id`))) group by `albums`.`id` order by `albums`.`id` ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`),
  ADD KEY `artist_id` (`artist_id`);

--
-- Indexes for table `albums_tags`
--
ALTER TABLE `albums_tags`
  ADD PRIMARY KEY (`album_id`,`tag_id`),
  ADD KEY `tag_id` (`tag_id`),
  ADD KEY `album_id` (`album_id`);

--
-- Indexes for table `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `albums`
--
ALTER TABLE `albums`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;
--
-- AUTO_INCREMENT for table `artists`
--
ALTER TABLE `artists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `albums`
--
ALTER TABLE `albums`
  ADD CONSTRAINT `albums_ibfk_1` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `albums_tags`
--
ALTER TABLE `albums_tags`
  ADD CONSTRAINT `albums_tags_ibfk_2` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `albums_tags_ibfk_3` FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;