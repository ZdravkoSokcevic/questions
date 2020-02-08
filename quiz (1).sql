-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 08, 2020 at 02:40 
-- Server version: 5.7.28-0ubuntu0.19.04.2
-- PHP Version: 7.3.14-1+ubuntu19.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quiz`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Nauka'),
(2, 'kategorija 6'),
(3, 'kategorija 5'),
(4, 'kat 1'),
(5, 'gd'),
(6, 'gd'),
(7, 'afe'),
(8, 'fwef'),
(9, 'neka kat');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `path`) VALUES
(1, '/storage/IMG_20191225_131459.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `question` varchar(255) NOT NULL,
  `first_answer` varchar(255) NOT NULL,
  `second_answer` varchar(255) NOT NULL,
  `third_answer` varchar(255) NOT NULL,
  `fourth_answer` varchar(255) NOT NULL,
  `true_answer` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `question`, `first_answer`, `second_answer`, `third_answer`, `fourth_answer`, `true_answer`) VALUES
(1, 'Mikronezija se nalazi u', 'Atlantskom oceanu', 'Mrtvom moru', 'Tihom oceanu', 'Indijskom oceanu', 3),
(2, 'Afrika nije prirodno stanište ove životinje?', ' Tigar', ' Leopard', ' Gnu', 'Kapski pavijan', 1),
(3, 'Koji je glavni grad Kolumbije?', 'Managua', 'Tijuana', 'Medellin', 'Bogota', 4),
(4, 'U kojem se ruskom gradu nalazi Državni muzej Ermitaž?', ' Volgograd', 'Moskva', ' Sankt-Peterburg', 'Omsk', 3),
(5, 'Na zastavi koje države se nalaze žuta zvijezda, knjiga i puška AK-47 (Kalašnjikov)?', 'Mozambika', 'Somalije', 'Sjeverne Koreje', 'Kube', 1),
(6, 'Jimmy Page je osnovao band', 'Pink Floyd', 'Led Zeppelin', 'The Beatles', 'Queen', 2),
(7, 'Koja je reprezentacija pobijedila na Svjetskom prvenstvu u fudbalu 2010. godine?', 'Španija', 'Engleska', 'Holandija', 'Portugal', 1),
(8, 'Machu Picchu je sveti grad', ' Inka', 'Maja', 'Tolteca', ' Azteca', 1),
(9, 'Koja je Da Vincijeva slika 1911. godine ukradena iz muzeja Louvre u Parizu?', 'Madona sa karanfilom', ' Mona Lisa', ' Sveti Ivan Krstitelj', ' Portret dame', 2),
(10, 'Nauka o stanovništvu naziva se:', 'Etnografija', 'Demografija', 'Dendrologija', 'Etnologija', 4),
(11, 'glavni grad Srbije?', 'Nis', 'Novi sad', 'Beograd', 'Pancevo', 3),
(12, 'Koliko ostrva ima bajkalsko jezero', '11', '14', '18', '27', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
