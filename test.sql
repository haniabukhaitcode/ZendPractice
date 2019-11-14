-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 14, 2019 at 06:39 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zftutorial`
--

-- --------------------------------------------------------

--
-- Table structure for table `albums_tags`
--

CREATE TABLE `albums_tags` (
  `book_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `albums_tags`
--

INSERT INTO `albums_tags` (`book_id`, `tag_id`) VALUES
(58, 14),
(60, 14),
(58, 15),
(57, 16),
(60, 16),
(55, 19),
(59, 19),
(60, 19),
(60, 20),
(61, 21),
(62, 21),
(62, 22);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `albums_tags`
--
ALTER TABLE `albums_tags`
  ADD PRIMARY KEY (`book_id`,`tag_id`),
  ADD KEY `tag_id` (`tag_id`),
  ADD KEY `book_id` (`book_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `albums_tags`
--
ALTER TABLE `albums_tags`
  ADD CONSTRAINT `albums_tags_ibfk_2` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `albums_tags_ibfk_3` FOREIGN KEY (`book_id`) REFERENCES `albums` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;