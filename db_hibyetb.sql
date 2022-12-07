-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 03, 2022 at 03:33 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_hibyetb`
--

-- --------------------------------------------------------

--
-- Table structure for table `artikel`
--

CREATE TABLE `artikel` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `deskripsi` varchar(255) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `url_foto` varchar(255) DEFAULT NULL,
  `pengunggah` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `artikel`
--

INSERT INTO `artikel` (`id`, `judul`, `deskripsi`, `foto`, `url_foto`, `pengunggah`, `createdAt`, `updatedAt`) VALUES
(1, 'Bahaya TBC Dimasa Covid 19', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has su', '673cc3272341930976723042a4552fb6.png', 'http://localhost:5000/images/artikel/673cc3272341930976723042a4552fb6.png', 'adadeh', '2022-12-03 12:35:59', '2022-12-03 12:36:48'),
(3, 'Apa itu TBC?', 'jfgsfdsf nbjhsdgjsadghj jkhsdjkshajkdfhsad mbfhsdisdhf', '615fb4838cdb3c6ef75627e8f7dadbc3.png', 'http://localhost:5000/images/artikel/615fb4838cdb3c6ef75627e8f7dadbc3.png', 'saya', '2022-12-03 13:34:29', '2022-12-03 13:34:29');

-- --------------------------------------------------------

--
-- Table structure for table `dokters`
--

CREATE TABLE `dokters` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `url_foto` varchar(255) DEFAULT NULL,
  `spesialis` varchar(255) DEFAULT NULL,
  `tempat_praktik` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dokters`
--

INSERT INTO `dokters` (`id`, `nama`, `email`, `foto`, `url_foto`, `spesialis`, `tempat_praktik`, `phone`, `createdAt`, `updatedAt`) VALUES
(5, 'halodok3', 'halodok3@gmail.com', 'd6671e6b67398a7c7483d902c2048b9b.jpg', 'http://localhost:5000/images/dokter/d6671e6b67398a7c7483d902c2048b9b.jpg', 'Penyakit Paru', 'Batam', 522414433, '2022-12-03 14:26:11', '2022-12-03 14:26:11');

-- --------------------------------------------------------

--
-- Table structure for table `reminder`
--

CREATE TABLE `reminder` (
  `id` int(11) NOT NULL,
  `tgl_mulai` datetime DEFAULT NULL,
  `tgl_selesai` datetime DEFAULT NULL,
  `jam_pagi` time DEFAULT NULL,
  `ket_pagi` varchar(255) DEFAULT NULL,
  `jam_siang` time DEFAULT NULL,
  `ket_siang` varchar(255) DEFAULT NULL,
  `jam_malam` time DEFAULT NULL,
  `ket_malam` varchar(255) DEFAULT NULL,
  `total_hari` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reminder`
--

INSERT INTO `reminder` (`id`, `tgl_mulai`, `tgl_selesai`, `jam_pagi`, `ket_pagi`, `jam_siang`, `ket_siang`, `jam_malam`, `ket_malam`, `total_hari`, `createdAt`, `updatedAt`) VALUES
(2, '2022-01-18 00:00:00', '2022-09-20 00:00:00', '07:00:00', 'Vitamin', '12:00:00', 'Obat dan Vitamin', '19:00:00', 'Obat TBC', NULL, '2022-12-03 13:15:25', '2022-12-03 13:15:25'),
(3, '2022-01-18 00:00:00', '2022-09-20 00:00:00', '07:00:00', 'Vitamin', '12:00:00', 'Obat dan Vitamin', '19:00:00', 'Obat TBC', NULL, '2022-12-03 13:15:45', '2022-12-03 13:15:45'),
(4, '2022-01-18 00:00:00', '2022-09-20 00:00:00', '07:00:00', 'Vitamin', '12:00:00', 'Obat dan Vitamin', '19:00:00', 'Obat TBC', 5, '2022-12-03 13:17:19', '2022-12-03 13:18:04'),
(5, '2022-01-18 00:00:00', '2022-09-20 00:00:00', '07:00:00', 'Vitamin', '12:00:00', 'Obat dan Vitamin', '19:00:00', 'Obat TBC', 20, '2022-12-03 13:17:39', '2022-12-03 13:17:39'),
(6, '2022-01-18 00:00:00', '2022-09-20 00:00:00', '07:00:00', 'Vitamin', '12:00:00', 'Obat dan Vitamin', '19:00:00', 'Obat TBC', 5, '2022-12-03 13:53:30', '2022-12-03 13:53:30');

-- --------------------------------------------------------

--
-- Table structure for table `spesialis`
--

CREATE TABLE `spesialis` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `spesialis`
--

INSERT INTO `spesialis` (`id`, `nama`, `createdAt`, `updatedAt`) VALUES
(2, 'Penyakit Dalam', '2022-12-02 15:39:28', '2022-12-02 15:39:28');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nik` int(11) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `nik`, `age`, `phone`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-12-02 16:12:50', '2022-12-02 16:12:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artikel`
--
ALTER TABLE `artikel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dokters`
--
ALTER TABLE `dokters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reminder`
--
ALTER TABLE `reminder`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `spesialis`
--
ALTER TABLE `spesialis`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `artikel`
--
ALTER TABLE `artikel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `dokters`
--
ALTER TABLE `dokters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `reminder`
--
ALTER TABLE `reminder`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `spesialis`
--
ALTER TABLE `spesialis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
